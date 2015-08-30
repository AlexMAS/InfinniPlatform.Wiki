---
layout: doc
title: "GetViewList"
position: 2
categories: 
tags:
---

## Method 

GET

## Description
Предоставляет возможность чтения списка существующих в конфигурации представлений.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/View/List
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


## Example


Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/View/List
```

Пример результата запроса:

```js
[
  {
    "Id": "16700b90-cf16-41a4-ad1d-a057d0c846d1",
    "Name": "View1_v1"
  }
]
```
