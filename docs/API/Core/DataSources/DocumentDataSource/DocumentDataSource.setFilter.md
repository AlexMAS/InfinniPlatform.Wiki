---
layout: doc
title: "DocumentDataSource.setFilter()"
position: 4
---

Устанавливает правило фильтрации документов.

# Description

Фильтр элементов представляется массивом критериев фильтрации. 
Если в источнике данных [разрешено обновление списка элементов](../../BaseDataSource/BaseDataSource.resumeUpdate/),
изменение фильтра приводит к автоматическому [обновлению списка элементов источника данных](../../BaseDataSource/BaseDataSource.updateItems/).

# Syntax

```js
DocumentDataSource.setFilter(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`String`<sup>*</sup>|Правило фильтрации документов|

<sup>*</sup> [Шаблонизируемая величина](../../RestDataSource/#parameters-templating). Для определения параметров используйте метод [setFilterParams()](../DocumentDataSource.setFilterParams/).

## Returns

Метод ничего не возвращает.

# Filter Format

|Filter|Description|
|----|-----------|
||**Логические функции**|
||*Обозначим, через f_1, f_2, ... - функции возвращающие булевы значения*|
|not(f_1)|Вернёт элементы, которые не подходят под условие filter_1|
|or(f_1, f_2, ...)|Вернёт элементы, в которых выполняется хотя бы одно из условий filter_1, filter_2, ...|
|and(f_1, f_2, ...)|Вернёт элементы, в которых выполняются все условия filter_1, filter_2, ...|
||**Функции фильтрации по свойствам элементов источника данных**|
|exists(propertyName[, flag])|Вернёт элементы, которые содержат свойство propertyName (причем его значение != null и != undefined). Если указан flag=false, то, напротив, будут выбраны элементы, которые не содержат свойства propertyName|
|type(propertyName, type)|Вернёт элементы, в которых свойство propertyName принимает значение типа type|
|in(propertyName, arg1, arg2, ...)|Вернёт элементы, которые в свойстве propertyName содержат значения arg1, arg2, ...|
|notIn(propertyName, arg1, arg2, ...)|Вернёт элементы, которые в свойстве propertyName не содержат значений arg1, arg2, ...|
|eq(propertyName, value)|Вернёт элементы, в которых свойство propertyName принимает значение value|
|notEq(propertyName, value)|Вернёт элементы, в которых свойство propertyName принимает значение отличное от value|
|gt(propertyName, value)|Вернёт элементы, в которых свойство propertyName принимает значение большее, чем value|
|gte(propertyName, value)|Вернёт элементы, в которых свойство propertyName принимает значение, которое больше либо равно value|
|lt(propertyName, value)|Вернёт элементы, в которых свойство propertyName принимает значение меньшее, чем value|
|lte(propertyName, value)|Вернёт элементы, в которых свойство propertyName принимает значение, которое меньше либо равно value|
|text(search[, language[, caseSensitive[, diacriticSensitive]]])|Вернёт элементы, в которых содержится строка search. Если указать language(напр, 'ru'), то поиск будет осуществляться с учётом особенностей данного языка. Если в параметрах caseSensitive и diacriticSensitive передать значение true, то поиск будет осуществляться с учётом регистра и диакритических знаков|
|regex(propertyName, pattern[, arg1, arg2, ...])|Вернёт элементы, в которых свойство propertyName соответсвут шаблону pattern. В качестве arg1, arg2, ... можно передать настройки regex. Возможны следующие настройки: *IgnoreCase* - Игнорирует регистр символов. *Singleline* - Указывает однострочный режим. Изменяет значение точки (.) так, что она соответствует любому символу (вместо любого символа, кроме "\n"). *Multiline* - Многострочный режим. Изменяет значение символов "^" и "$" так, что они совпадают, соответственно, в начале и конце любой строки, а не только в начале и конце целой строки.|
||**Функции фильтрации по содержимому массивов, хранящихся в элементах**|
||*Обозначим через arrayProperty - свойство ссылающееся на массив*|
|match(arrayProperty, f_1)|Все элементы из массива удовлетворяют условию f_1|
|all(arrayProperty, arg1, arg2, ...)|Все элементы из массива входят в множество [arg1, arg2, ...]|
|anyIn(arrayProperty, arg1, arg2, ...)|Хотя бы один из элементов массива входит в множество [arg1, arg2, ...]|
|anyNotIn(arrayProperty, arg1, arg2, ...)|Хотя бы один из элементов массива не входит в множество [arg1, arg2, ...]|
|anyEq(arrayProperty, value)|Хотя бы один из элементов массива принимает значение value|
|anyNotEq(arrayProperty, value)|Хотя бы один из элементов массива принимает значение отличное от value|
|anyGt(arrayProperty, value)|Хотя бы один из элементов массива принимает значение большее, чем value|
|anyGte(arrayProperty, value)|Хотя бы один из элементов массива принимает значение, которое больше либо равно value|
|anyLt(arrayProperty, value)|Хотя бы один из элементов массива принимает значение меньшее, чем value|
|anyLte(arrayProperty, value)|Хотя бы один из элементов массива принимает значение, которое меньше либо равно value|
|sizeEq(arrayProperty, size)|Число элементов массива равно size|
|sizeGt(arrayProperty, size)|Число элементов массива больше чем size|
|sizeGte(arrayProperty, size)|Число элементов массива больше либо равно size|
|sizeLt(arrayProperty, size)|Число элементов массива меньше чем size|
|sizeLte(arrayProperty, size)|Число элементов массива меньше либо равно size|

# Examples

```js
BaseDataSource.setFilter("eq(_id,123)");
```

```js
BaseDataSource.setFilter("gt(birthday,date('2012-01-26T13:51:50.417Z'))");
```

```js
BaseDataSource.setFilter("regex(FirstName, '^И(ван|рина)$', IgnoreCase)");
```

```js
BaseDataSource.setFilter("match(props, eq(name,'font'))");
```

```js
BaseDataSource.setFilter("anyNotIn(items, true, 34535, 'hello')");
```

```js
BaseDataSource.setFilter("or(and(eq(id,231),eq(id,342342)),eq(id,423434))");
```

# See Also

* [`setFilterParams()`](../DocumentDataSource.setFilterParams/)
* [`getFilterParams()`](../DocumentDataSource.getFilterParams/)
* [`getFilter()`](../DocumentDataSource.getFilter/)
* [`setIdFilter()`](../DocumentDataSource.setIdFilter/)
* [`updateItems()`](../../BaseDataSource/BaseDataSource.updateItems/)
* [`suspendUpdate()`](../../BaseDataSource/BaseDataSource.suspendUpdate/)
* [`resumeUpdate()`](../../BaseDataSource/BaseDataSource.resumeUpdate/)