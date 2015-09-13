---
layout: doc
title: "GetRegisterList"
position: 3
categories: 
tags:
---

Получить список заголовков метаданных регистра из хранилища метаданных

## Method 

GET

## Description
Предоставляет возможность получения списка заголовков метаданных регистров из хранилища метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<configName>/register/
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

Наименование регистра

## Example

Пример запроса:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Register
```

В результате успешного выполнения запроса возвращается

```js
[
  {
    "Id": "ceae998a-2707-4caf-8883-49dacb9961f3",
    "Name": "Register1_v1",
    "Caption": ""
  },
  {
	...
  }
]
```
