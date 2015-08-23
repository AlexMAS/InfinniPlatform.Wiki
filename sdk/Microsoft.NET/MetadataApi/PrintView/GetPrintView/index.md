---
layout: doc
title: "GetPrintView"
position: 1
categories: 
tags:
---

## Description
Предоставляет возможность чтения существующего пользовательского представления из хранилища.

## Syntax
```csharp
public dynamic GetPrintView(string version, string configuration, string document, string printView)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование объекта конфигурации

`printView`

Наименование печатного представления

## Example


Пример запроса метаданных:

```csharp
dynamic printView = GetPrintView("2.0.0.0","TestConfig1","TestDocument1","PrintView1");
```

Пример результата запроса:

```js
{
  "Id": "fc23beac-78eb-48d1-932b-b48c7b64aee9",
  "Name": "PrintView1",
  "ParentId": "833304d9-3eec-41b5-8179-b6608b3daef0",
  "Version": "2.0.0.0",
  "__ConfigId": "systemconfig",
  "__DocumentId": "printviewmetadata"
}
```
