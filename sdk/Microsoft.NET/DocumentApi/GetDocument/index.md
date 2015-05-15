---
layout: doc
title: "GetDocument"
position: 0
categories: 
tags:
---

Чтение существующих документов из хранилища.

## Краткое описание
Предоставляет метод для чтения документов из хранилища с возможностью фильтрации и постраничного 
получения данных.
При получении документов следует учитывать [особенности работы со ссылками на другие документы](../../Advanced Topics/resolve) и
[существующие ограничения, касающиеся рекурсивных ссылок на документы](../../Advanced Topics/recursiveLink).

## Синтаксис
```csharp
public IEnumerable<dynamic> GetDocument( 
	string applicationId, string documentType, Action<FilterBuilder> filter, int pageNumber, 
	int pageSize, Action<SortingBuilder> sorting = null)
```
`applicationId`

Идентификатор приложения.

`documentType`

Идентификатор типа документа.

`filter`

Делегат конструктора фильтра документов.

`pageNumber`

Номер страницы.

`pageSize`

Размер страницы.

`sorting`

Делегат для формирования правила сортировки документов.

## Примеры

Пример запроса документов:

```csharp
 api.GetDocument("gameshop", "catalogue",
	f => f.AddCriteria(cr => cr.Property("Name").IsContains("gta")), 0, 2,
	s => s.AddSorting("Price", "descending"));
```

Пример результата запроса документов:

```js
[
  {
    "Name": "gta V",
    "Price": 2000,
    "Availability": {
      "Available": false,
      "SaleStartDate": "2014-04-14T00:00:00"
    },
    "Id": "0152a106-808f-439f-ba7f-343fc0a8b473",
    "__ConfigId": "gameshop",
    "__DocumentId": "catalogue",
    "TimeStamp": "2015-05-06T09:38:30.0027888+05:00"
  },
  {
    "Name": "gta V ultimate edition",
    "Price": 2300,
    "Availability": {
      "Available": true
    },
    "Id": "8f0c1a59-cb6b-4fca-88e7-1f430bc3cb1f",
    "__ConfigId": "gameshop",
    "__DocumentId": "catalogue",
    "TimeStamp": "2015-05-06T09:41:52.5033712+05:00"
  }
]
```
