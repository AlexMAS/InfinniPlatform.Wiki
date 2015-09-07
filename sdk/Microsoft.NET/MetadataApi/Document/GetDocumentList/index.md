---
layout: doc
title: "GetDocumentList"
position: 2
categories: 
tags:
---

## Description
Предоставляет возможность чтения списка существующих в конфигурации документов.

## Syntax
```csharp
public dynamic GetDocumentList(string version, string configName)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации


## Example


Пример запроса метаданных:

```csharp
 GetDocumentList("2.0.0.0","TestConfig1");
```

Пример результата запроса:

```js
[
	{
	  "Id": "7442c7e6-826f-4b84-907a-28fd9e8e937b",
	  "Version": "2.0.0.0",
	  "Name": "TestDoc1",
	  "Caption": "",
	  "Description": "",
	  "ParentId": "TestConfig1",
	  "__ConfigId": "systemconfig",
	  "__DocumentId": "documentmetadata"
	},
	{
		...
	}
]
```
