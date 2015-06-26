---
layout: doc
title: "ChangePassword"
position: 2 
categories: 
tags:
---

# Description
Предоставляет возможность регистрации пользователя в системе

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/ChangePassword
```

# Verb Type

POST


# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, 'demo.somedomain.ru').

`serverPort`

Порт сервера.

`version`

Версия приложения.

# Body

Тело запроса представляет собой JSON-документ следующего типа

```js
{
  "UserName": <userName>,
  "OldPassword": <oldPassword>,
  "NewPassword": <newPassword>
}
```

`userName`

Логин пользователя, выполняющего вход.

`oldPassword`

Старый пароль пользователя.

`newPassword`

Новый пароль пользователя

# Example

Пример запроса входа пользователя в систему.

```js
POST http://localhost:9900/1/signin 
```

Пример ответа на запрос входа пользователя в систему

```js
HTTP/1.1 400 Bad Request
Content-Length: 163
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Thu, 25 Jun 2015 08:46:16 GMT

{
   "IsValid" : true
}
```
