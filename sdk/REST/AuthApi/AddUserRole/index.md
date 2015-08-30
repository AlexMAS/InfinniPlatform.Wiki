---
layout: doc
title: "AddUserRole"
position: 4 
categories: 
tags:
---

# Description

Предоставляет возможность установки роли указанному пользователю

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/Administration/User/<userName>/Roles/<roleName>
```

# Verb Type

PUT

# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, demo.somedomain.ru).

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

`userName`

Пользователь системы

`roleName`

Устанавливаемая пользователю роль

# Example

Пример запроса на добавление роли пользовтелю

```js
PUT http://localhost:9900/1/Administration/User/NewUser_cbe47179-1f49-4a32-ab4c-d6e2d4f0e673/Roles/TestRoleb4cbc098-b509-40a8-9c54-bf2772303d3d
```

Пример ответа на запрос добавления роли пользователю

```js
HTTP/1.1 200 OK
Content-Length: 58
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 09:46:56 GMT

{
	"IsValid": true,
	"ValidationMessage": "User role added."
}
```
