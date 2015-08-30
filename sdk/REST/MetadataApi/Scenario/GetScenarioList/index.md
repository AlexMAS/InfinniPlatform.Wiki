---
layout: doc
title: "GetScenarioList"
position: 2
categories: 
tags:
---

## Method 

GET

## Description
Предоставляет возможность чтения списка существующих в конфигурации пользовательских прикладных сценариев.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Scenario/List
```

### Parameters

`route` 

Указание на роутинг сервера в составе кластера

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование документа, к которому относится представление


## Example


Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Scenario/List
```

Пример результата запроса:

```js
[
  {
    "Id": "4e3a2b51-6a28-411b-a935-a29251584f7c",
    "Name": "Scenario1_v1",
    "Caption": ""
  }
]
```
