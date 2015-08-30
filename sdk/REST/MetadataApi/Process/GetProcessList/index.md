---
layout: doc
title: "GetProcessList"
position: 2
categories: 
tags:
---

## Method 

GET

## Description
Предоставляет возможность чтения списка существующих в конфигурации бизнес-процессов.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Process/List
```

### Parameters

`route` 

Указание на роутинг сервера в составе кластера

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование документа, к которому относится бизнес-процесс


## Example


Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Process/List
```

Пример результата запроса:

```js
[
  {
    "Id": "dbc5bb3f-54a8-4aae-be1c-239f1fde53bb",
    "Name": "Process1_v1",
    "Caption": ""
  }
]
```
