---
layout: doc
title: "DeleteDocument"
position: 3 
tags:
---

Удаляет документы из постоянного хранилища.

# Syntax
```csharp
dynamic DeleteDocument(string applicationId, string documentType, string instanceId)
```

## Parameters

`applicationId`

Идентификатор приложения, в котором выполняется удаление документа.

`documentType`

Тип документа, экземпляр которого удаляется из приложения.

`instanceId`

Идентификатор удаляемого документа.

## Returns

<Описание возвращаемого значения>.

## Examples

```csharp
api.DeleteDocument("gameshop", "catalogue", "04DB2A71-22DE-4B29-A9E2-A05F8681A42A")
```
