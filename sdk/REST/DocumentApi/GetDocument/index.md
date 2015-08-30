---
layout: doc
title: "GetDocument"
position: 0
categories: 
tags:
---

## Description
Предоставляет метод для чтения документов из хранилища с возможностью фильтрации и постраничного 
получения данных.
При получении документов следует учитывать [особенности работы со ссылками на другие документы](../../Advanced Topics/resolve) и
[существующие ограничения, касающиеся рекурсивных ссылок на документы](../../Advanced Topics/recursiveLink).

## URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/<application>/<documentType>/?filter=<filter>
	&pageNumber=<pageNumber>&pageSize=<pageSize>&sorting=<sorting>
```

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, 'demo.somedomain.ru').

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

`version`

Версия приложения.

`application`

Идентификатор приложения

`documentType`

Идентификатор типа документа

`filter`

Фильтр документов

`pageNumber`

Номер страницы данных

`pageSize`

Размер страницы данных

`sorting`

Настройки сортировки данных

## Example

Пример запроса документов:

```js
GET http: //localhost:9900/1/gameshop/catalogue/?filter=Name IsContains gta&pageNumber=0&pageSize=100&sorting=Price descending
```

Пример результата запроса документов:

```js
[{
	"Name": "gta V ultimate edition",
	"Price": 2000,
	"Availability": {
		"Available": true
	},
	"Id": "a6235155-56a1-413e-9828-39fc30904dfc",
	"TimeStamp": "2015-06-23T11:06:00.9428696+05:00",
	"__ConfigId":"gameshop",
	"__DocumentId":"catalogue"	
},
{
	"Name": "gta vice city",
	"Price": 100.5,
	"Id": "39d52900-727a-4419-97dc-a5db9fdd8cdb",
	"TimeStamp": "2015-06-23T11:06:00.3808374+05:00",
	"__ConfigId":"gameshop",
	"__DocumentId":"catalogue"
}]
```
