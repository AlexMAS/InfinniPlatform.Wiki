---
layout: doc
title: "GetDocument"
position: 1
categories: 
tags:
---

## Description
Предоставляет возможность чтения метаданных существующего документа из хранилища.

## Syntax
```csharp
public dynamic GetDocument(string version, string configName, string documentName)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование документа

## Example


Пример запроса метаданных:

```csharp
dynamic document = GetDocument("2.0.0.0","TestConfig1","TestDoc");
```

Пример результата запроса щаблона новой конфигурации:

```js
{
  "Id": "7442c7e6-826f-4b84-907a-28fd9e8e937b",
  "Version": "2.0.0.0",
  "Name": "TestDoc",
  "Caption": "",
  "Description": "",
  "ParentId": "TestConfig1",
  "__ConfigId": "systemconfig",
  "__DocumentId": "documentmetadata"
}
```
