---
layout: doc
title: "GetRegisterEntities"
position: 0
categories: 
tags:
---

# Description
Предоставляет возможность получения записей регистра за период

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/SystemConfig/metadata/GetValuesBetweenDates
```

# Method 

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

# Example

Пример получения данных из регистра

```js
GET http://localhost:9900/1/PTA/Register_FundsMovement/?filter%3DDocumentDate%20IsMoreThanOrEquals%2030.08.2015%2018%3A20%3A30%20and%20DocumentDate%20IsLessThanOrEquals%2030.08.2015%2018%3A20%3A30%26pageNumber%3D0%26pageSize%3D1000%26sorting%3D
```
