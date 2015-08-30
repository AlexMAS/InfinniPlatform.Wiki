---
layout: doc
title: "CreateMenu"
position: 11
categories: 
tags:
---

## Description
Предоставляет возможность создания шаблона нового меню проекта.
ПОлученный шаблон будет инциализирован значениями по умолчанию для всех обязательных полей

## Method

POST

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configuration>/menu
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


## Example

Пример запроса метаданных:

```js
POST http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Menu
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
