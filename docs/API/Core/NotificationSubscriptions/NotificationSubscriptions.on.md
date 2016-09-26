---
layout: doc
title: "NotificationSubscriptions.on"
position: 3
---

Подписка на события signalR.

# Syntax

```js
NotificationSubscriptions.on(eventName, callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|eventName|`String`|Имя события на которое необходимо подписаться, полный перечень можно найти в [документации к signalR](http://www.asp.net/signalr/overview/guide-to-the-api/hubs-api-guide-javascript-client)|
|callback|[Script](../../Script)|Обработчик события eventName|

# Examples

```js
NotificationSubscriptions.on('disconnected', function() {
  NotificationSubscriptions.reconnection();
});

NotificationSubscriptions.on('error', function(error) {
  console.log(error);
});
```

# See Also

* [`subscribe()`](../NotificationSubscriptions.subscribe/)
* [`unsubscribe()`](../NotificationSubscriptions.unsubscribe/)
* [`startConnection()`](../NotificationSubscriptions.startConnection/)
* [`stopConnection()`](../NotificationSubscriptions.stopConnection/)
* [`reconnection()`](../NotificationSubscriptions.reconnection/)
* [`isDisconnected()`](../NotificationSubscriptions.isDisconnected/)
