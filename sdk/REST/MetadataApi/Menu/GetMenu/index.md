---
layout: doc
title: "GetMenu"
position: 13
categories: 
tags:
---

## Description
Предоставляет возможность чтения существующего меню из хранилища.

## Method

GET

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configuration>/Menu/<metadataName>
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

Версия приложения.

`configuration`

Приложение (конфигурация)

`metadataName`

Наименование конкретного меню

## Example


Пример запроса метаданных:

```js
http://localhost:9900/1/metadata/2.0.0.0/TestConfigVersion/Menu/Menu1 
```

Пример результата запроса:

```js
{
  "Id": "81b717d5-4a58-47c7-b475-fac1a79c2f69",
  "Secured": true,
  "Version": "2.0.0.0",
  "Name": "Menu1",
  "Caption": "",
  "Description": "",
  "ParentId": "TestConfigVersion",
  "__ConfigId": "systemconfig",
  "__DocumentId": "menumetadata"
}
```
