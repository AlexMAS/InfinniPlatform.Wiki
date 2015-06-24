---
layout: doc
title: "DeleteUser"
position: 1 
categories: 
tags:
---

# Description
Предоставляет возможность удалить пользователя системы

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/Administration/User/<userId>
```

# Verb Type

DELETE

# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, demo.somedomain.ru).

`serverPort`

Порт сервера.

`version`

Версия приложения.

`userId`

Идентификатор удаляемого пользователя системы

# Example

Пример запроса на добавление пользователя системы

```js
DELETE http://localhost:9900/1/Administration/User/NewUser_c34a8076-be15-4461-8423-dc050fdcf1a1
```

Пример ответа на запрос создания пользователя системы

```js
HTTP/1.1 200 OK
Content-Length: 116
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 08:33:35 GMT

{
	"IsValid": true,
	"ValidationMessage": "User \"NewUser_c34a8076-be15-4461-8423-dc050fdcf1a1\" deleted successfully"
}
```