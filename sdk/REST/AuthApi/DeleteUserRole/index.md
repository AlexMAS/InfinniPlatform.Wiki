---
layout: doc
title: "DeleteUserRole"
position: 5 
categories: 
tags:
---

# Description

Предоставляет возможность удаления роли у указанного пользователя

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/Administration/User/<userName>/Roles/<roleName>
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

`userName`

Пользователь системы

`roleName`

Удаляемая у пользователя роль

# Example

Пример запроса на удаление роли пользователя

```js
DELETE http://localhost:9900/1/Administration/User/NewUser_cbe47179-1f49-4a32-ab4c-d6e2d4f0e673/Roles/TestRoleb4cbc098-b509-40a8-9c54-bf2772303d3d
```

Пример ответа на запрос добавления роли пользователю

```js
HTTP/1.1 200 OK
Content-Length: 60
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 09:46:57 GMT

{
	"IsValid": true,
	"ValidationMessage": "User role deleted."
}
```
