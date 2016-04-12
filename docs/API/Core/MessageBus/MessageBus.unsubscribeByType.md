---
layout: doc
title: "MessageBus.unsubscribeByType"
position: 4
---

Отмена всех подписок на сообщения заданного типа.

# Description

Удаляет все сделанные ранее подписки на событие заданного типа.

# Syntax

```js
MessageBus.unsubscribeByType(type)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`type`|`String`|Тип сообщения.|

# Examples

```js
MessageBus.unsubscribeByType('myEvent');
```

# See Also

* [`subscribe()`](../MessageBus.subscribe/)
