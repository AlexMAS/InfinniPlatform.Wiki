---
layout: doc
title: "AddUser"
position: 0 
categories: 
tags:
---

# Description
Предоставляет возможность добавить пользователя системы

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/Administration/User/
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

`version`

Версия приложения.

# Body

Тело запроса содержит JSON-документ вида:  

{  
  "UserName": `<userName>`,  
  "Password": `<password>`  
}  

где  

`userName`  

Логин создаваемого пользователя системы

`password`  

Пароль создаваемого пользователя системы

# Example

Пример запроса на добавление пользователя системы

```js
PUT http://localhost:9900/1/Administration/User 

body

{
  "UserName": "NewUser_c34a8076-be15-4461-8423-dc050fdcf1a1",
  "Password": "NewUser_c34a8076-be15-4461-8423-dc050fdcf1a1"
}

```

Пример ответа на запрос создания пользователя системы

```js
HTTP/1.1 200 OK
Content-Length: 67
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 08:33:35 GMT

{
	"IsValid": true,
	"ValidationMessage": "User created successfully"
}
```