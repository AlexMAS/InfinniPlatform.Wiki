---
layout: doc
title: "GetDocumentById"
position: 1
tags:
---

Возвращает существующий документ из хранилища по его идентификатору.

# Description
Производит чтение документа из хранилища по указанному идентификатору. При получении документов следует учитывать [особенности работы со ссылками на другие документы](../../Advanced Topics/resolve) и [существующие ограничения, касающиеся рекурсивных ссылок на документы](../../Advanced Topics/recursiveLink).

# Syntax
```csharp
dynamic GetDocumentById(string applicationId, string documentType, string instanceId)
```

## Parameters

`applicationId`

Идентификатор приложения.

`documentType`

Идентификатор типа документа.

`instanceId`

Идентификатор документа

## Returns

Запрошенный документ.

# Examples

Запрос:

```csharp
api.GetDocumentById("gameshop", "catalogue", "0152a106-808f-439f-ba7f-343fc0a8b473");
```

Ответ:

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
