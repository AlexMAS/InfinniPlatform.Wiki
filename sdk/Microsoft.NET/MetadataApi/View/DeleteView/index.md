---
layout: doc
title: "DeleteView"
position: 5
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующих метаданных пользовательского представления.


## Syntax
```csharp
public dynamic DeleteView(string version, string configuration, string document, string view)
```

## Example

Пример запроса метаданных:

```csharp
api.DeleteService("TestView1");
```

При успешном выполнении запроса возвращается статус 200 ОК
