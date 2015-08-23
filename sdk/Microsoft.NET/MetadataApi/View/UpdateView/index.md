---
layout: doc
title: "UpdateView"
position: 4
categories: 
tags:
---

## Description
Предоставляет возможность изменения существующего пользовательского представления в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные представления будут обновлены. В случае, если представления с таким идентификатором не существует,
создается новое представление.

## Syntax
```csharp
public dynamic UpdateView(dynamic viewMetadata, string version, string configuration, string document)
```

### Parameters

`viewMetadata`

Объект метаданных представления

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование конфигурации

`document`

Наименование документа, к которому относится сервис

## Example


Пример запроса метаданных:

```csharp
dynamic view = api.GetView("2.0.0.0","TestConfig1",,"TestDocument1","TestView1");

view.Name = "TestView2";
api.UpdateView(view, "2.0.0.0","TestConfig1","TestDocument1");

```

В результате успешного выполнения запроса возвращается статус 200 ОК
