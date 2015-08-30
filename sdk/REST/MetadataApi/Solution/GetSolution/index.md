---
layout: doc
title: "GetSolution"
position: 3
categories: 
tags:
---

Получить метаданные существующего решения 

## Method 

GET

## Description
Предоставляет возможность получения метаданных существующего решения в хранилище.
Поиск существующего решения выполняется по полю Name.

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

Наименование решения

## Example

Пример запроса документов:

```js
GET http://localhost:9900/1/metadata/solution/2.0.0.0/NewSolution
```

Результат выполнения запроса:

```js
{
  "Name": "NewSolution",
  "Caption": "NewSolution",
  "ReferencedConfigurations": []
}
```
