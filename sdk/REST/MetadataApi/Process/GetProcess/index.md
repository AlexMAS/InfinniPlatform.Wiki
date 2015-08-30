---
layout: doc
title: "GetProcess"
position: 1
categories: 
tags:
---

## Method

GET

## Description
Предоставляет возможность чтения существующего бизнес-процесса из хранилища.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Process/<ProcessName>
```

### Parameters

`route` 

Указание на роутинг сервера в составе кластера

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование документа, к которому относится бизнес-процесс

`ProcessName`

Наименование печатной формы

## Example


Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Process/Process1
```

Пример результата запроса:

```js
{
  "Id": "dbc5bb3f-54a8-4aae-be1c-239f1fde53bb",
  "Secured": true,
  "Version": "2.0.0.0",
  "Name": "Process1",
  "Caption": "",
  "Description": "",
  "SettingsType": "Default",
  "Type": 1,
  "ParentId": "3b6203f5-7e33-4c50-a0c7-ae81e0488be4",
  "__ConfigId": "systemconfig",
  "__DocumentId": "processmetadata"
}
```
