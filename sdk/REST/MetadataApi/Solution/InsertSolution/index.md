---
layout: doc
title: "InsertSolution"
position: 1
categories: 
tags:
---

Добавить метаданные нового решения 

## Description
Предоставляет возможность добавления новых метаданных решения в хранилище.
При этом получаемый экземпляр не будет никаким образом инициализирован.
Для получения инициализированного шаблона решения необходимо вызвать метод
CreateSolution.
Внимание! Поле Name решения должно быть уникальным

## Syntax
```csharp
public dynamic InsertSolution(dynamic solutionMetadata);
```

## Example

Пример запроса документов:

```csharp

dynamic solution = new {
  "Name": "NewSolution",
  "Caption": "NewSolution",
  "ReferencedConfigurations": []
};

 api.InsertSolution(solution);
```

В случае успешного выполнения запроса возвращается статус: 200 OK
