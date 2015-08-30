---
layout: doc
title: "InsertPrintView"
position: 3
categories: 
tags:
---

## Description
Предоставляет возможность сохранения нового печатного представления в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

## Syntax
```csharp
public dynamic InsertPrintView(dynamic printViewMetadata, string version, string configuration, string document)
```

## Example

Пример запроса метаданных:

```csharp
dynamic printViewMetadata = api.CreatePrintView("1.0.0.0,"TestConfig1","TestDocument1");
printViewMetadata.Name = "TestView1";

api.InsertPrintView(printViewMetadata);
```

При успешном выполнении запроса возвращается статус 200 ОК
