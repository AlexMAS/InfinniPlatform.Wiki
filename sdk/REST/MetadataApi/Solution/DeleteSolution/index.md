---
layout: doc
title: "DeleteSolution"
position: 5
categories: 
tags:
---

Удалить метаданные существующего решения 

## Method 

DELETE

## Description
Предоставляет возможность удаления метаданных существующего решения в хранилище.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/solution/<version>/<solutionName>
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

`version`

Версия решения

`solutionName`

НАименование solution

## Example

Пример запроса документов:

```js
DELETE http://localhost:9900/1/metadata/solution/2.0.0.0/NewSolution
```

В результате успешного выполнения запроса возвращается статус 200 OK