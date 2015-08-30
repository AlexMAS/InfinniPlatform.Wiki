---
layout: doc
title: "InsertDocument"
position: 0
categories: 
tags:
---

Сохранить новый экземпляр метаданных документа в хранилище метаданных

## Method 

PUT

## Description
Предоставляет возможность сохранения нового экземпляра документа в хранилище метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<configName>/document
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

## Example

Пример запроса:

```js
PUT http://localhost:9900/1/metadata/2.0.0.0/NewSolution/Document 

BODY

{
  "Id": "2c9d0b37-4523-4789-8516-743514808412",
  "Name": "Document1",
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
  "ValidationErrors": []
}
```

В результате успешного выполнения запроса возвращается 200 ОК
