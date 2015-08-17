---
layout: doc
title: "GetRegister"
position: 18
categories: 
tags:
---

## Description
Предоставляет возможность получения регистра с указанным наименованием из указанной конфигурации 
с указанным номером версии.

## Syntax
```csharp
public dynamic GetRegister(string version, string configName, string registerName)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`registerName`

Наименование регистра конфигурации

## Example


Пример запроса метаданных:

```csharp
api.GetRegister("2.0.0.0","TestConfig1","TestRegister1");
```

Пример результата запроса

```js
{
  "Id": "66754495-8c0f-48d0-a118-bb6cc9464f3b",
  "Version": "2.0.0.0",
  "Name": "TestRegister1",
  "Caption": "",
  "Description": "",
  "ParentId": "TestConfig1",
  "__ConfigId": "systemconfig",
  "__DocumentId": "registermetadata"
}
```