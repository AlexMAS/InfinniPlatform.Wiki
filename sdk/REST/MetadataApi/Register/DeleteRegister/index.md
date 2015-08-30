---
layout: doc
title: "DeleteRegister"
position: 2
categories: 
tags:
---

Удалить экземпляр метаданных регистра из хранилища метаданных

## Method 

DELETE

## Description
Предоставляет возможность получения экземпляра метаданных регистра из хранилища метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<configName>/register/<registerName>
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

`<registerName>`

Наименование регистра

## Example

Пример запроса:

```js
DELETE http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Register/TestRegister 
```

В результате успешного выполнения запроса возвращается статус 200 ОК

