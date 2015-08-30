---
layout: doc
title: "GetView"
position: 1
categories: 
tags:
---

## Method

GET

## Description
Предоставляет возможность чтения существующего представления из хранилища.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/View/<ViewName>
```

### Parameters

`route` 

Указание на роутинг сервера в составе кластера

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование документа, к которому относится представление

`ViewName`

Наименование печатной формы

## Example


Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/View/View1
```

Пример результата запроса:

```js
{
  "Id": "16700b90-cf16-41a4-ad1d-a057d0c846d1",
  "Secured": true,
  "Name": "View1",
  "DataSources": [],
  "ChildViews": [],
  "Scripts": [],
  "ParentId": "85819c33-10d7-460d-a0a9-37bc295e9d7d",
  "Version": "2.0.0.0",
  "__ConfigId": "systemconfig",
  "__DocumentId": "viewmetadata"
}
```
