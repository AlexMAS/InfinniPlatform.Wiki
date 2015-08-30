---
layout: doc
title: "GetRegisterList"
position: 19
categories: 
tags:
---

## Description
Предоставляет возможность получения списка всех регистров, существующих в конфигурации с указанным
наименованием и имеющей указанную версию.

## Syntax
```csharp
public dynamic GetRegisterList(string version, string configName)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации


## Example


Пример запроса метаданных:

```csharp
api.GetRegisterList("2.0.0.0","TestConfig1","TestRegister1");
```

Пример результата запроса

```js
[
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
]
```