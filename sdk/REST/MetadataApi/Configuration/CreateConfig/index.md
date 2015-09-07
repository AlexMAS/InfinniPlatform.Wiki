---
layout: doc
title: "CreateConfig"
position: 0
categories: 
tags:
---

## Method

POST

## Description
Предоставляет возможность создания шаблона пустого экземпляра новой конфигурации (нового приложения).
Полученный шаблон конфигурации содержит все обязательные поля объекта метаданных, инициализированные
значениями по умолчанию

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/configuration/
```

## Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, 'demo.somedomain.ru').

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

## Example

Пример запроса документов:

```csharp
POST http://localhost:9900/1/metadata/configuration 
```

Пример результата запроса щаблона новой конфигурации:

```js
{
  "Name": "NewConfig",
  "Caption": "NewConfig",
  "Description": "NewConfig",
  "Menu": [],
  "Documents": [],
  "Registers": [],
  "Assemblies": [],
  "Reports": []
}
```
