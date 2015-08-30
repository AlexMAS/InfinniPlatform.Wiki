---
layout: doc
title: "GetPrintViewList"
position: 2
categories: 
tags:
---

## Method 

GET

## Description
Предоставляет возможность чтения списка существующих в конфигурации печатных представлений.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/PrintView/List
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
GET http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/PrintView/List
```

Пример результата запроса:

```js
[
	{
	  "Id": "7442c7e6-826f-4b84-907a-28fd9e8e937b",
	  "Version": "2.0.0.0",
	  "Name": "TestPrintView1",
	},
	{
		...
	}
]
```
