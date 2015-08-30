---
layout: doc
title: "GetPrintView"
position: 1
categories: 
tags:
---

## Method

GET

## Description
Предоставляет возможность чтения существующего пользовательского представления из хранилища.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/PrintView/<printViewName>
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

`printViewName`

Наименование печатной формы

## Example


Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/PrintView/PrintView1
```

Пример результата запроса:

```js

{
  "Id": "ae7b62d1-ab0d-4920-866e-7c7c7cf6d5a1",
  "Secured": true,
  "Name": "PrintView1",
  "ParentId": "d597e981-c14e-4f10-8985-53ed2de0e429",
  "Version": "2.0.0.0",
  "__ConfigId": "systemconfig",
  "__DocumentId": "printviewmetadata"
}
```
