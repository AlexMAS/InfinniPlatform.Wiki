---
layout: doc
title: "CreateRegister"
position: 16
categories: 
tags:
---

## Description
Предоставляет возможность создания нового шаблона регистра.
Шаблон создается со списком обязательных полей, значения которых установлены по умолчанию.

## Syntax
```csharp
public dynamic CreateRegister(string version, string configName)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации


## Example


Пример запроса метаданных:

```csharp
dynamic assembly = api.CreateRegister("2.0.0.0","TestConfig1");
```

Пример результата запроса щаблона новой конфигурации:

```js
{
  "Id": "ff7f1ba9-d6d7-4268-a325-f77d92e79126",
  "Version": "2.0.0.0",
  "Name": "",
  "Caption": "",
  "Description": ""
}
```
