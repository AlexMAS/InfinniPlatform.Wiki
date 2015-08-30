---
layout: doc
title: "GetServiceList"
position: 2
categories: 
tags:
---

## Method 

GET

## Description
Предоставляет возможность чтения списка заголовков существующих в конфигурации сервисов.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Service/List
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
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Service/List
```

Пример результата запроса:

```js
[
  {
    "Id": "dd9d0b63-e874-44e4-b19a-c8d7ad7508c5",
    "Name": "Service1_v1",
    "Caption": ""
  }
]
```
