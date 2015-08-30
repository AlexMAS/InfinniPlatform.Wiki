---
layout: doc
title: "InsertService"
position: 3
categories: 
tags:
---

## Method 

PUT


## Description
Предоставляет возможность сохранения нового сервиса в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

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
PUT http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Service

BODY 

{
  "Id": "dd9d0b63-e874-44e4-b19a-c8d7ad7508c5",
  "Version": "2.0.0.0",
  "Name": "Service1",
  "Caption": "",
  "Description": ""
}
```

При успешном выполнении запроса возвращается статус 200 ОК
