---
layout: doc
title: "InsertScenario"
position: 3
categories: 
tags:
---

## Method 

PUT


## Description
Предоставляет возможность сохранения нового сценария в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

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
PUT http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Scenario

BODY 

{
  "Id": "4e3a2b51-6a28-411b-a935-a29251584f7c",
  "Version": "2.0.0.0",
  "Name": "3958a83e-14ed-4a65-9b7f-92fabbd792e5",
  "Caption": "",
  "Description": "",
  "ScenarioId": "ActionUnitThatNotExistsAndOnlyForTestName"
}
```

При успешном выполнении запроса возвращается статус 200 ОК
