---
layout: doc
title: "GetConfigList"
position: 10
categories: 
tags:
---

## Method

GET

## Description
Предоставляет возможность получения списка всех существующих экземпляров конфигурации 
метаданных из хранилища.


## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/configuration
```

## Example

Пример запроса метаданных:

```js
GET http://localhost:9900/1/metadata/configuration 
```

### Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, 'demo.somedomain.ru').

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

Результат выполнения запроса:

```js
[
	{
	  "Id": "5011f3a7-2fa6-4c00-9fd1-96c9b14d2698",
	  "Name": "TestConfigVersion,
	  "Caption": "TestConfigVersion",
	  "Description": "TestConfigVersion",
	  "Version": "1.0.0.0",
	  "Menu": [],
	  "Documents": [
		{
		  "Id": "94894e62-019d-4426-bb9e-56e8f9dd7518",
		  "Name": "Common",
		  "Caption": "Common options",
		  "Description": "Common options"
		},
		{
		  "Id": "48f15683-ad44-4691-bbd9-4c42279a13ab",
		  "Name": "TestConfigVersion_Registers",
		  "Caption": "Registers common options",
		  "Description": "Storage for register's common information (e.g. actual date)"
		}
	  ],
	  "Registers": [],
	  "Assemblies": [],
	  "Reports": [],
	  "__ConfigId": "systemconfig",
	  "__DocumentId": "metadata"
	},
	{
		...
	}
]
```
