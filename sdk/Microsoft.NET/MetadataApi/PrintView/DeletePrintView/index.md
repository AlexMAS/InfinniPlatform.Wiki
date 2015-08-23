---
layout: doc
title: "DeletePrintView"
position: 5
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующих метаданных печатного представления.


## Syntax
```csharp
public dynamic DeletePrintView(string version, string configuration, string document, string printview)
```

## Example

Пример запроса метаданных:

```csharp
api.DeletePrintView("TestPrintView1");
```

При успешном выполнении запроса возвращается статус 200 ОК
