---
layout: doc
title: "ExecuteAction"
position:  
categories: 
tags:
---

# Description
Предоставляет возможность вызова пользовательского сервиса.

# URL

```js
<serverScheme>://<serverName>:<serverPort>/<version>/SignOut
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

# Body

Тело запроса содержит JSON - объект, предоставляющий информацию произвольной структуры,
которое может быть проанализировано в пользовательском обработчике, установленном в конфигурации
приложения. 
В пользовательском обработчике данный объект, передаваемый в теле запроса, доступен в 
свойстве контекста Item. 

# Example

Пример запроса выполнение действия пользовательского сервиса

```js
POST http://localhost:9900/1/Gameshop/Review/Like

body

{
  "DocumentId": "c80028ec-3971-4d1e-914c-9d7b1d6bed87"
}
```

Пример ответа на запрос выполнения действия пользовательского сервиса

```js
HTTP/1.1 200 OK
Content-Length: 100
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Thu, 25 Jun 2015 10:13:19 GMT

{
	"Id":"9e119b00-b2e6-426f-af4e-1e1a23e2ea27",
	"DocumentId":"c80028ec-3971-4d1e-914c-9d7b1d6bed87"
}
```

Ответ на запрос выполнения действий пользовательского сервиса по умолчанию 
(если в обработчика сервиса не указано иное) возвращает тело запроса с добавленным
полем Id, содержащим идентификатор выполненного запроса к пользовательскому сервису.

