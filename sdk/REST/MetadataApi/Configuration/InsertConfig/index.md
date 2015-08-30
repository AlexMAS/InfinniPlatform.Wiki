---
layout: doc
title: "InsertConfig"
position: 1
categories: 
tags:
---

## Method

PUT

## Description
Предоставляет возможность сохранения нового экземпляра конфигурации метаданных в хранилище.
При сохранении не производится никаких действий, изменяющих состояние сохраняемого объекта конфигурации

## Syntax
```js
<serverScheme>://<serverName>:<serverPort>/<route>/metadata/configuration
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

```js
PUT http://localhost:9900/1/metadata/configuration 
```

При успешном обновлении существующей конфигурации возвращается 200 ОК: