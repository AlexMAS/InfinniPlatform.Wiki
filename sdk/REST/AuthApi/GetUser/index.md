---
layout: doc
title: "GetUser"
position: 2 
categories: 
tags:
---

# Description
Предоставляет возможность получить пользователя системы

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/Administration/User/<userId>
```

# Verb Type

GET

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

Идентификатор пользователя системы

# Example

Пример запроса на добавление пользователя системы

```js
GET http://localhost:9900/1/Administration/User/NewUser_c34a8076-be15-4461-8423-dc050fdcf1a1 
```

Пример ответа на запрос создания пользователя системы

```js
HTTP/1.1 200 OK
Content-Length: 386
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 08:33:35 GMT

{
	"UserName": "NewUser_c34a8076-be15-4461-8423-dc050fdcf1a1",
	"PasswordHash": "AKpaSy8Q74iKSScufTcrQznX51lbDSmPSQ7kYzLoNubxL7u+jldtvtt+Ni19t+r4lw==",
	"SecurityStamp": "306696f5-1620-4141-89a5-5873634c4a99",
	"Roles": [],
	"Claims": [],
	"Logins": [],
	"Id": "a7f4d52b-0b5c-4f82-8cec-c0da34ecfddc",
	"__ConfigId": "authorization",
	"__DocumentId": "userstore",
	"TimeStamp": "2015-06-24T13:33:35.4651166+05:00"
}
```