---
layout: doc
title: "UpdateProcess"
position: 4
categories: 
tags:
---

## Description
Предоставляет возможность изменения существующего бизнес-процесса в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные бизнес-процесса будут обновлены. В случае, если бизнес-процесса с таким идентификатором не существует,
создается новый бизнес-процесс.

## Syntax
```csharp
public dynamic UpdateProcess(dynamic processMetadata, string version, string configuration, string document)
```

### Parameters

`processMetadata`

Объект метаданных бизнес-процесса

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование конфигурации

`document`

Наименование документа, к которому относится бизнес-процесс

## Example


Пример запроса метаданных:

```csharp
dynamic process = api.GetProcess("2.0.0.0","TestConfig1",,"TestDocument1","TestProcess1");

process.Name = "TestProcess2";
api.UpdateProcess(process, "2.0.0.0","TestConfig1","TestDocument1");

```

В результате успешного выполнения запроса возвращается статус 200 ОК
