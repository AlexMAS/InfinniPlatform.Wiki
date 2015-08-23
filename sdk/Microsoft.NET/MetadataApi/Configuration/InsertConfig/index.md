---
layout: doc
title: "InsertConfig"
position: 1
categories: 
tags:
---

## Description
Предоставляет возможность сохранения нового экземпляра конфигурации метаданных в хранилище.
При сохранении не производится никаких действий, изменяющих состояние сохраняемого объекта конфигурации

## Syntax
```csharp
public void InsertConfig(dynamic config);
```

### Parameters

`config`

Объект метаданных конфигурации

## Example

Пример запроса документов:

```csharp
dynamic config = api.CreateConfig();
config.Name = "NewConfigName";

dynamic config = api.InsertConfig(config);
```

При успешном обновлении существующей конфигурации возвращается 200 ОК: