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
<serverScheme>://<serverName>:<serverPort>/<version>/<application>/Files/Download/?Form=<formData>
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

`version`

Версия приложения.

`application`

Идентификатор приложения

`formData`

Содержит информацию о загружаемом бинарном контенте в виде сериализованного в строку
JSON - документа следующего формата

```js
{
   Application : <application>,
   DocumentType : <documentType>,
   InstanceId : <instanceId>,
   FieldName : <fieldName>
}
```

`application`

Приложение, к которому относится документ, содержащий бинарный контент

`documentType`

Тип документа, к которому относится экземпляр документа, содержащего бинарный контент

`instanceId`

Экземпляр документа, содержащего бинарный контент

`fieldName`

Наименование поля, содержащего бинарный контент


# Example

Пример запроса на присоединение данных

```js
GET http: //localhost:9900/1/Gameshop/files/download/?Form={"Application":"Gameshop","DocumentType":"UserProfile","InstanceId":"eb851504-77d6-4195-b118-b31b338fe4b1","FieldName":"Avatar"}
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