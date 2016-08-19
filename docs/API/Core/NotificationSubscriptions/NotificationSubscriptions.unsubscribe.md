---
layout: doc
title: "NotificationSubscriptions.unsubscribe"
position: 2
---

Отписывает от сообщений по заданому ключу и контексту.

# Description

Отписывает от сообщений по заданому ключу и контексту, в случае если контекст не передается, происходит отмена всех подписок по заданому ключу.

# Syntax

```js
NotificationSubscriptions.unsubscribe(routingKey[, context])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|routingKey|`String`|Ключ подписки.|
|context|[контекст представления](../../ViewContext/)|[Контекст представления](../../ViewContext/).|

# Examples

```js
NotificationSubscriptions.unsubscribe('myRoutingKey', this);
```

# See Also

* [`subscribe()`](../NotificationSubscriptions.subscribe/)
* [`startConnection()`](../NotificationSubscriptions.startConnection/)
* [`stopConnection()`](../NotificationSubscriptions.stopConnection/)
