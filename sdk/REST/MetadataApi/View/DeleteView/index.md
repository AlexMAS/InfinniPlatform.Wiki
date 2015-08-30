---
layout: doc
title: "DeleteView"
position: 5
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующих метаданных представления.


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

Наименование представления

## Example

Пример запроса метаданных:

```js
DELETE http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/View/View1
```

При успешном выполнении запроса возвращается статус 200 ОК
