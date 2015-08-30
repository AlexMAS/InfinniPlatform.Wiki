---
layout: doc
title: "CreateRegister"
position: 0
categories: 
tags:
---

Создать новый шаблон метаданных регистра

## Method 

POST

## Description
Предоставляет возможность получения шаблона для создания нового экземпляра регистра.
При этом получаемый экземпляр имеет инициализированные по умолчанию необходимые поля метаданных

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<configName>/register
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

## Example

Пример запроса:

```js
POST http://localhost:9900/1/metadata/2.0.0.0/NewSolution/Register
```

Пример результата запроса на создание метаданных:

```js

{
  "Id": "011d28a2-1421-4f0c-ac1b-f915172dc205",
  "Version": "2.0.0.0",
  "Name": "",
  "Caption": "",
  "Description": ""
}
```
