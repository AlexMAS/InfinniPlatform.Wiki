---
layout: doc
title: "CreateConfig"
position: 0
categories: 
tags:
---

## Description
Предоставляет возможность создания шаблона пустого экземпляра новой конфигурации (нового приложения).
Полученный шаблон конфигурации содержит все обязательные поля объекта метаданных, инициализированные
значениями по умолчанию

## Syntax
```csharp
public dynamic CreateConfig();

```
## Example

Пример запроса документов:

```csharp
dynamic config = api.CreateConfig();
```

Пример результата запроса щаблона новой конфигурации:

```js
{
  "Name": "NewConfig",
  "Caption": "NewConfig",
  "Description": "NewConfig",
  "Menu": [],
  "Documents": [],
  "Registers": [],
  "Assemblies": [],
  "Reports": []
}
```
