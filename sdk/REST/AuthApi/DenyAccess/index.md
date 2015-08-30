---
layout: doc
title: "DenyAccess"
position: 11
categories: 
tags:
---

# Description
Установить запрет пользователю на указанное действие для указанного ресурса.

Ресурс в системе может быть описан совокупностью четырех параметров:

* application - идентификатор приложения
* documentType - тип документа
* service - сервис
* instanceId - идентификатор экземляра документа

Подробнее см. [Авторизация пользовательских ресурсов](../../Advanced Topics/Authorizing user resources)

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL

```js
<serverScheme>://<serverName>:<serverPort>/<route>/Administration/User/DenyAccess
```

# Verb Type

POST

# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, demo.somedomain.ru).

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

# Body

Устанавливаемые права определяются JSON-документом, передаваемым в теле запроса и имеющим 
следующий формат:

{  
  "UserName": `userName`,  
  "Application": `application`,  
  "DocumentType": `documentType`,  
  "Service": `service`,  
  "InstanceId": `instanceId`  
}  


`userName`

логин пользователя, которому устанавливаются права доступа 

`application`

идентификатор приложения, на которое устанавливаются права доступа

`documentType`

идентификатор типа документа, на который устанавливаются права доступа

`service`

сервис, на который устанавливаются права доступа

`instanceId` 

идентификатор экземпляра документа для указанного приложения и тип, на который устанавливаются
права доступа

# Example

Пример запроса установки прав пользователю

```js
POST http://localhost:9900/1/Administration/User/DenyAccess

body

{
  "UserName": "NewUser_682bcdee-1817-4389-b76d-3ebfb260a9c0",
  "Application": "Gameshop",
  "DocumentType": "UserProfile",
  "Service": "GetDocument",
  "InstanceId": null
}

```

Пример ответа на запрос установки прав пользователю

```js
HTTP/1.1 200 OK
Content-Length: 19
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 10:30:57 GMT

{
	"IsValid":true
}
```

