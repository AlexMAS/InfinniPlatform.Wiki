---
layout: doc
title: "UpdateScenario"
position: 4
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность изменения существующего сценария в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные сценария будут обновлены. В случае, если сценария с таким идентификатором не существует,
создается новый сценарий.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Scenario/
```

### Parameters

`route` 

Указание на роутинг сервера в составе кластера

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование документа, к которому относится сценарий

## Example


Пример запроса метаданных:

```js

POST http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Scenario


{
  "Id": "4e3a2b51-6a28-411b-a935-a29251584f7c",
  "Version": "2.0.0.0",
  "Name": "Scenario1_v1",
  "Caption": "",
  "Description": "",
  "ScenarioId": "ActionUnitThatNotExistsAndOnlyForTestName"
}
```

В результате успешного выполнения запроса возвращается статус 200 ОК
