---
layout: doc
title: "InsertMenu"
position: 12
categories: 
tags:
---

## Method

PUT

## Description

Предоставляет возможность сохранения нового меню в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных меню.

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
  "Id": "9d563d33-1f86-4ab0-9697-7a0cb72ce320",
  "Version": "2.0.0.0",
  "Name": "Menu1",
  "Caption": "",
  "Description": ""
}

```

При успешном выполнении запроса возвращается статус 200 ОК
