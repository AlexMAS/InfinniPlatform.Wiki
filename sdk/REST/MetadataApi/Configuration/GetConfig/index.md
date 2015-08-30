---
layout: doc
title: "GetConfig"
position: 3
categories: 
tags:
---

##Method

GET

## Description
Предоставляет возможность получения существующего экземпляра конфигурации метаданных из хранилища.


## Syntax
```csharp
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/configuration/<version>/<configName>
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

`configName`

Наименование объекта конфигурации

## Example

Пример запроса документов:

```csharp
GET http://localhost:9900/1/metadata/configuration/2.0.0.0/TestConfigVersion 
```

Результат выполнения запроса:

```js
{
  "Id": "9a5e2aa4-bf9f-48f4-a166-dd96b2f6eafc",
  "Name": "TestConfigVersion",
  "Caption": "NewConfig",
  "Description": "NewConfig",
  "Version": "2.0.0.0",
  "Menu": [],
  "Documents": [
    {
      "Id": "a03bf2ba-3209-485c-8a0f-e98f7e949f7e",
      "Name": "Common",
      "Caption": "Common options",
      "Description": "Common options"
    },
    {
      "Id": "ba432572-8cd6-4f10-8928-695d5afd52a5",
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
}
```
