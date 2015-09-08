---
layout: doc
title: "GetIrrelevantVersions"
position: 0
categories: 
tags:
---

# Description
Предоставляет возможность получения списка неактуальных версий конфигураций для указанного пользователя

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/Administration/Version/<userName>
```

# Method 

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

`userName`

Логин пользователя, для которого требуется получить список неактуальных версий

# Example

Пример получения списка неактуальных версий конфигураций для пользователя

```js
GET http://localhost:9900/1/Administration/Version/Admin 
```

Пример ответа:

```js
[
	{ 
		"ConfigId" : "PTA",
		"Version" : "2.0.0.1"
	},
	{
		...
	}
]
```
