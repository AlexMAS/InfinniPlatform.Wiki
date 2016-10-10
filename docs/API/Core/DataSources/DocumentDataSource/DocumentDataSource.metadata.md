---
layout: doc
title: "DocumentDataSource.metadata"
position: 0
---

Метаданные источника данных представления для документов InfinniPlatform.

# Properties

|Name|Type|Default|Description|
|----|----|:-----:|-----------|
|DocumentId|`String`|–|Идентификатор документа|
|Filter|`String`<sup>1</sup>|–|Правило фильтрации документов|
|FilterParams|`Object`|–|Параметры фильтра|
|PageNumber|`Integer`|0|Номер страницы|
|PageSize|`Integer`|15|Размер страницы|
|Search|`String`|–|Строка полнотекстового поиска|
|Select|`String`|–|Правило отображения документов|
|Order|`String`|–|Правило сортировки документов|
|NeedTotalCount|`Boolean`|–|Необходимость подсчета количества|

<sup>1</sup> [Шаблонизируемая величина](../../RestDataSource/#parameters-templating). Заполняется значениями из FilterParams.

# Examples

```json
{
	"DocumentDataSource": {
		"Name": "documentDataSource1",
		"DocumentId": "MyDocument",
		"Filter": "gt(Birthday,<%startDate%>)",
		"FilterParams": {
			startDate: date('1985-01-01')
		},
		"PageNumber": 3,
		"PageSize": 50,
		"Select": "include(LastName, FirstName, Address, Birthday)",
		"Order": "asc(LastName, FirstName)"
	}
}
```

```json
{
	"DocumentDataSource": {
		"Name": "documentDataSource2",
		"DocumentId": "MyDocument",
		"Search": "Иванов Иван Иванович",
		"NeedTotalCount": true
	}
}
```