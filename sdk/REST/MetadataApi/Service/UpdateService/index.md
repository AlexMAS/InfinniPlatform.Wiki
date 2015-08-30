---
layout: doc
title: "UpdateService"
position: 4
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность изменения существующего сервиса в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные сервиса будут обновлены. В случае, если сервиса с таким идентификатором не существует,
создается новый сервис.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Service/
```

### Parameters

`route` 

Указание на роутинг сервера в составе кластера

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование документа, к которому относится сервис

## Example


Пример запроса метаданных:

```js

POST http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Service

{
  "Id": "dd9d0b63-e874-44e4-b19a-c8d7ad7508c5",
  "Version": "2.0.0.0",
  "Name": "Service1_v1",
  "Caption": "",
  "Description": ""
}
```

В результате успешного выполнения запроса возвращается статус 200 ОК
