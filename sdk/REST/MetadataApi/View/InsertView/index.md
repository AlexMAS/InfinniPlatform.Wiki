---
layout: doc
title: "InsertView"
position: 3
categories: 
tags:
---

## Method 

PUT


## Description
Предоставляет возможность сохранения нового представления в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

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
PUT http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/View

BODY 

{
  "Id": "16700b90-cf16-41a4-ad1d-a057d0c846d1",
  "Name": "View1_v1",
  "MetadataType": "EditView",
  "Text": "View",
  "LayoutPanel": {
  },
  "DataSources": [],
  "ChildViews": [],
  "Scripts": []
}
```

При успешном выполнении запроса возвращается статус 200 ОК
