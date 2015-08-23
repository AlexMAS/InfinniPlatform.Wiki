---
layout: doc
title: "InsertView"
position: 3
categories: 
tags:
---

## Description
Предоставляет возможность сохранения нового представления в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

## Syntax
```csharp
public dynamic InsertView(dynamic viewMetadata, string version, string configuration, string document)
```

## Example

Пример запроса метаданных:

```csharp
dynamic viewMetadata = api.CreateView("1.0.0.0,"TestConfig1","TestDocument1");
viewMetadata.Name = "TestView1";

api.InsertView(viewMetadata);
```

При успешном выполнении запроса возвращается статус 200 ОК
