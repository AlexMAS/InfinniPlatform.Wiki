---
layout: doc
title: "DeleteProcess"
position: 5
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующих метаданных бизнес-процесса.


## Syntax
```csharp
public dynamic DeleteProcess(string version, string configuration, string document, string process)
```

## Example

Пример запроса метаданных:

```csharp
api.DeleteProcess("TestProcess1");
```

При успешном выполнении запроса возвращается статус 200 ОК
