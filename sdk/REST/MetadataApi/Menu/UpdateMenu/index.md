---
layout: doc
title: "UpdateMenu"
position: 14
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность сохранения существующего меню в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных меню.
Существующее меню будет обновлено. В случае, если меню с таким идентификатором не существует,
создается новое меню.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configuration>/menu
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
http://localhost:9900/1/metadata/2.0.0.0/TestConfigVersion/Menu

BODY

{
  "Id": "81b717d5-4a58-47c7-b475-fac1a79c2f69",
  "Version": "2.0.0.0",
  "Name": "MainMenu_v1",
  "Caption": "",
  "Description": ""
}
```

В результате успешного выполнения запроса возвращается статус 200 ОК
