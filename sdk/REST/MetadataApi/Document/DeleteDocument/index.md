---
layout: doc
title: "DeleteDocument"
position: 2
categories: 
tags:
---

Удалить экземпляр метаданных документа из хранилища метаданных

## Method 

DELETE

## Description
Предоставляет возможность получения экземпляра документа из хранилища метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<configName>/document/<documentName>
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

`configName`

Наименование конфигурации

`<documentName>`

Наименование документа

## Example

Пример запроса:

```js
DELETE http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document/TestDocument 
```

В результате успешного выполнения запроса возвращается статус 200 ОК

