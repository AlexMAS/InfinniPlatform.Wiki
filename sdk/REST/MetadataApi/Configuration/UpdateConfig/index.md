---
layout: doc
title: "UpdateConfig"
position: 8
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность обновления существующего экземпляра конфигурации метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/configuration
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

## Example

Пример запроса:

```js
POST http://localhost:9900/1/metadata/configuration 

BODY 

{
  "Name": "TestConfigVersion_1",
  "Caption": "NewConfig",
  "Description": "NewConfig",
  "Menu": [],
  "Documents": [],
  "Registers": [],
  "Assemblies": [],
  "Reports": [],
  "Id": "9a5e2aa4-bf9f-48f4-a166-dd96b2f6eafc",
  "Version": "2.0.0.0"
}
```

При успешном обновлении существующей конфигурации возвращается 200 ОК:

