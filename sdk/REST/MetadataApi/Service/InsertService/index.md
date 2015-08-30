---
layout: doc
title: "InsertService"
position: 3
categories: 
tags:
---

## Description
Предоставляет возможность сохранения нового сервиса в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

## Syntax
```csharp
public dynamic InsertService(dynamic serviceMetadata, string version, string configuration, string document)
```

## Example

Пример запроса метаданных:

```csharp
dynamic serviceMetadata = api.CreateService("1.0.0.0,"TestConfig1","TestDocument1");
serviceMetadata.Name = "TestService1";

api.InsertService(serviceMetadata);
```

При успешном выполнении запроса возвращается статус 200 ОК
