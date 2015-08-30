---
layout: doc
title: "CreateSolution"
position: 0
categories: 
tags:
---

Создать новый шаблон метаданных решения

## Description
Предоставляет возможность получения шаблона для создания нового экземпляра решения.
При этом получаемый экземпляр имеет инициализированные по умолчанию необходимые поля метаданных

## Syntax
```csharp
public dynamic CreateSolution()
```

## Example

Пример запроса документов:

```csharp
 api.CreateSolution();
```

Пример результата запроса на создание метаданных нового решения:

```js
{
  "Name": "NewSolution",
  "Caption": "NewSolution",
  "ReferencedConfigurations": []
}
```
