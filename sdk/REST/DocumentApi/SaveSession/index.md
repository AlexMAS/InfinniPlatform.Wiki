---
layout: doc
title: "SaveSession"
position: 9
categories: 
tags:
---

## Фиксация сессии

## Description
Сохраняет присоединенные к сессии документы на сервере, после чего сессия очищается.

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/<sessionId>
```

# Verb Type

POST

# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, demo.somedomain.ru).

`serverPort`

Порт сервера.

`version`

Версия приложения.

`sessionId`

Идентификатор клиентской сессии на сервере.

# Example

Пример запроса на фиксацию сессии

```js
POST http://localhost:9900/1/0b2b91d6-1a51-4903-8166-729d3601d8de 
```

Пример ответа на запрос фиксации сессии

```js
HTTP/1.1 200 OK
Content-Length: 99
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 06:00:28 GMT

{
	"Id": "226fbf92-61fa-4bac-a97e-6a337d1037f3",
	"SessionId": "0b2b91d6-1a51-4903-8166-729d3601d8de"
}
```
где Id - идентификатор запроса обработанного сервером
SessionId - идентификатор сессии, фиксация которой была произведена