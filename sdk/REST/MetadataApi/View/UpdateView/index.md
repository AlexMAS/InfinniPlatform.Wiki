---
layout: doc
title: "UpdateView"
position: 4
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность изменения существующего представления в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные представления будут обновлены. В случае, если представления с таким идентификатором не существует,
создается новое представление.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/View/
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

POST http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/View

{
  "Id": "16700b90-cf16-41a4-ad1d-a057d0c846d1",
  "Name": "View1_v1",
  "MetadataType": "ListView",
  "Text": "Some Text",
  "LayoutPanel": {
  },
  "DataSources": [],
  "ChildViews": [],
  "Scripts": []
}
```

В результате успешного выполнения запроса возвращается статус 200 ОК
