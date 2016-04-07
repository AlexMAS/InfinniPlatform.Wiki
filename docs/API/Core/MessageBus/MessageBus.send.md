---
layout: doc
title: "MessageBus.send"
position: 2
---

Отправляет сообщение заданного типа.

# Description

Для отправки сообщения необходимо передать два параметра: тип сообщения и сообщение. Получив такой
запрос, шина сообщений осуществляет поиск всех подписчиков, заинтересованных в получении сообщения с
заданным типом, после чего вызывает соответствующие обработчики сообщений, передавая каждому из них
указанное сообщение.

# Syntax

```js
MessageBus.send(type, message)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`type`|`String`|Тип сообщения.|
|`message`|&#42;|Сообщение.|


# Examples

```js
MessageBus.send('myEvent', { value: 123 });
```

# See Also

* [`subscribe()`](../MessageBus.subscribe/)
