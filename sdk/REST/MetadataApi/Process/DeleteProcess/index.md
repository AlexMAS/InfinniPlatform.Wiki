---
layout: doc
title: "DeleteProcess"
position: 5
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующих метаданных бизнес-процесса.


## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Process/<ProcessName>
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

`ProcessName`

Наименование бизнес-процесса

## Example

Пример запроса метаданных:

```js
DELETE http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Process/Process1
```

При успешном выполнении запроса возвращается статус 200 ОК
