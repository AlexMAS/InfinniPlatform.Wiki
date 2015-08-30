---
layout: doc
title: "UpdatePrintView"
position: 4
categories: 
tags:
---

## Description
Предоставляет возможность изменения существующего печатного представления в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные печатного представления будут обновлены. В случае, если печатного представления с таким идентификатором не существует,
создается новое печатное представление.

## Syntax
```csharp
public dynamic UpdatePrintView(dynamic printViewMetadata, string version, string configuration, string document)
```

### Parameters

`printViewMetadata`

Объект метаданных печатного представления

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование конфигурации

`document`

Наименование документа, к которому относится печатное представление

## Example


Пример запроса метаданных:

```csharp
dynamic printView = api.GetPrintView("2.0.0.0","TestConfig1",,"TestDocument1","TestPrintView1");

printView.Name = "TestView2";
api.UpdatePrintView(printView, "2.0.0.0","TestConfig1","TestDocument1");

```

В результате успешного выполнения запроса возвращается статус 200 ОК
