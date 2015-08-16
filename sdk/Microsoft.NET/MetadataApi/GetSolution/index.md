---
layout: doc
title: "GetSolution"
position: 3
categories: 
tags:
---

Получить метаданные существующего решения 

## Description
Предоставляет возможность получения метаданных существующего решения в хранилище.
Поиск существующего решения выполняется по полю Name.

## Syntax
```csharp
public dynamic GetSolution(string name)
```

# Parameters

`name`

Наименование решения

## Example

Пример запроса документов:

```csharp

 api.GetSolution("NewSolution");
```

Результат выполнения запроса:

```js
{
  "Name": "NewSolution",
  "Caption": "NewSolution",
  "ReferencedConfigurations": []
}
```
