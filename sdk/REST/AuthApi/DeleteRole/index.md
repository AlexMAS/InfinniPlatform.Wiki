---
layout: doc
title: "DeleteRole"
position: 3 
categories: 
tags:
---

# Description
Предоставляет возможность удалить роль из системы

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/Administration/Role/<roleName>
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

`route` 

Указание на роутинг сервера в составе кластера

`roleName`

Наименование роли в системе

# Example

Пример запроса на удаление роли системы

```js
DELETE http://localhost:9900/1/Administration/Role/TestRole1eab505c-f70c-4b09-957a-8a898b179d70
```

Пример ответа на запрос удаления роли системы

```js
HTTP/1.1 200 OK
Content-Length: 110
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 09:18:50 GMT

{
	"IsValid": true,
	"ValidationMessage": "Role with name TestRole1eab505c-f70c-4b09-957a-8a898b179d70 deleted."
}
```