---
layout: doc
title: "GetValuesByDate"
position: 0
categories: 
tags:
---

# Description
Предоставляет возможность получения данных из регистра на указанную дату

# URL
```js
<serverScheme>://<serverName>:<serverPort>/<route>/SystemConfig/metadata/GetRegisterValuesByDate
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
POST http://localhost:9900/1/SystemConfig/metadata/GetRegisterValuesByDate 

BODY

{
  "Configuration": "PTA",
  "Register": "FundsMovement",
  "Date": "2015-08-30T18:14:14.4092361+05:00",
  "Dimensions": [
    "Category"
  ],
  "ValueProperties": [
    "Price"
  ],
  "ValueAggregationTypes": [
    1
  ],
  "Filter": null
}
```
