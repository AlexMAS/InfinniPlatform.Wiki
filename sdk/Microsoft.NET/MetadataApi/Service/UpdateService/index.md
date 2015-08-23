---
layout: doc
title: "UpdateService"
position: 4
categories: 
tags:
---

## Description
Предоставляет возможность изменения существующего пользовательского сервиса в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные сервиса будут обновлены. В случае, если сервиса с таким идентификатором не существует,
создается новый сервис.

## Syntax
```csharp
public dynamic UpdateService(dynamic serviceMetadata, string version, string configuration, string document)
```

### Parameters

`serviceMetadata`

Объект метаданных сервиса

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование конфигурации

`document`

Наименование документа, к которому относится сервис

## Example


Пример запроса метаданных:

```csharp
dynamic service = api.GetService("2.0.0.0","TestConfig1",,"TestDocument1","TestService1");

service.Name = "TestService2";
api.UpdateService(service, "2.0.0.0","TestConfig1","TestDocument1");

```

В результате успешного выполнения запроса возвращается статус 200 ОК
