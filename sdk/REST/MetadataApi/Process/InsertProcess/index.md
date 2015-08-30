---
layout: doc
title: "InsertProcess"
position: 3
categories: 
tags:
---

## Description
Предоставляет возможность сохранения нового бизнес-процесса в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

## Syntax
```csharp
public dynamic InsertProcess(dynamic processMetadata, string version, string configuration, string document)
```

## Example

Пример запроса метаданных:

```csharp
dynamic processMetadata = api.CreateProcess("1.0.0.0,"TestConfig1","TestDocument1");
processMetadata.Name = "TestProcess1";

api.InsertProcess(processMetadata);
```

При успешном выполнении запроса возвращается статус 200 ОК
