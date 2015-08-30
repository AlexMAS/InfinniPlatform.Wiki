---
layout: doc
title: "InsertProcess"
position: 3
categories: 
tags:
---

## Method 

PUT


## Description
Предоставляет возможность сохранения нового бизнес-процесса в постоянное хранилище.
При этом не происходит никакой дополнительной обработки сохраняемых метаданных.

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Process/
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
PUT http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Process

BODY 

{
  "Id": "dbc5bb3f-54a8-4aae-be1c-239f1fde53bb",
  "Version": "2.0.0.0",
  "Name": "Process1",
  "Caption": "",
  "Description": "",
  "SettingsType": "Default",
  "Type": 1
}
```

При успешном выполнении запроса возвращается статус 200 ОК
