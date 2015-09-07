---
layout: doc
title: "InsertDocument"
position: 3
categories: 
tags:
---

## Description
Предоставляет возможность сохранения нового документа в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных документа.

## Syntax
```csharp
public void InsertDocument();
```

## Example

Пример запроса метаданных:

```csharp
dynamic doc = api.CreateDocument();
doc.Name = "TestDoc1";

api.InsertDocument(doc);
```

При успешном выполнении запроса возвращается статус 200 ОК
