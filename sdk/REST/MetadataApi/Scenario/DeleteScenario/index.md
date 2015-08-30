---
layout: doc
title: "DeleteScenario"
position: 5
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующих метаданных сценария.


## Syntax
```csharp
public dynamic DeleteScenario(string version, string configuration, string document, string scenario)
```

## Example

Пример запроса метаданных:

```csharp
api.DeleteScenario("TestScenario1");
```

При успешном выполнении запроса возвращается статус 200 ОК
