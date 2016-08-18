---
layout: doc
title: "NotificationSubscriptions.startConnection"
position: 3
---

SignalR устанавливает соединение с сервером и создает hub proxy по заданому hubName. Так же осуществляется подписка по всем routingKey которые были добавлены через метод subscribe или были указаны в метаданных.

# Description

Для успешного установления соединения с сервером, необходимо сначала добавить хотя бы одну подписку.

# Syntax

```js
NotificationSubscriptions.startConnection(hubName)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|hubName|`String`|Имя hub proxy. При работе с InfinniPlatform оно равно SignalRPushNotificationServiceHub|

# Examples

```js
NotificationSubscriptions.startConnection("SignalRPushNotificationServiceHub");
```

# See Also

* [`subscribe()`](../NotificationSubscriptions.subscribe/)
* [`unsubscribe()`](../NotificationSubscriptions.unsubscribe/)
* [`stopConnection()`](../NotificationSubscriptions.stopConnection/)
