---
layout: doc
title: "AddRole"
position: 3 
categories: 
tags:
---

# Description
Предоставляет возможность добавить роль в систему

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/Administration/Role/<roleName>
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

`roleName`

Наименование роли в системе

# Example

Пример запроса на добавление роли системы

```js
PUT http://10.0.0.45:9900/1/Administration/Role/TestRole1eab505c-f70c-4b09-957a-8a898b179d70 
```

Пример ответа на запрос создания роли системы

```js
HTTP/1.1 200 OK
Content-Length: 53
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 09:18:50 GMT

{
	"IsValid": true,
	"ValidationMessage": "Role added."
}
```