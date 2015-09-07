---
layout: doc
title: "DeleteDocument"
position: 5
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующего документа из хранилища

## Syntax
```csharp
public dynamic DeleteDocument(string version, string configName, string documentName)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование метаданных документа

## Example


Пример запроса метаданных:

```csharp
api.DeleteDocument("2.0.0.0","TestConfig1","TestDoc1");
```

В результате успешного выполнения запроса возвращается статус 200 ОК
