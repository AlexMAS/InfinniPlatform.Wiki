---
layout: doc
title: "GetDocumentList"
position: 3
categories: 
tags:
---

Получить список заголовков метаданных документа из хранилища метаданных

## Method 

GET

## Description
Предоставляет возможность получения списка заголовков метаданных документов из хранилища метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<configName>/document/
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

Наименование документа

## Example

Пример запроса:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document 
```

В результате успешного выполнения запроса возвращается

```js
[
  {
    "Id": "9f2bdd47-a943-4317-bed2-d0799cbc40a9",
    "Name": "Common",
    "Caption": "Common options"
  },
  {
    "Id": "0e3f2b4c-8823-4da4-ad59-14b353396518",
    "Name": "TestConfigVersion_a81369a7-4994-49ef-bde9-ae4148d04804_Registers",
    "Caption": "Registers common options"
  },
  {
    "Id": "2c9d0b37-4523-4789-8516-743514808412",
    "Name": "Document1_v1",
    "Caption": ""
  }
]
```
