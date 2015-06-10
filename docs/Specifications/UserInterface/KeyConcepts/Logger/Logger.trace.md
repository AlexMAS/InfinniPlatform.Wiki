---
layout: doc
title: "Logger.trace()"
position: 6
---

Регистрирует сообщение трассировки.

# Syntax

```js
Logger.trace(message)
```

## Parameters

`message`

Сообщение. В качестве сообщения может выступать строка или объект.

# Examples

```js
Logger.trace('Message');
Logger.trace({ message: 'Message' });
```

# See Also

* [`debug()`](../Logger.debug/)
* [`info()`](../Logger.info/)
* [`warn()`](../Logger.warn/)
* [`error()`](../Logger.error/)
* [`LogLevel`](../LogLevel/)
