---
layout: doc
title: "InsertSolution"
position: 1
categories: 
tags:
---

Добавить метаданные нового решения 

## Method

PUT

## Description
Предоставляет возможность добавления новых метаданных решения в хранилище.
При этом получаемый экземпляр не будет никаким образом инициализирован.
Для получения инициализированного шаблона решения необходимо вызвать метод
CreateSolution.
Внимание! Поле Name решения должно быть уникальным

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/solution/
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

PUT http://localhost:9900/1/metadata/solution 

```js
{
  "Name": "NewSolution",
  "Caption": "NewSolution",
  "ReferencedConfigurations": [],
  "Id": "c62df9b7-4030-433b-91d3-9e7bb658a261",
  "Version": "2.0.0.0"
}
```

В случае успешного выполнения запроса возвращается статус: 200 OK
