---
layout: doc
title: "GetConfigList"
position: 10
categories: 
tags:
---

## Description
Предоставляет возможность получения списка всех существующих экземпляров конфигурации 
метаданных из хранилища.


## Syntax
```csharp
public void GetConfigList();
```

## Example

Пример запроса метаданных:

```csharp
dynamic configList = api.GetConfigList();
```

Результат выполнения запроса:

```js
[
	{
	  "Id": "5011f3a7-2fa6-4c00-9fd1-96c9b14d2698",
	  "Name": "NewConfig,
	  "Caption": "NewConfig",
	  "Description": "NewConfig",
	  "Version": "1.0.0.0",
	  "Menu": [],
	  "Documents": [
		{
		  "Id": "94894e62-019d-4426-bb9e-56e8f9dd7518",
		  "Name": "Common",
		  "Caption": "Common options",
		  "Description": "Common options"
		},
		{
		  "Id": "48f15683-ad44-4691-bbd9-4c42279a13ab",
		  "Name": "TestConfigVersion_bee5b0c8-f001-44a1-8043-fd2f0cf629c6_Registers",
		  "Caption": "Registers common options",
		  "Description": "Storage for register's common information (e.g. actual date)"
		}
	  ],
	  "Registers": [],
	  "Assemblies": [],
	  "Reports": [],
	  "__ConfigId": "systemconfig",
	  "__DocumentId": "metadata"
	},
	{
		...
	}
]
```
