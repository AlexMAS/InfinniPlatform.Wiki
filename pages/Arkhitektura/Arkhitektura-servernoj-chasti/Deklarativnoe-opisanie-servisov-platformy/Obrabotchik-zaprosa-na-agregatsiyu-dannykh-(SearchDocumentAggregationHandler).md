---
layout: default
title: Обработчик запроса на агрегацию данных (SearchDocumentAggregationHandler)
position: 
categories: 
tags: 
---

Обработчик позволяет произвести агрегацию данных по заданным условиям. В данном разделе описан формат данных для указания входных аргументов запроса на агрегацию, а также описан формат возвращаемого значения.

#### Входные аргументы, передаваемые в запросе на агрегацию

AggregationConfiguration и AggregationMetadata  - имя конфигурации и метаданных, к которым будет применен запрос на агрегацию. Фактически, эти аргументы определяют источник данных для агрегации.

FilterObject - фильтр, применяемый к данным перед вычислением агрегации. Фильтр применим в том случае, если агрегацию необходимо произвести по некоторому подмножеству данных. Если в агрегации должны участвовать все имеющиеся документы, в качестве фильтра допустимо указать null. Рассмотрим задание фильтра на конкретном примере. Допустим, необходимо произвести агрегацию, только по опубликованным документам с именем "Форма 25". Фильтр будет выглядеть следующим образом:

```
    [{
        "Property": "DocumentName",
        "Value": "Форма 25",
        "CriteriaType": 1
    }, {
        "Property": "Status",
        "Value": "Published",
        "CriteriaType": 1
    }]
```

Dimensions - набор срезов OLAP куба для группировки исходных данных. Допустимые следующие типы срезов (DimensionType):

* Term = 0             (в каждой корзине будут находится документы, с одинаковым значением в заданном поле)


* Range = 1           (разбиение на корзины происходит исходя из определенных числовых диапазонов)


* DateRange = 2   (разбиение на корзины происходит исходя из определенных диапазонов дат)



Допустим, необходимо произвести два среза при агрегации: сначала группируем документы по типу документа с помощью Term среза, далее распределяем документы по рейтингам с помощью Range среза.

```
    [{
        "Label": "type_term",
        "FieldName": "DocumentType",
        "DimensionType": 0
    }, {
        "Label": "rating_range",
        "FieldName": "Rating",
        "DimensionType": 1,
        "ValueSet": {
            "Property": "Rating",
            "CriteriaType": 16384,
            "Value": "0.9\n1.1"
        }
    }]
```

AggregationType - тип агрегации. Допустимые типы агрегации:

* Count = 0


* Sum = 1


* Avg = 2


* Max = 3


* Min = 4



AggregationField - поле документа, по которому вычислять значения агрегации.

Полный пример запроса на агрегацию:

 

```
GET http://<ServerName>:<PortName>/Handlers/StandardApi/patient/checkaggregation/?query=
{
    "AggregationConfiguration": "integration",
    "AggregationMetadata": "document",
    "FilterObject": null,
    "Dimensions": [{
        "Label": "organization_term",
        "FieldName": "OrganizationName",
        "DimensionType": 0
    }, {
        "Label": "type_term",
        "FieldName": "DocumentType",
        "DimensionType": 0
    }],
    "AggregationType": 0,
    "AggregationField": "",
    "PageNumber": 0,
    "PageSize": 10
}
```

 

#### Результат выполнения агрегации

Результат выполнения запроса на агрегацию возвращается в виде массива динамических объектов. Каждый объект имеет следующий набор полей:

Name - имя объекта. Для Term срезов имя формируется исходя из значения терма, для Range срезов имя соответствует диапазону (например, "0.9-1.1").

MeasureType - тип вычисленного измерения

Value - значение измерения

DocCount - количество документов, участвовавших в измерении

Buckets - вложенные динамические объекты с аналогичной структурой вложенных полей.

Пример результата выполнения агрегации для запроса, описанного ранее:

```
[{
	"Name": "Больница 1",
	"MeasureType": 0,
	"Value": 4.0,
	"DocCount": 4,
	"Buckets": [{
		"Name": "Форма 25",
		"MeasureType": 0,
		"Value": 3.0,
		"DocCount": 3,
		"Buckets": []
	},
	{
		"Name": "Форма 66",
		"MeasureType": 0,
		"Value": 1.0,
		"DocCount": 1,
		"Buckets": []
	}]
},
{
	"Name": "Поликлиника 5",
	"MeasureType": 0,
	"Value": 2.0,
	"DocCount": 2,
	"Buckets": [{
		"Name": "Форма 25",
		"MeasureType": 0,
		"Value": 1.0,
		"DocCount": 1,
		"Buckets": []
	},
	{
		"Name": "Форма 66",
		"MeasureType": 0,
		"Value": 1.0,
		"DocCount": 1,
		"Buckets": []
	}]
}]
```

