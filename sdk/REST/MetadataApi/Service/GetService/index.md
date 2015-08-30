---
layout: doc
title: "GetService"
position: 1
categories: 
tags:
---

## Method

GET

## Description
Предоставляет возможность чтения существующего сервиса из хранилища.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Service/<ServiceName>
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

`ServiceName`

Наименование сервиса

## Example


Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Service/Service1
```

Пример результата запроса:

```js

{
  "Id": "dd9d0b63-e874-44e4-b19a-c8d7ad7508c5",
  "Secured": true,
  "Version": "2.0.0.0",
  "Name": "Service1",
  "Caption": "",
  "Description": "",
  "ParentId": "842815a4-523a-4781-a0fd-697abd959997",
  "__ConfigId": "systemconfig",
  "__DocumentId": "servicemetadata"
}
```
