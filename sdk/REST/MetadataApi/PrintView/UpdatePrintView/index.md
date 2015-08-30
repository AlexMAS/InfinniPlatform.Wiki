---
layout: doc
title: "UpdatePrintView"
position: 4
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность изменения существующего печатного представления в хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.
Существующие метаданные печатного представления будут обновлены. В случае, если печатного представления с таким идентификатором не существует,
создается новое печатное представление.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/PrintView/
```

### Parameters

`printViewMetadata`

Объект метаданных печатного представления

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configuration`

Наименование конфигурации

`document`

Наименование документа, к которому относится печатное представление

## Example


Пример запроса метаданных:

```js

POST http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/PrintView

{
  "Id": "ae7b62d1-ab0d-4920-866e-7c7c7cf6d5a1",
  "Name": "View1_v1",
  "ViewType": null,
  "Blocks": null,
  "Source": null
}
```

В результате успешного выполнения запроса возвращается статус 200 ОК
