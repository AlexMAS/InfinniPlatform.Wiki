---
layout: doc
title: "GetSolutionList"
position: 4
categories: 
tags:
---

Получить список метаданных существующих решений

## Description
Предоставляет возможность получения списка метаданных существующих решений в хранилище.

## Syntax
```csharp
public dynamic GetSolutionList()
```

## Example

Пример запроса списка решений:

```csharp

 api.GetSolutionList();
```

Результат выполнения запроса:

```js
[
	{
	  "Name": "NewSolution",
	  "Caption": "NewSolution",
	  "ReferencedConfigurations": []
	}
]
```
