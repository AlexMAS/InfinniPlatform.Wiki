---
layout: doc
title: "GetScenario"
position: 1
categories: 
tags:
---

## Method

GET

## Description
Предоставляет возможность чтения существующего сценария из хранилища.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Scenario/<ScenarioName>
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

`ScenarioName`

Наименование печатной формы

## Example


Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Scenario/Scenario1
```

Пример результата запроса:

```js

{
  "Id": "4e3a2b51-6a28-411b-a935-a29251584f7c",
  "Secured": true,
  "Version": "2.0.0.0",
  "Name": "Scenario1",
  "Caption": "",
  "Description": "",
  "ScenarioId": "ActionUnitThatNotExistsAndOnlyForTestName",
  "ParentId": "a2bf4a74-0bc2-44aa-af40-8ee6f76b9c41",
  "__ConfigId": "systemconfig",
  "__DocumentId": "scenariometadata"
}
```
