---
layout: doc
title: "GetView"
position: 1
categories: 
tags:
---

## Description
Предоставляет возможность чтения существующего пользовательского представления из хранилища.

## Syntax
```csharp
public dynamic GetView(string version, string configuration, string document, string view)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование объекта конфигурации

`view`

Наименование представления

## Example


Пример запроса метаданных:

```csharp
dynamic view = GetService("2.0.0.0","TestConfig1","TestDocument1","TestView1");
```

Пример результата запроса:

```js
{
  "Id": "2f95b47f-e582-49a0-ba8e-61eabe52cbf5",
  "Name": "View1",
  "DataSources": [],
  "ChildViews": [],
  "Scripts": [],
  "ParentId": "4c42274d-fbd1-41c2-b154-5f3e56bd1462",
  "Version": "2.0.0.0",
  "__ConfigId": "systemconfig",
  "__DocumentId": "viewmetadata"
}
```
