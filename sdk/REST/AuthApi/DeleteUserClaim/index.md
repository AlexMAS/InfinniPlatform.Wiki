---
layout: doc
title: "DeleteUserClaim"
position: 7
categories: 
tags:
---

# Description
Предоставляет возможность удалить у пользователя системы утверждение (Claim) указанного типа.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL

```js
<serverScheme>://<serverName>:<serverPort>/<version>/Administration/User/<userName>/Claims/<claimType>
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

`claimType`

Тип удаляемого утверждения

# Example

Пример запроса удаления утверждения относительно пользователя

```js
DELETE http://localhost:9900/1/Administration/User/NewUser_be6cfe78-32e2-44fd-b7e5-9b39de74ba4c/Claims/OrganizationId
```

Пример ответа на запрос добавления утверждения относительно пользователя

```js
HTTP/1.1 200 OK
Content-Length: 68
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 10:11:08 GMT

{
	"ValidationMessage": "Claim removed successfully",
	"IsValid": true
}
```

