---
layout: doc
title: "Logger.info"
position: 3
---

Регистрирует информационное сообщение.

# Syntax

```js
Logger.info(message)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`message`|`String`&#124;`Object`|Сообщение. В качестве сообщения может выступать строка или объект.|

# Examples

```js
Logger.info('Message');
Logger.info({ message: 'Message' });
```

# See Also

* [`debug()`](../Logger.debug/)
* [`warn()`](../Logger.warn/)
* [`error()`](../Logger.error/)
* [`trace()`](../Logger.trace/)
* [`LogLevel`](../LogLevel/)
