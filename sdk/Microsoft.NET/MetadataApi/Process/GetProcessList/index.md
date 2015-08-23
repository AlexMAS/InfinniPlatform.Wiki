---
layout: doc
title: "GetProcessList"
position: 2
categories: 
tags:
---

## Description
Предоставляет возможность чтения списка существующих в конфигурации бизнес-процессов.

## Syntax
```csharp
public dynamic GetProcessList(string version, string configuration)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование конфигурации, для которой требуется получить список бизнес-процессов


## Example


Пример запроса метаданных:

```csharp
dynamic processList = GetProcessList("2.0.0.0","TestConfig1");
```

Пример результата запроса:

```js
[
	{
	  "Id": "7442c7e6-826f-4b84-907a-28fd9e8e937b",
	  "Version": "2.0.0.0",
	  "Name": "TestProcess",
	},
	{
		...
	}
]
```
