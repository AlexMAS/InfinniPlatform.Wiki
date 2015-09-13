---
layout: doc
title: "Detach"
position: 8
categories: 
tags:
---

# Отсоединение документа от сессии

# Description
Отсоединяет указанный документ от клиентской сессии с указанным идентификатором.
Если сессия с указанным идентификатором не найдена, вызов игнорируется.

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/<sessionId>
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

`sessionId`

Идентификатор клиентской сессии на сервере.

# Example

Пример запроса на отсоединение документа от сессии

```js
DELETE http://localhost:9900/1/cc7d1fb7-68b8-4415-acc1-62ef41f951f1
```

Результат запроса на отсоединение документа от сессии

```js
HTTP/1.1 200 OK
Content-Length: 99
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 06:34:01 GMT

{
	"Id": "04b38862-fc35-4087-a483-c388cb990ef7",
	"SessionId": "cc7d1fb7-68b8-4415-acc1-62ef41f951f1"
}
```
где Id - идентификатор отсоединяемого документа
SessionId - идентификатор сессии, от которой отсоединен документ