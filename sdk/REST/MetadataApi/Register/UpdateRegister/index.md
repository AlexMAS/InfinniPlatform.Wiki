---
layout: doc
title: "UpdateRegister"
position: 5
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность сохранения существующих метаданных регистра в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных регистра.
Существующие метаданные регистра будут обновлены. В случае, если регистра с таким идентификатором не существует,
создается новый регистр.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configuration>/register
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

`version`

Версия приложения.

`configuration`

Приложение (конфигурация)


## Example


Пример запроса метаданных:

```js
http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Register

BODY

{
  "Id": "9d563d33-1f86-4ab0-9697-7a0cb72ce320",
  "Version": "2.0.0.0",
  "Name": "Register1_v1",
  "Caption": "",
  "Description": ""
}
```

В результате успешного выполнения запроса возвращается статус 200 ОК
