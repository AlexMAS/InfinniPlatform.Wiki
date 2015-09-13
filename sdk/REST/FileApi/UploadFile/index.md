---
layout: doc
title: "UploadFile"
position: 0 
categories: 
tags:
---

# Description
Предоставляет возможность загрузки бинарных данных на сервер с указанием связанного с ними
поля ссылки документа.
ВНИМАНИЕ! Запрос выполняется в синхронном режиме

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/<application>/Files/Upload/?linkedData=<linkedData>
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

`linkedData`

Описание бинарных данных в виде сериализованного в строку JSON-документа следующего формата


{  
   InstanceId : <instanceId>,
   FieldName : <fieldName>,
   FileName : <fileName>,
   SessionId : <sessionId>
}


`instanceId` 

идентификатор документа, к которому относится загружаемый бинарный контент

`fieldName`

Наименование поля, которое содержит ссылку на загружаемый бинарный контент

`fileName`

Наименование файла, под которым был добавлен загруженный бинарный контент

`sessionId`

Идентификатор сессии (в данном случае не заполняется)


# Body
В теле запроса содержатся бинарные данные для присоединения к документу

# Example

Пример запроса на присоединение данных

```js
POST http://localhost:9900/1/Gameshop/files/upload/?linkedData={"InstanceId":"eb851504-77d6-4195-b118-b31b338fe4b1","FieldName":"Avatar","FileName":"avatar.gif","SessionId":null}

Accept: application/json, application/xml, text/json, text/x-json, text/javascript, text/xml
User-Agent: RestSharp/104.4.0.0
Host: 10.0.0.45:9900
Content-Type: multipart/form-data; boundary=-----------------------------28947758029299
Content-Length: 10426
Accept-Encoding: gzip, deflate

-------------------------------28947758029299
Content-Disposition: form-data; name="avatar.gif"; filename="avatar.gif"
Content-Type: multipart/form-data

<далее следуют бинарные данные>
```

Пример ответа на запрос присоединения бинарных данных

```js
HTTP/1.1 200 OK
Content-Length: 80
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Thu, 25 Jun 2015 05:39:23 GMT

{
	"IsValid": true,
	"ValidationMessage": "Document content successfully uploaded"
}
```