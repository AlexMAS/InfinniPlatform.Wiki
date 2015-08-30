---
layout: doc
title: "GetSolutionList"
position: 4
categories: 
tags:
---

Получить список метаданных существующих решений

## Method 

GET

## Description
Предоставляет возможность получения списка метаданных существующих решений в хранилище.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/solution/
```

### Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, 'demo.somedomain.ru').

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

## Example

Пример запроса списка решений:

```js
GET http://localhost:9900/1/metadata/solution 
```

Результат выполнения запроса:

```js
[
	{
	  "Name": "NewSolution",
	  "Caption": "NewSolution",
	  "ReferencedConfigurations": []
	}
]
```
