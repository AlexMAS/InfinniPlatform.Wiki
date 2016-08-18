---
layout: doc
title: "NotificationSubscriptions.subscribe"
position: 1
---

Подписывает на сообщения по заданому ключу.

# Description

Для подписки на сообщение необходимо передать два параметра: ключ и указатель на функцию обработчика сообщения, а так же есть 3й необязательный параметр: контекст. При появлении сообщения с заданным ключем NotificationSubscriptions вызовет данный обработчик сообщения, передав ему два параметра: `context` и `args`. В параметре `context` передается [контекст представления](../../ViewContext/), в рамках которого была осуществлена подписка; в параметре `args.message` - полученное сообщение.

В общем случае порядок регистрации обработчиков сообщений никак не связан с порядком их вызова.
Последнее значит, что между обработчиками сообщений не должно быть функциональной зависимости.

# Syntax

```js
NotificationSubscriptions.subscribe(routingKey, callback[, context])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|routingKey|`String`|Ключ подписки.|
|callback|[Обработчик сообщения](../../Script)|[Обработчик сообщения](../../Script).|
|context|[контекст представления](../../ViewContext/)|[Контекст представления](../../ViewContext/).|

# Examples

```js
NotificationSubscriptions.subscribe('myRoutingKey', function(context, args) { alert(args.message); }, this);
```

# See Also

* [`unsubscribe()`](../NotificationSubscriptions.unsubscribe/)
* [`startConnection()`](../NotificationSubscriptions.startConnection/)
* [`stopConnection()`](../NotificationSubscriptions.stopConnection/)
