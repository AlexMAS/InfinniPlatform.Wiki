---
layout: doc
title: "GetDocumentById"
position: 1
categories: 
tags:
---

Получение существующего документа из хранилища по идентификатору

## Description
Предоставляет метод для получения существующего документа из хранилища по указанному идентификатору
При получении документов следует учитывать [особенности работы со ссылками на другие документы](../../Advanced Topics/resolve) и
[существующие ограничения, касающиеся рекурсивных ссылок на документы](../../Advanced Topics/recursiveLink).

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<version>/<application>/<documentType>/<documentUid>
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

Идентификатор приложения.

`documentType`

Тип документа

`documentUid`

Идентификатор документа для поиска

# Example

Пример запроса документов:

```js
GET http://localhost:9900/1/gameshop/catalogue/c19eac95-1f52-4ec2-8ae2-df4ee203d693 
```

Пример результата запроса документа по идентификатору:

```js
HTTP/1.1 200 OK
Content-Length: 186
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Wed, 24 Jun 2015 04:40:37 GMT

{
	"Name": "Bioshock:Infinite",
	"Price": 1499,
	"Id": "c19eac95-1f52-4ec2-8ae2-df4ee203d693",
	"__ConfigId": "gameshop",
	"__DocumentId": "catalogue",
	"TimeStamp": "2015-06-24T09:40:37.066598+05:00"
}
```
