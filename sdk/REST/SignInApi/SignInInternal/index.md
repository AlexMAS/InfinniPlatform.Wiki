---
layout: doc
title: "SignInInternal"
position: 0 
categories: 
tags:
---

# Description
Предоставляет возможность регистрации пользователя в системе

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/SignIn
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

# Body

Тело запроса представляет собой JSON-документ следующего типа

```js
{
  "UserName": <userName>,
  "Password": <password>,
  "Remember": <remember>
}
```

`userName`

Логин пользователя, выполняющего вход.

`password`

Пароль пользователя.

`remember`

Запомнить пользователя (принимает значение true/false).

# Example

Пример запроса входа пользователя в систему.

```js
POST http://localhost:9900/1/signin 
```

Пример ответа на запрос входа пользователя в систему

```js
HTTP/1.1 200 OK
Content-Length: 1484
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Thu, 25 Jun 2015 08:46:16 GMT

{
	"UserInfo": {
		"UserName": "Admin",
		"Roles": [{
			"Id": "7fce52a4-5fba-452d-be64-0a6f7c510a0b",
			"DisplayName": "System administrator"
		}],
		"Logins": [],
		"Claims": []
	},
	"ResponseCookies": [{
		"Comment": "",
		"HttpOnly": false,
		"Discard": false,
		"Domain": "localhost",
		"Expired": true,
		"Expires": "1970-01-01T05:00:00+05:00",
		"Name": ".AspNet.ExternalCookie",
		"Path": "/",
		"Port": "",
		"Secure": false,
		"TimeStamp": "2015-06-25T13:46:17.1464796+05:00",
		"Value": "",
		"Version": 0
	},
	{
		"Comment": "",
		"HttpOnly": false,
		"Discard": false,
		"Domain": "localhost",
		"Expired": false,
		"Expires": "0001-01-01T00:00:00",
		"Name": ".AspNet.ApplicationCookie",
		"Path": "/",
		"Port": "",
		"Secure": false,
		"TimeStamp": "2015-06-25T13:46:17.1464796+05:00",
		"Value": "AQAAANCMnd8BFdERjHoAwE_Cl-sBAAAANg8H8gU-2kiLV2tyD0tY7AAAAAACAAAAAAAQZgAAAAEAACAAAAC4GqPKAsMBK-QJDqxaEL79UcWbfx7OmfMFs4LJIm7nwAAAAAAOgAAAAAIAACAAAACselIPKzj--x4t68en2Pz8jTnzHQbN0Cj-1af_cPHBxnABAAComi6UPesDbpBuNQRSVVjaZwJWiUK5uXcIAyJXXGVYYZf7-tewpVnh5U_rxmWJioxHG7AFLa59I4UG18Erb4HRHU0VjNcEXfwKOrt6W-ZhwlmDBXAnfxpsVeJ3hN5_ab17KBuWMU3LKVA-dI_eMQzn9JAbF5K4L4pq34ECzxEjC2bjnkKzCS2HHXzEW3Ipi6SrFRlTjB5P5GmJQboh7r2Yd3Ri8HFJiuOQr89WOIiQAmnf7oP_hqVEwU1_euLQ1KnXBFTTuHlObalyHyZbDvSEGtg9I1tWz0Ch5BvaO0wX7uDA6XtNbr6nprlevD-BxUYKP8O-JcDJjsIT4Zma0bH77O1HEfjTCd73foPzs739PXkgTZ6CRo-cuaWEpuRp3sn8gmkQgeZi8SkGe82KfDmOJp1iiTNkQ5b6WENYoVdM56VyjLTylWlO_69Rc1Els0uUligQ_DDFE1KozSeFo7p88KVKy-8NAQz2P3WXTcNBVUAAAAD6pwBpE972U5565moUxfFEoqV7mOrL3ohc8vmPSNQlNQYP-jN5HaVww9EuHgxMaAhYqVEahXxIOHYocAHTcERA",
		"Version": 0
	}],
	"IsValid": true
}
```
