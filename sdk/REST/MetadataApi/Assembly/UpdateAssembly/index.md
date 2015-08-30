---
layout: doc
title: "UpdateAssembly"
position: 14
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность сохранения существующей сборки в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных сборки.
Существующая сборка будет обновлена. В случае, если сборки с таким идентификатором не существует,
создается новая сборка.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configuration>/<metadataType>
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

## Example


Пример запроса метаданных:

```js
http://localhost:9900/1/metadata/2.0.0.0/TestConfigVersion/Assembly 

BODY

{
  "Id": "9d563d33-1f86-4ab0-9697-7a0cb72ce320",
  "Version": "2.0.0.0",
  "Name": "Assembly1_v1",
  "Caption": "",
  "Description": ""
}
```

В результате успешного выполнения запроса возвращается статус 200 ОК
