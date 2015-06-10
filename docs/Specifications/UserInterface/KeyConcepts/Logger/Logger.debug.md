---
layout: doc
title: "Logger.debug()"
position: 2
---

Регистрирует отладочное сообщение.

# Syntax

```js
Logger.debug(message)
```

## Parameters

`message`

Сообщение. В качестве сообщения может выступать строка или объект.

# Examples

```js
Logger.debug('Message');
Logger.debug({ message: 'Message' });
```

# See Also

* [`info()`](../Logger.info/)
* [`warn()`](../Logger.warn/)
* [`error()`](../Logger.error/)
* [`trace()`](../Logger.trace/)
* [`LogLevel`](../LogLevel/)
