---
layout: doc
title: "InsertPrintView"
position: 3
categories: 
tags:
---

## Method 

PUT


## Description
Предоставляет возможность сохранения нового печатного представления в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/PrintView/
```

### Parameters

`route` 

Указание на роутинг сервера в составе кластера

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации

`documentName`

Наименование документа, к которому относится печатное представление

## Example

Пример запроса метаданных:

```js
PUT http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/PrintView

BODY 

{
  "Id": "ae7b62d1-ab0d-4920-866e-7c7c7cf6d5a1",
  "Name": "PrintView1",
  "ViewType": null,
  "Blocks": null,
  "Source": null
}
```

При успешном выполнении запроса возвращается статус 200 ОК
