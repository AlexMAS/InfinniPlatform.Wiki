---
layout: doc
title: "Logger.warn()"
position: 4
---

Регистрирует сообщение с предупреждением.

# Syntax

```js
Logger.warn(message)
```

## Parameters

`message`

Сообщение. В качестве сообщения может выступать строка или объект.

# Examples

```js
Logger.warn('Message');
Logger.warn({ message: 'Message' });
```

# See Also

* [`debug()`](../Logger.debug/)
* [`info()`](../Logger.info/)
* [`error()`](../Logger.error/)
* [`trace()`](../Logger.trace/)
* [`LogLevel`](../LogLevel/)
