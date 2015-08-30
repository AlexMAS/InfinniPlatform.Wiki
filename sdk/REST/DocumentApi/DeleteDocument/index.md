---
layout: doc
title: "DeleteDocument"
position: 3 
categories: 
tags:
---

## Description
Определяет метод удаления документов из постоянного хранилища.

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/<application>/<documentType>/<documentUid>
```

# Verb Type

DELETE

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

Идентификатор документа для поиска

# Example

Пример запроса на удаление документа

```js
DELETE http://localhost:9900/1/gameshop/catalogue/af825e92-b2e4-4150-9952-e2d3316f5cfd 
```

Результат запроса на удаление документа

```js
HTTP/1.1 200 OK
Content-Length: 128
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 05:02:05 GMT

{
	"IsValid": true,
	"ValidationMessage": "Document with identifier \"af825e92-b2e4-4150-9952-e2d3316f5cfd\" deleted successfully"
}
```
