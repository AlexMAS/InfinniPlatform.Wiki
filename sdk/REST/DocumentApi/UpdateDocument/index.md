---
layout: doc
title: "UpdateDocument"
position: 4 
categories: 
tags:
---

## Description
Предоставляет возможность частичного обновления экземпляра документа.
При этом происходит только изменение полей, указанных в переданном объекте изменений.

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/<application>/<documentType>/<documentUid>
```

# Verb Type

POST


# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, 'demo.somedomain.ru').

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

`application`

Идентификатор приложения.

`documentType`

Тип документа

`documentUid`

Идентификатор

# Example

Запрос обновления документа

```js
POST http://localhost:9900/1/gameshop/catalogue/9074e771-9a36-4afc-b091-ab3d8aacc614

body:

{
  "Name": "gta V",
  "Price": 2000,
  "Availability": {
    "Available": false,
    "SaleStartDate": "2014-04-14T00:00:00"
  }
}
```

Пример результата обновления

```js
HTTP/1.1 200 OK
Content-Length: 114
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Tue, 23 Jun 2015 11:12:23 GMT

{
	"IsValid": true,
	"ValidationMessage": "Document successfully saved.",
	"Id": "9074e771-9a36-4afc-b091-ab3d8aacc614"
}
```
где Id - идентификатор измененного документа