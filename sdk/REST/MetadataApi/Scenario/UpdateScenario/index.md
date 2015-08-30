---
layout: doc
title: "UpdateScenario"
position: 4
categories: 
tags:
---

## Description
Предоставляет возможность изменения существующего сценария в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные сценария будут обновлены. В случае, если сценария с таким идентификатором не существует,
создается новый сценарий.

## Syntax
```csharp
public dynamic UpdateScenario(dynamic scenarioMetadata, string version, string configuration, string document)
```

### Parameters

`scenarioMetadata`

Объект метаданных сценария

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование объекта конфигурации

`document`

Наименование документа, к которому относится сценарий

## Example


Пример запроса метаданных:

```csharp
dynamic scenario = api.GetScenario("2.0.0.0","TestConfig1",,"TestDocument1","TestScenario1");

scenario.Name = "TestScenario2";
api.UpdateScenario(scenario, "2.0.0.0","TestConfig1","TestDocument1");

```

В результате успешного выполнения запроса возвращается статус 200 ОК
