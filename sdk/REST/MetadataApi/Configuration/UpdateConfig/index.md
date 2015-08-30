---
layout: doc
title: "UpdateConfig"
position: 8
categories: 
tags:
---

## Description
Предоставляет возможность обновления существующего экземпляра конфигурации метаданных.

## Syntax
```csharp
public void UpdateConfig(dynamic config);
```

### Parameters

`config`

Объект метаданных конфигурации

## Example

Пример запроса документов:

```csharp
dynamic config = api.GetConfig("1.0.0.0", "OldConfigName");
config.Name = "NewConfigName";

dynamic config = api.UpdateConfig(config);
```

При успешном обновлении существующей конфигурации возвращается 200 ОК:

