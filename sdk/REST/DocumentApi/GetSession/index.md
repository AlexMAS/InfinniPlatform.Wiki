---
layout: doc
title: "GetSession"
position: 6
categories: 
tags:
---

# Description
Возвращает список документов, присоединенных к указанной клиентской сессии.
Если сессия не существует, создается новая сессия и возвращается пустой список документов.

# URL

```js
<serverScheme>://<serverName>:<serverPort>/<route>/<sessionId>
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

`route` 

Указание на роутинг сервера в составе кластера

`sessionId`

Идентификатор клиентской сессии на сервере.

# Example

Пример запроса на получение списка документов, присоединенных к сессии

```js
GET http://localhost:9900/1/gameshop/catalogue/859435be-babd-433e-b8ad-f83027922859
```

Пример ответа на запрос получения документов, присоединенных к сессии

```js

HTTP/1.1 200 OK
Content-Length: 180
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 05:31:43 GMT

{
	"Items": [{
		"Application": "gameshop",
		"DocumentType": "catalogue",
		"Document": {
			"Id": "aa3afcdc-ec97-4e57-bd6e-361b7bb95917",
			"Name": "Diablo III",
			"Price": 1800
		},
		"Version": "1.0.0.0"
	},
	{
		"Application": "gameshop",
		"DocumentType": "catalogue",
		"Document": {
			"Id": "b9602f4a-b9fa-4188-a42c-c3599681e935",
			"Name": "Wolfenstein:New Order",
			"Price": 999
		},
		"Version": "1.0.0.0"
	}]
}
```

Список возвращаемых документов содержит обертки над документами предметной области,
дополнительно содержащие следующую информацию:

* Application - идентификатор приложения, к которому относится присоединенный к сессии документ
* DocumentType - тип документа, к которому относится присоединенный к сессии документ
* Version - версия приложеия, соответствующая присоединенному в сессии документу
* Document - поле, содержащее непосредственно документ предметной области, который будет сохранен
в хранилище документов соответствуюшего типа

# Attention

В момент фиксации сессии список документов, присоединенных к сессии очищается.
В дальнейшем сессия с указанным номером доступна для повторного использования, создавать
сессию с новым идентификатором на сервере не требуется
