---
layout: doc
title: "Attach"
position: 7
categories: 
tags:
---

## Присоединение документов к сессии

## Description
Присоединяет документ к списку документов существующей сессии. В случае отсутствия сессии с указанным
идентификатором, создается новая сессия.

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/<sessionId>
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

`version`

Версия приложения.

`sessionId`

Идентификатор клиентской сессии на сервере.

# Example

Пример запроса на присоединение документа к сессии

```js
PUT http://localhost:9900/1/0b2b91d6-1a51-4903-8166-729d3601d8de

body

{
  "Application": "gameshop",
  "DocumentType": "catalogue",
  "Document": {
    "Id": "b9602f4a-b9fa-4188-a42c-c3599681e935",
    "Name": "Wolfenstein:New Order",
    "Price": 999
  }
}
```

Пример ответа на запрос присоединения документа к сессии

```js
HTTP/1.1 200 OK
Content-Length: 117
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 06:00:28 GMT

{
	"Id": "b9602f4a-b9fa-4188-a42c-c3599681e935",
	"IsValid": true,
	"ValidationMessage": "Document attached successfully."
}
```
где Id - идентификатор присоединяемого документа