---
layout: doc
title: "CreateAssembly"
position: 11
categories: 
tags:
---

## Description
Предоставляет возможность создания шаблона новой сборки проекта.
ПОлученный шаблон будет инциализирован значениями по умолчанию для всех обязательных полей

## Syntax
```csharp
public void CreateAssembly();
```

## Example

Пример запроса метаданных:

```csharp
dynamic assembly = api.CreateAssembly();
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
