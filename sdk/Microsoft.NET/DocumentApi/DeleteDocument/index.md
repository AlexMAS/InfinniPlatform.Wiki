---
layout: doc
title: "DeleteDocument"
position: 3 
categories: 
tags:
---

## Description
Определяет метод удаления документов из постоянного хранилища.

## Syntax
```csharp
public dynamic DeleteDocument(string applicationId, string documentType, string instanceId)
```

`applicationId`

Идентификатор приложения, в котором выполняется удаление документа.

`documentType`

Тип документа, экземпляр которого удаляется из приложения.

`instanceId`

Идентификатор удаляемого документа.

## Example

```csharp
api.DeleteDocument("gameshop", "catalogue", "04DB2A71-22DE-4B29-A9E2-A05F8681A42A")
```
