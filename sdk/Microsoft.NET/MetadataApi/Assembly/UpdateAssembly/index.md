---
layout: doc
title: "UpdateAssembly"
position: 14
categories: 
tags:
---

## Description
Предоставляет возможность сохранения существующей сборки в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных сборки.
Существующая сборка будет обновлена. В случае, если сборки с таким идентификатором не существует,
создается новая сборка.

## Syntax
```csharp
public dynamic UpdateAssembly(dynamic assembly, string version, string configName)
```

### Parameters

`assembly`

Объект метаданных сборки

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`assemblyName`

Наименование сборки

## Example


Пример запроса метаданных:

```csharp
dynamic assembly = api.GetAssembly("2.0.0.0","TestConfig1","InfinniPlatform.Sdk");

assembly.Name = "MyOwnDll";
api.UpdateAssembly(assembly, "2.0.0.0","TestConfig1");

```

В результате успешного выполнения запроса возвращается статус 200 ОК
