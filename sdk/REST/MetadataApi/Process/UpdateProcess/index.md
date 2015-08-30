---
layout: doc
title: "UpdateProcess"
position: 4
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность изменения существующего бизнес-процесса в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные бизнес-процесса будут обновлены. В случае, если бизнес-процесса с таким идентификатором не существует,
создается новый бизнес-процесс.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Process/
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

## Example


Пример запроса метаданных:

```js

POST http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Process



{
  "Id": "dbc5bb3f-54a8-4aae-be1c-239f1fde53bb",
  "Version": "2.0.0.0",
  "Name": "Process1_v1",
  "Caption": "",
  "Description": "",
  "SettingsType": "Default",
  "Type": 1
}
```

В результате успешного выполнения запроса возвращается статус 200 ОК
