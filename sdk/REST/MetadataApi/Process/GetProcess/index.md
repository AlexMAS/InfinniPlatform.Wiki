---
layout: doc
title: "GetProcess"
position: 1
categories: 
tags:
---

## Description
Предоставляет возможность чтения существующего бизнес-процесса из хранилища.

## Syntax
```csharp
public dynamic GetProcess(string version, string configuration, string document, string process)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование объекта конфигурации

`process`

Наименование бизнес-процесса

## Example


Пример запроса метаданных:

```csharp
dynamic process = GetProcess("2.0.0.0","TestConfig1","TestProcess");
```

Пример результата запроса:

```js
{
  "Id": "42b3f28a-3022-4b87-b93a-4f09c86c7eed",
  "Version": "2.0.0.0",
  "Name": "TestProcess",
  "Caption": "",
  "Description": "",
  "SettingsType": "Default",
  "Type": 1,
  "ParentId": "d2de289f-dd06-418c-bb12-9520b26a1669",
  "__ConfigId": "systemconfig",
  "__DocumentId": "processmetadata"
}
```
