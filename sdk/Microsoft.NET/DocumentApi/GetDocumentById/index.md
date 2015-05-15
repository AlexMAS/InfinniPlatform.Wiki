---
layout: doc
title: "GetDocumentById"
position: 1
categories: 
tags:
---

Получение существующего документа из хранилища по идентификатору

## Краткое описание
Предоставляет метод для чтения документов из хранилища с возможностью фильтрации и постраничного 
получения данных.
При получении документов следует учитывать [особенности работы со ссылками на другие документы](../../Advanced Topics/resolve) и
[существующие ограничения, касающиеся рекурсивных ссылок на документы](../../Advanced Topics/recursiveLink).

## Синтаксис
```csharp
public dynamic GetDocumentById(string applicationId, string documentType, string instanceId)
```

`applicationId`

Идентификатор приложения.

`documentType`

Идентификатор типа документа.

`instanceId`

Идентификатор документа

## Примеры

Пример запроса документов:

```csharp
api.GetDocumentById("gameshop", "catalogue", "0152a106-808f-439f-ba7f-343fc0a8b473");
```

Пример результата запроса документа по идентификатору:

```js
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
}
```
