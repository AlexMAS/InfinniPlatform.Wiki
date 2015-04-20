---
layout: default
title: ElasticSearch: техника построения запросов
position: 2
categories: 
tags: 
---

### Введение

 

ElasticSearch представляет собой инструмент для индексации и хранения данных. Любая информация, которая может быть представлена в формате JSON, может быть сохранена и проиндексирована с использованием ElasticSearch. Цель данного документа – проиллюстрировать технику выполнения запросов к данным, проиндексированным в хранилище ElasticSearch.

### Клиент ElasticSearch для С#

Представленные примеры выполнены с использованием клиента [NEST](https://github.com/Mpdreamz/NEST). NEST – C# клиент для ElasticSearch, который упрощает формирование запросов. Структура запросов, написанных с применением NEST, полностью соответствует структуре запросов ElasticSearch. Например, следующий запрос NEST на C#:

```
var s = new SearchDescriptor<ElasticSearchProject>()
                           .From(0)
                           .Size(10)
                           .Query(q => q
                                  .Text(t => t
                                        .OnField(f => f.Name)
                                        .QueryString("this is a test")
                                        .Fuzziness(1.0)
                                        .Analyzer("my_analyzer")
                                        .PrefixLength(2)
                                  )
                    );
```

после сериализации будет соответствовать JSON строке:

```
		    { from: 0, size: 10, 
				query : {
					text: {
						name : { 
							query : "this is a test",
							analyzer : "my_analyzer",
							fuzziness: 1.0,
							prefix_length: 2
						}
					}
				}
			}
```

### Поиск данных по строке

Наиболее распространенным является поиск элементов по строке. Рассмотрим несколько примеров выполнения такого поиска в ElasticSearch. 

Допустим, мы проиндексировали информацию о нескольких школах. Школа характеризуется уникальным именем, адресом, имеет директора и учеников. Требуется найти все школы, расположенные на определенной улице. Запрос будет выглядеть следующим образом:

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Term(t => t.Street, "Kirova".ToLowerInvariant())
                )
            );

            var query = _client.Search(s => s
                .Filter(q => q
                    .Term("street", "Kirova".ToLowerInvariant())
                )
            );
```

Здесь и далее представлены два варианта запроса - типизированный (тип проиндексированного объекта задан) и нетипизированный (ведется работа с объектами JObject или dynamic). Значение искомого терма обязательно должно быть в нижнем регистре.

В запросе может содержаться обращение к свойству какого-либо поля. Например, следующий запрос позволит найти все школы, директором в которых является человек с определенной фамилией: 

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Term(t => t.Principal.LastName, "Monakhov".ToLowerInvariant())
                )
            );

            var query = _client.Search(s => s
                .Filter(q => q
                    .Term("principal.lastName", "Monakhov".ToLowerInvariant())
                )
            );
```

ElasticSearch поддерживает поиск по начальной части слова. Например, запрос для поиска школы, в которой адрес начинается с определенной последовательности символов, будет выглядеть следующим образом:

```
            var queryTypefied = _client.Search<School>(s => s
                .Query(q => q
                    .TextPhrasePrefix(t=>t
                        .OnField(f=>f.Street)
                        .QueryString("kir")
                     )
                )
            );

            var query = _client.Search(s => s
                .Query(q => q
                    .TextPhrasePrefix(t => t
                        .OnField("street")
                        .QueryString("kir")
                     )
                )
            );
```

Другой разновидностью поиска, когда строка полностью не известна, является поиск с применением wildcard выражений. В wildcard выражениях, символ * заменяет любое количество символов, символ ? заменяет 1 любой символ. Пример поиска школы, в которой адрес содержит определенный набор символов:

```
            var queryTypefied = _client.Search<School>(s => s
                .Query(q => q
                    .Wildcard(f => f.Street, "*rov?")
                )
            );

            var query = _client.Search(s => s
                .Query(q => q
                    .Wildcard("street", "*rov?")
                )
            );
```

ElasticSearch поддерживает поиск по близким словам. Для определения степени похожести двух строк применяется понятие расстояние Левенштейна (минимальное количество вставок, замен и удалений символов, необходимое для преобразования одной строки в другую). Применение данных запросов оправдано, если поисковая строка вбивается оператором вручную и в ходе набивания возможны опечатки. Пример такого запроса (запрос находит запись с именем Nice):

```
            var queryTypefied = _client.Search<School>(s => s
                .Query(q => q
                    .FuzzyLikeThis(m => m
                        .OnFields( f => f.Name)
                        .LikeText("Niwe")
                    )
                )
            );

            var query = _client.Search(s => s
                .Query(q => q
                    .FuzzyLikeThis(m => m
                        .OnFields(new []{"name"})
                        .LikeText("Niwe")
                    )
                )
            );
```

Представленные выражения для поиска по строке обладают различной производительностью. Для сравнения производительности был проведен тест, в рамках которого измерена скорость проведения 10000 запросов к индексу. Результаты теста:

|Способ поиска|Поисковый термин|Время выполнения (ЧЧ:ММ:СС.ммм)|
|-------------|----------------|-------------------------------|
|Wildcard|"street1"  + Random.Next(100) + "*"|00:00:26.144|
|Wildcard|"?treet"  + Random.Next(100) + "*"|00:01:49.588|
|TextPhrasePrefix|"street" + Random.Next(999)|00:00:25.690|
|FuzzyLikeThis|"strewt" + Random.Next(999)|00:04:32.603|
|Term |"street" + Random.Next(999)|00:00:05.497|

### Поиск данных по дате

ElasticSearch позволяет выполнять запросы с соответствием по полю типа DateTime. Например, требуется найти все школы, которые были основаны определенного числа. Запрос будет выглядеть следующим образом:

```
            var queryTypefied = _client.Search<School>(s => s
                .Query(q => q
                    .Term(t => t.FoundationDate, new DateTime(1988, 10, 1))
                )
            );

            var query = _client.Search(s => s
                .Query(q => q
                    .Term("foundationDate", new DateTime(1988, 10, 1))
                )
            );
```

Если требуется найти остальные школы (за исключением школы, основанной определенного числа), необходимо использовать символ ! перед соответствующим Term:

```
            var queryTypefied = _client.Search<School>(s => s
                .Query(q => !q
                    .Term(t => t.FoundationDate, new DateTime(1988, 10, 1))
                )
            );

            var query = _client.Search(s => s
                .Query(q => !q
                    .Term("foundationDate", new DateTime(1988, 10, 1))
                )
            );
```

Запрос с проверкой на то, что значение в поле типа DateTime находится  в определенном диапазоне, будет выглядеть следующим образом:

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Range(r => r.OnField(f => f.FoundationDate)
                        .From(new DateTime(1987, 10, 1))
                        .To(new DateTime(1989, 10, 1))
                    )
                )
            );

            var query = _client.Search(s => s
                .Filter(q => q
                    .Range(r => r.OnField("foundationDate")
                        .From(new DateTime(1987, 10, 1))
                        .To(new DateTime(1989, 10, 1))
                    )
                )
            );
```

Допустимы запросы по различным критериям (больше, меньше, больше или равно, меньше или равно).

Запрос для получения школ, основанных после 1 октября 1988 года:

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Range(r => r.OnField(f => f.FoundationDate)
                        .Greater(new DateTime(1988, 10, 1))
                    )
                )
            );

            var query = _client.Search(s => s
                .Filter(q => q
                    .Range(r => r.OnField("foundationDate")
                        .Greater(new DateTime(1988, 10, 1))
                    )
                )
            );
```

Запрос для получения школ, основанных до 1 октября 1988 года:

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Range(r => r.OnField(f => f.FoundationDate)
                        .Lower(new DateTime(1988, 10, 1))
                    )
                )
            );

            var query = _client.Search(s => s
                .Filter(q => q
                    .Range(r => r.OnField("foundationDate")
                        .Lower(new DateTime(1988, 10, 1))
                    )
                )
            );
```

Запрос для получения школ, основанных с 1 октября 1988 года включительно:

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Range(r => r.OnField(f => f.FoundationDate)
                        .GreaterOrEquals(new DateTime(1988, 10, 1))
                    )
                )
            );
            var query = _client.Search(s => s
                .Filter(q => q
                    .Range(r => r.OnField("foundationDate")
                        .GreaterOrEquals(new DateTime(1988, 10, 1))
                    )
                )
            );
```

Запрос для получения школ, основанных до 1 октября 1988 года включительно:

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Range(r => r.OnField(f => f.FoundationDate)
                        .LowerOrEquals(new DateTime(1988, 10, 1))
                    )
                )
            );
            var query = _client.Search(s => s
                .Filter(q => q
                    .Range(r => r.OnField("foundationDate")
                        .LowerOrEquals(new DateTime(1988, 10, 1))
                    )
                )
            );
```

###  Поиск данных по полю типа integer и double

Запросы по полям типа integer и double полностью аналогичны запросам, представленным ранее с полями типа DateTime.

Например, запрос для получения школ, с номером дома от 25 до 35:

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Range(r => r.OnField(f => f.HouseNumber)
                        .From(25)
                        .To(35)
                    )
                )
            );
            var query = _client.Search(s => s
                .Filter(q => q
                    .Range(r => r.OnField("houseNumber")
                        .From(25)
                        .To(35)
                    )
                )
            );
```

Запрос для получения школ, с рейтингом до 3.1 включительно:

```
            var queryTypefied = _client.Search<School>(s => s
                .Filter(q => q
                    .Range(r => r.OnField(f => f.Rating)
                        .LowerOrEquals(3.1)
                    )
                )
            );
            var query = _client.Search(s => s
                .Filter(q => q
                    .Range(r => r.OnField("rating")
                        .LowerOrEquals(3.1)
                    )
                )
            );
```

### Фильтрация данных по полям вложенных коллекций

Рассмотрим несколько примеров, в рамках которых будем запрашивать школы, в которых учатся ученики с определенными свойствами.

Запрос для получения всех школ, в которых учатся ученики с определенным рейтингом:

```
            var query = _client.Search(s => s
                .Query(q => q
                    .Term("students.knowledgeRating", 4.0)   // оба варианта равнозначны
                    //.Term(f => f.Students.First().KnowledgeRating, 4.0)
                )
            );
```

 Аналогичным образом можно делать запросы с соответствием по полю типа string, integer, DateTime:

```
            var query = _client.Search(s => s
                .Filter(q => q
                    .Term("students.favoriteSubject", "English".ToLowerInvariant()) // оба варианта равнозначны
                    //.Term(f => f.Students.First().FavoriteSubject, "English".ToLowerInvariant())
                )
            );
```

Помимо запросов со строгим соответствием, допустимо использовать неравенства или поиск по диапазону:

```
            var query = _client.Search(s => s
                .Filter(q => q
                    .Range(r => r.OnField("students.countOfFriends")
                        .Greater(10)
                    )
                )
            );
```

Рассмотрим комплексный запрос, являющийся комбинацией нескольких запросов. Построение таких запросов производится с помощью ключевого слова bool. Например, необходимо найти школы, в которых учатся студенты определенного года рождения с определенными именами:

```
            query = _client.Search<School>(s => s
                .Fields(f => f.Students[0].BirthDate, f => f.Students[0].Name)
                .Filter(q => q
                    .Bool(b => b
                        .Must(
                            m => m.MatchAll()
                        )
                        .MustNot(
                            mn => mn.Term(f => f.Students[0].Name, "roman")
                        )
                        .Should(sh => sh
                            .Range(r => r.OnField(f => f.Students[0].BirthDate)
                                .From(new DateTime(1989, 1, 1))
                                .To(new DateTime(1991, 1, 1))
                            )
                        )
                    )
                )
            );
```

Использование ключевых слов в запросе:

* Must - определяет условие, которому обязательно должен удовлетворять документ
* Should - если в запросе нет ни одного выражения must, одно или несколько should-условий должны выполняться, чтобы документ удовлетворил запросу. Минимальное количество should-условий, после которых документ считается удовлетворившим запросу, может быть настроено.
* MustNot  - определяет условие, которому документ должен не удовлетворять

Рассмотрим пример с сортировкой результатов запроса исходя из значений, вычисленных в соответствии со скриптом:

```
            var query = _client.Search<School>(s => s
                .From(0)
                .Size(10)
                .SortScript(sort => sort
                    .Ascending()
                    .Script("doc['principal.knowledgeRating'].value * factor")
                    .Params(p => p
                        .Add("factor", -1)
                    )
                    .Type("number")
                )
            );
```

Из-за того, что фактор равен -1, школы будут отсортированы по убыванию рейтинга директора.

### Построение запросов с агрегацией результатов (Facets)

ElasticSearch поддерживает несколько типов запросов с агрегацией результатов. Вот некоторые из них:

* Range Facet - позволяет сгруппировать результаты по набору диапазонов и рассчитать общее количество документов, попавших в каждый из диапазонов.
* Histogram Facet - позволяет сгруппировать результаты, имеющие одинаковые (или близкие) значения определенных полей. В частности, Date Histogram Facet позволяет подсчитать количество документов по дням, месяцам и т.д.
* Query/Filter Facet - позволяет получить количество документов, удовлетворяющих определенному условию.
* Statistical Facet  - позволяет вычислить статистические характеристики на основе числового поля. Статистические характеристики включают в себя сумму значений, среднее значение, минимальное значение и т.д. 

Рассмотрим несколько примеров. 

Получение статистических данных по рейтингу для всех школ с одинаковым номером дома (номер дома должен быть также в определенном диапазоне)

```
            var query = _client.Search<School>(s => s
                .MatchAll()
                .FacetTermsStats(gf => gf
                    .KeyField("houseNumber")
                    .ValueField(f => f.Rating)
                    .FacetFilter(ff => ff
                        .Range(r => r.OnField("houseNumber")
                            .From(30)
                            .To(40)
                        )                        
                    )
                )
            );
            
            var statistic = query.Facets.First().Value as TermStatsFacet;
            Assert.AreEqual(3.1, statistic.Items.First().Mean);
            Assert.AreEqual(3.1, statistic.Items.First().Max);
            Assert.AreEqual(3.1, statistic.Items.First().Min);
            Assert.AreEqual(1, statistic.Items.First().Count);
            Assert.AreEqual(3.1, statistic.Items.First().Total);
```

Более простой вариант, когда статистические характеристики вычисляются для всех документов без дополнительной фильтрации:

```
            var query = _client.Search<School>(s => s
                .Filter(q => q.MatchAll())
                .FacetStatistical(fs => fs.OnField(f => f.Rating)));
    
```

Получение количества школ, которые были основаны в определенном году с помощью Date Histogram Facet:

```
            var query = _client.Search<School>(s => s
                .Filter(q => q.MatchAll())
                .FacetDateHistogram(f => f
                    .OnField(ff => ff.FoundationDate)
                    .Interval(DateInterval.Year)
                )
            );
```

Пример использования Range Facet совместно со скриптом:

```
            var query = _client.Search(s => s
                .MatchAll()
                .FacetRange<double>("any_name",
                f => f.KeyScript("doc['rating'].value")
                    .ValueScript("doc['houseNumber'].value * doc['rating'].value")
                    .Ranges(r => r.From(3)
                    )
                )
            );
            var facet = query.Facets.First().Value as RangeFacet;
```

В данном случае для всех школ, у которых рейтинг больше 3 рассчитается значение выражения houseNumber * rating и затем рассчитаются статистические показатели (средние значение, минимум, максимум) по вычисленным выражениями.

##### Дополнительные материалы

[Документация по использованию клиента NEST](http://nest.azurewebsites.net/)[Пример использования ElasticSearch для расширения функциональности приложения Music Sore](http://joelabrahamsson.com/extending-aspnet-mvc-music-store-with-elasticsearch/) [Исходный код NEST](https://github.com/Mpdreamz/NEST)[Документация по ElasticSearch](http://www.elasticsearch.org/) 

 

