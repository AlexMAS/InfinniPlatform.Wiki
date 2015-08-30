---
layout: doc
title: "DeleteSolution"
position: 5
categories: 
tags:
---

Удалить метаданные существующего решения 

## Description
Предоставляет возможность удаления метаданных существующего решения в хранилище.

## Syntax
```csharp
public dynamic DeleteSolution(string name)
```

# Parameters

`name`

Наименование решения

## Example

Пример запроса документов:

```csharp

 api.DeleteSolution("NewSolution");
```

В результате успешного выполнения запроса возвращается статус 200 OK