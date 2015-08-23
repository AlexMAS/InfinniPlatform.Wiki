---
layout: doc
title: "GetService"
position: 1
categories: 
tags:
---

## Description
Предоставляет возможность чтения существующего сервиса из хранилища.

## Syntax
```csharp
public dynamic GetService(string version, string configuration, string document, string service)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование объекта конфигурации

`service`

Наименование сервиса

## Example


Пример запроса метаданных:

```csharp
dynamic service = GetService("2.0.0.0","TestConfig1","TestDocument1","TestService1");
```

Пример результата запроса:

```js
{
  "Id": "1d21b628-a4a1-4857-9383-7f7b0b29145c",
  "Version": "2.0.0.0",
  "Name": "TestService1",
  "Caption": "",
  "Description": "",
  "ParentId": "4a1ecc15-dbfa-44d2-8760-d938049c9ef8",
  "__ConfigId": "systemconfig",
  "__DocumentId": "servicemetadata"
}
```
