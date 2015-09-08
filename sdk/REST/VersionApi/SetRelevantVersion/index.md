---
layout: doc
title: "SetRelevantVersion"
position: 0
categories: 
tags:
---

# Description
Предоставляет возможность установки указанной версии конфигурации указанному пользователю системы

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/Administration/Version/<userName>
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

`userName`

Логин пользователя, для которого требуется получить список неактуальных версий

# Example

Пример получения списка неактуальных версий конфигураций для пользователя

```js
POST http://localhost:9900/1/Administration/Version/Admin 

BODY:

{
  "ConfigurationId": "TestConfig",
  "Version": "4.1",
  "UserName": "Admin"
}

```

При успешной обработке запроса возвращается статус 200 ОК
