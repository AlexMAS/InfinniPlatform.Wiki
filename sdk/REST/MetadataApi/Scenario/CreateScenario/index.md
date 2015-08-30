---
layout: doc
title: "CreateScenario"
position: 0
categories: 
tags:
---

## Method
POST

## Description
Предоставляет возможность создания шаблона нового пользовательского сценария конфигурации.
ПОлученный шаблон будет инциализирован значениями по умолчанию для всех обязательных полей

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/<version>/<configName>/<documentName>/Scenario
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
POST http://localhost:9900/1/metadata/2.0.0.0/NewConfig/Document1/Scenario 
```

Результат выполнения запроса:

```js
	{
	  "Id": "c2a00771-3ded-428d-8d1d-680aa672e394",
	  "Version": "1.0.0.0",
	  "Name": "",
	  "Caption": "",
	  "Description": ""
	}
```
