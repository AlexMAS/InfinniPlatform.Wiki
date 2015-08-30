---
layout: doc
title: "AddUserClaim"
position: 6
categories: 
tags:
---

# Description
Предоставляет возможность добавить пользователю системы утверждение (Claim) указанного типа, имеющее 
указанное значение

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL

```js
<serverScheme>://<serverName>:<serverPort>/<route>/Administration/User/<userName>/Claims/<claimType>
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

`claimType`

Тип добавляемого утверждения

# Example

Пример запроса добавления утверждения относительно пользователя

```js
PUT http://localhost:9900/1/Administration/User/NewUser_be6cfe78-32e2-44fd-b7e5-9b39de74ba4c/Claims/OrganizationId

body

{
  "ClaimValue": "TestOrganization"
}

```

Пример ответа на запрос добавления утверждения относительно пользователя

```js
HTTP/1.1 200 OK
Content-Length: 66
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 10:11:08 GMT

{
	"ValidationMessage": "Claim added successfully",
	"IsValid": true
}
```

