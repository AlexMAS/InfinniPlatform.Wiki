---
layout: doc
title: "UpdateSolution"
position: 2
categories: 
tags:
---

Обновить метаданные существующего решения 

## Description
Предоставляет возможность изменения метаданных существующего решения в хранилище.
Поиск существующего решения выполняется по полю Name.

## Syntax
```csharp
public dynamic UpdateSolution(dynamic solutionMetadata);
```

## Example

Пример запроса документов:

```csharp

dynamic solution = new {  
  "Name": "NewSolution",
  "Caption": "NewSolution",
  "ReferencedConfigurations": []
};

 api.UpdateSolution(solution);
```

В случае успешного выполнения запроса возвращается статус: 200 OK
