---
layout: doc
title: "UpdateDocument"
position: 4
categories: 
tags:
---

## Description
Предоставляет возможность сохранения существующего документа в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных документа.
Существующий документ будет обновлен. В случае, если сборки с таким идентификатором не существует,
создается новый документ.

## Syntax
```csharp
public dynamic UpdateDocument(dynamic document, string version, string configName)
```

### Parameters

`document`

Объект метаданных документа

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование метаданных документа

## Example


Пример запроса метаданных:

```csharp
dynamic doc = api.GetDocument("2.0.0.0","TestConfig1","TestDoc1");

doc.Name = "TestDoc2";
api.UpdateDocument(doc, "2.0.0.0","TestConfig1");

```

В результате успешного выполнения запроса возвращается статус 200 ОК
