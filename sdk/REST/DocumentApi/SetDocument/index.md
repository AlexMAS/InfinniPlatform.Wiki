---
layout: doc
title: "SetDocument"
position: 0
categories: 
tags:
---

# Description
Определяет метод сохранения документов в постоянное хранилище. Сохранение документов осуществляется,
учитывая схему документа, описанную в приложении при его создании или изменении. Для каждой версии
метаданных документов приложения существует собственная версия схемы данных. Каждый сохраняемый документ
должен соответствовать одной из ранее созданных версий метаданных этого документа. 
При сохранении документа соблюдаются [следующие правила проверки типов данных изменяемых полей]
(../../Advanced Topics/dataTypeChecking)

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/<application>/<documentType>/<documentUid>
```

# Verb Type

PUT


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

Идентификатор документа

# Example

Пример сохранения документа:

```js
PUT http://localhost:9900/1/gameshop/catalogue/c6ea3b2c-9ee8-48ca-b169-c5b0224003d1

body:

{
  "Name": "gta vice city",
  "Price": 100.5
}
```

Пример результата сохранения:

```js
HTTP/1.1 200 OK
Content-Length: 114
Content-Type: application/json
Server: Microsoft-HTTPAPI/2.0
Date: Tue, 23 Jun 2015 09:53:40 GMT

{
	"IsValid": true,
	"ValidationMessage": "Document successfully saved.",
	"Id": "c6ea3b2c-9ee8-48ca-b169-c5b0224003d1"
}
```
где Id - идентификатор измененного документа