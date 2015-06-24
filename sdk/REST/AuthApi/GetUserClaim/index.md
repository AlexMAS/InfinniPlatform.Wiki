---
layout: doc
title: "GetUserClaim"
position: 9
categories: 
tags:
---

# Description
Предоставляет возможность получить у пользователя системы установленное значение утверждения (Claim) указанного типа.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL

```js
<serverScheme>://<serverName>:<serverPort>/<version>/Administration/User/<userName>/Claims/<claimType>
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

`userName`

Пользователь системы

`claimType`

Тип удаляемого утверждения

# Example

Пример запроса удаления утверждения относительно пользователя

```js
GET http://localhost:9900/1/Administration/User/NewUser_3ad8ec45-6e8c-4568-b0df-e737e63125c1/Claims/OrganizationId
```

Пример ответа на запрос добавления утверждения относительно пользователя

```js
HTTP/1.1 200 OK
Content-Length: 123
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 10:27:31 GMT

{
	"ClaimType": "OrganizationId",
	"UserName": "NewUser_3ad8ec45-6e8c-4568-b0df-e737e63125c1",
	"ClaimValue": "TestOrganization"
}
```

