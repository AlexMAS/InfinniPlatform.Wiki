---
layout: doc
title: "CreateAssembly"
position: 11
categories: 
tags:
---

## Description
Предоставляет возможность создания шаблона новой сборки проекта.
ПОлученный шаблон будет инциализирован значениями по умолчанию для всех обязательных полей

## Method

POST

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configuration>/<metadataType>
```

## Parameters

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
POST http://localhost:9900/1/metadata/2.0.0.0/TestConfigVersion_f01708ba-35c3-4d13-9d16-09ee3ca4004c/Assembly
```

Результат выполнения запроса:

```js
{
  "Id": "4dbef3a6-15ad-47f1-b9f6-e32c23ab9458",
  "Version": "2.0.0.0",
  "Name": "",
  "Caption": "",
  "Description": ""
}
```
