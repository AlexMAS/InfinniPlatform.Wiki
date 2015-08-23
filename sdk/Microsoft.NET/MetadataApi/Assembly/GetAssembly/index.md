---
layout: doc
title: "GetAssembly"
position: 13
categories: 
tags:
---

## Description
Предоставляет возможность чтения существующей сборки из хранилища.

## Syntax
```csharp
public dynamic GetAssembly(string version, string configName, string assemblyName)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`assemblyName`

Наименование сборки

## Example


Пример запроса метаданных:

```csharp
dynamic assembly = GetAssembly("2.0.0.0","TestConfig1","InfinniPlatform.Sdk");
```

Пример результата запроса щаблона новой конфигурации:

```js
{
  "Id": "7442c7e6-826f-4b84-907a-28fd9e8e937b",
  "Version": "2.0.0.0",
  "Name": "InfinniPlatform.Sdk",
  "Caption": "",
  "Description": "",
  "ParentId": "TestConfig1",
  "__ConfigId": "systemconfig",
  "__DocumentId": "assemblymetadata"
}
```
