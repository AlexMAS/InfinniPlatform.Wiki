---
layout: doc
title: "SignOut"
position: 1 
categories: 
tags:
---

# Description
Предоставляет возможность выхода пользователя из системы

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/SignOut
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

# Example

Пример запроса на выход пользователя из системы.

```js
POST http://localhost:9900/1/signout 
```

Пример ответа на запрос выхода пользователя из системы

```js
HTTP/1.1 200 OK
Content-Length: 68
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Thu, 25 Jun 2015 08:46:16 GMT

{"IsValid":true,"ValidationMessage":"User sign out successfully"}
```
