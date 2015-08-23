---
layout: doc
title: "GetScenario"
position: 1
categories: 
tags:
---

## Description
Предоставляет возможность чтения существующего сценария из хранилища.

## Syntax
```csharp
public dynamic GetScenario(string version, string configuration, string document, string scenario)
```

### Parameters

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование объекта конфигурации

`scenario`

Наименование сценария

## Example


Пример запроса метаданных:

```csharp
dynamic scenario = GetScenario("2.0.0.0","TestConfig1","TestScenario");
```

Пример результата запроса

```js
{
  "Id": "c9e35e33-c638-464e-ae77-826749972ce5",
  "Version": "2.0.0.0",
  "Name": "53a6b4dd-bbc6-4721-bc7b-54e70bdf7ecf",
  "Caption": "",
  "Description": "",
  "ScenarioId": "TestScenario",
  "ParentId": "f41d0c25-300c-424f-915d-5e15f3785b79",
}
```
