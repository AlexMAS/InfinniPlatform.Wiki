---
layout: doc
title: "CreateDocument"
position: 0
categories: 
tags:
---

## Description
Предоставляет возможность создания шаблона нового документа.
ПОлученный шаблон будет инциализирован значениями по умолчанию для всех обязательных полей

## Syntax
```csharp
public void CreateDocument(string version, string configuration);
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

## Example

Пример запроса метаданных:

```csharp
 api.CreateDocument("1.0.0.0","TestConfig1");
```

Результат выполнения запроса:

```js
[
	{
	  "Id": "c2a00771-3ded-428d-8d1d-680aa672e394",
	  "Version": "1.0.0.0",
	  "Name": "",
	  "Caption": "",
	  "Description": ""
	}
]
```
