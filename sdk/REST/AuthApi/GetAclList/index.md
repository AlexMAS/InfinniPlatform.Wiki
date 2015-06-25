---
layout: doc
title: "GetAclList"
position: 12
categories: 
tags:
---

# Description
Предоставляет возможность получить список ресурсов указанного типа, 
для которых могут быть установлены права пользователей

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

# URL

```js
<serverScheme>://<serverName>:<serverPort>/<version>/Administration/<resourceType>/?filter=<filter>&pageNumber=<pageNumber>&pageSize=<pageSize>&sorting=<sorting>
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

`resourceType`

Тип ресурса, для которого могут быть установлены права доступа 
Может принимать одно из двух возможных значений

* `user`
* `role`

`filter`

Фильтр ресурсов

`pageNumber`

Номер страницы данных

`pageSize`

Размер страницы данных

`sorting`

Настройки сортировки данных

# Example

Пример запроса установки прав пользователю

```js
GET http: //localhost:9900/1/Administration/User/?filter=&pageNumber=0&pageSize=1000&sorting=
```

Пример ответа на запрос установки прав пользователю

```js
[{
	"UserName": "NewUser_aa4e4ca6-5462-486f-b679-2bf65d8d7caf",
	"PasswordHash": "ALid7w7Itrp98m3k23+L4OccA/WB37DE0/ARcDhh5Bu88PNWsCb2etd0w/0lNXC0Ig==",
	"SecurityStamp": "ae0e8e5a-3fe7-477a-acd0-553656062eb4",
	"Roles": [],
	"Claims": [],
	"Logins": [],
	"Id": "284b8810-f8c9-4d9c-ac17-a19d39810a60",
	"__ConfigId": "administration",
	"__DocumentId": "user",
	"TimeStamp": "2015-06-23T11:20:29.2625346+05:00",
	"UserRoles": []
},
{
	"UserName": "NewUser_7b42491b-7dbc-4668-bc8b-44a2948bba8e",
	"PasswordHash": "AMD325o8w1zUaIDrc5ANjwUrdQszylQp/95WP8QlHg0KWD+AQGayEAoenZBXSF1ITg==",
	"SecurityStamp": "b08cb078-20ed-4f2e-a0a1-3f04879b3093",
	"Roles": [],
	"Claims": [],
	"Logins": [],
	"Id": "5de4c2b7-a109-4b81-8157-1cc979d8d7c3",
	"__ConfigId": "administration",
	"__DocumentId": "user",
	"TimeStamp": "2015-06-23T11:20:36.367941+05:00",
	"UserRoles": []
}]
```

