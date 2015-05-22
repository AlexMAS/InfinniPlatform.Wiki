---
layout: doc
title: "Attach"
position: 7
tags:
---

Присоединяет документ к списку документов существующей сессии. 

# Description

В случае отсутствия сессии с указанным идентификатором создается новая сессия.

# Syntax

```csharp
dynamic Attach(string session, string applicationId, string documentId, dynamic document)
```

## Parameters

`session`

Идентификатор клиентской сессии.

`applicationId`

Идентификатор приложения, в котором объявлены метаданные типа документа, присоединяемого к сессии.

`documentId`

Идентификатор присоединяемого к сессии документа.

`document`

Документ, присоединяемый к сессии.

# Examples

```csharp
string session = api.CreateSession();

var documentObject = new
{
	Id = Guid.NewGuid().ToString(),
	Name = "Diablo III",
	Price = 1800
};

api.Attach(session, "gameshop", "catalogue", documentObject);
```
