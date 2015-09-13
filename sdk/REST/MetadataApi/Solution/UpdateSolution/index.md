---
layout: doc
title: "UpdateSolution"
position: 2
categories: 
tags:
---

Обновить метаданные существующего решения 

## Method

POST

## Description
Предоставляет возможность изменения метаданных существующего решения в хранилище.
Поиск существующего решения выполняется по полю Name.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/solution/
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

## Example

Пример запроса:

```js
POST http://localhost:9900/1/metadata/solution 

BODY 

{
  "Name": "NewSolution",
  "Caption": "NewSolution",
  "ReferencedConfigurations": [],
  "Id": "c62df9b7-4030-433b-91d3-9e7bb658a261",
  "Version": "2.0.0.0"
}
```

В случае успешного выполнения запроса возвращается статус: 200 OK
