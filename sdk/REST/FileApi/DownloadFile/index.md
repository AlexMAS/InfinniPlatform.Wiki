---
layout: doc
title: "DownloadFile"
position: 1 
categories: 
tags:
---

# Description
Предоставляет возможность выгрузки бинарных данных с сервера с указанием связанного с ними
поля ссылки документа. 
ВНИМАНИЕ! Запрос должен выполняться в синхронном режиме

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/<application>/Files/Download/?Form=<formData>
```

# Verb Type

GET

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

Идентификатор приложения

`formData`

Содержит информацию о загружаемом бинарном контенте в виде сериализованного в строку
JSON - документа следующего формата

{
   ContentId : <contentId>,
}


`ContentId`

Идентификатор бинарного контента, который требуется загрузить


# Example

Пример запроса на получение данных

```js
GET http: //localhost:9900/1/Gameshop/files/download/?Form={"ContentId":"eb851504-77d6-4195-b118-b31b338fe4b1"}
```

Пример ответа на запрос присоединения бинарных данных

```js
HTTP/1.1 200 OK
Content-Length: 30367
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Thu, 25 Jun 2015 05:39:23 GMT

{
   "Content":"GIF89ad\u0000d\u0000 \u0000\u0000            		... "
}
```