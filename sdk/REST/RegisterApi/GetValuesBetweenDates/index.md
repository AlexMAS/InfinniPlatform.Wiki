---
layout: doc
title: "GetValuesBetweenDates"
position: 0
categories: 
tags:
---

# Description
Предоставляет возможность получения данных из регистра за указанный период дат

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/SystemConfig/metadata/GetValuesBetweenDates
```

# Method 

POST

# Parameters

`serverScheme`

Серверный протокол (HTTP/HTTPS).

`serverName`

Наименование сервера (например: localhost, demo.somedomain.ru).

`serverPort`

Порт сервера.

`route` 

Указание на роутинг сервера в составе кластера

# Example

Пример получения данных из регистра

```js
POST http://localhost:9900/1/SystemConfig/metadata/GetValuesBetweenDates

BODY

{
  "Configuration": "PTA",
  "Register": "FundsMovement",
  "FromDate": "2015-08-10T18:16:21.8915276+05:00",
  "ToDate": "2015-08-30T18:16:21.8915276+05:00",
  "Dimensions": [
    "Category"
  ],
  "ValueProperties": [
    "Price"
  ],
  "ValueAggregationTypes": [
    1
  ],
  "Filter": [
    "Category IsEquals ParentDebt"
  ]
}
```
