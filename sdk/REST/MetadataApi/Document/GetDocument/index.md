---
layout: doc
title: "GetDocument"
position: 2
categories: 
tags:
---

Получить экземпляр метаданных документа из хранилища метаданных

## Method 

GET

## Description
Предоставляет возможность получения экземпляра документа из хранилища метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<configName>/document/<documentName>
```

### Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, 'demo.somedomain.ru').

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

`configName`

Наименование конфигурации

`<documentName>`

Наименование документа

## Example

Пример запроса:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document/TestDocument 
```

В результате успешного выполнения запроса возвращается

```js
{
  "Id": "2c9d0b37-4523-4789-8516-743514808412",
  "Secured": true,
  "Name": "TestDocument",
  "Caption": "",
  "Description": "",
  "Versioning": 2,
  "Version": "2.0.0.0",
  "MetadataIndex": "",
  "Services": [],
  "Processes": [],
  "Scenarios": [],
  "Generators": [],
  "Views": [],
  "PrintViews": [],
  "ValidationWarnings": [],
  "ValidationErrors": [],
  "ParentId": "6a74c8c1-a77d-433d-9020-33959e2406e6",
  "__ConfigId": "systemconfig",
  "__DocumentId": "documentmetadata"
}
```
