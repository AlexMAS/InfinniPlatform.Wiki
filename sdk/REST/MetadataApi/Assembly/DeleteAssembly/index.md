---
layout: doc
title: "DeleteAssembly"
position: 13
categories: 
tags:
---

## Method

DELETE

## Description

Предоставляет возможность удаления метаданных сборки.

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

Наименование удаляемой сборки

## Example

Пример запроса метаданных:

```js
http://localhost:9900/1/metadata/2.0.0.0/TestConfigVersion/Assembly/Assembly1 
```

При успешном выполнении запроса возвращается статус 200 ОК
