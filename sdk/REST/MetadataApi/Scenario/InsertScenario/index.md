---
layout: doc
title: "InsertScenario"
position: 3
categories: 
tags:
---

## Description
Предоставляет возможность сохранения нового сценария в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

## Syntax
```csharp
public dynamic InsertScenario(dynamic scenarioMetadata, string version, string configuration, string document)
```

## Example

Пример запроса метаданных:

```csharp
dynamic scenarioMetadata = api.CreateScenario();
scenarioMetadata.Name = "TestScenario1";

api.InsertScenario(scenarioMetadata);
```

При успешном выполнении запроса возвращается статус 200 ОК
