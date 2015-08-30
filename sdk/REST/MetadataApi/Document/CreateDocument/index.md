---
layout: doc
title: "CreateDocument"
position: 0
categories: 
tags:
---

Создать новый шаблон метаданных документа

## Method 

POST

## Description
Предоставляет возможность получения шаблона для создания нового экземпляра документа.
При этом получаемый экземпляр имеет инициализированные по умолчанию необходимые поля метаданных

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<configName>/document
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
POST http://localhost:9900/1/metadata/2.0.0.0/NewSolution/Document 
```

Пример результата запроса на создание метаданных:

```js

{
  "Id": "138c3a29-e09e-4c94-b1aa-0df1f7397caa",
  "Name": "",
  "Caption": "",
  "Description": "",
  "Versioning": 2,
  "Version": "2.0.0.0",
  "MetadataIndex": "",
  "Services": [],
  "Processes": [],
  "Scenarios": [],
  "Generators": [],
  "Views": [],
  "PrintViews": [],
  "ValidationWarnings": [],
  "ValidationErrors": []
}
```
