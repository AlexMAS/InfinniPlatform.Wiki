---
layout: doc
title: "CreateSolution"
position: 0
categories: 
tags:
---

Создать новый шаблон метаданных решения

## Method 

POST

## Description
Предоставляет возможность получения шаблона для создания нового экземпляра решения.
При этом получаемый экземпляр имеет инициализированные по умолчанию необходимые поля метаданных

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/solution
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

## Example

Пример запроса документов:

```csharp
POST http://localhost:9900/1/metadata/solution 
```

Пример результата запроса на создание метаданных нового решения:

```js
{
  "Name": "NewSolution",
  "Caption": "NewSolution",
  "ReferencedConfigurations": []
}
```
