---
layout: doc
title: "GetAssembly"
position: 13
categories: 
tags:
---

## Description
Предоставляет возможность чтения существующей сборки из хранилища.

## Method

GET

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configuration>/<metadataType>/<metadataName>
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

`metadataType`

Тип метаданных (Assembly)

`metadataName`

Наименование конкретной сборки

## Example


Пример запроса метаданных:

```js
http://localhost:9900/1/metadata/2.0.0.0/TestConfigVersion/Assembly/Assembly1 
```

Пример результата запроса:

```js
{
  "Id": "9d563d33-1f86-4ab0-9697-7a0cb72ce320",
  "Secured": true,
  "Version": "2.0.0.0",
  "Name": "Assembly1",
  "Caption": "",
  "Description": "",
  "ParentId": "TestConfigVersion",
  "__ConfigId": "systemconfig",
  "__DocumentId": "assemblymetadata"
}
```
