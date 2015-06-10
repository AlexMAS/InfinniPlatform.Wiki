---
layout: doc
title: "Logger.error()"
position: 5
---

Регистрирует сообщение с ошибкой.

# Syntax

```js
Logger.error(message)
```

## Parameters

`message`

Сообщение. В качестве сообщения может выступать строка или объект.

# Examples

```js
Logger.error('Message');
Logger.error({ message: 'Message' });
```

# See Also

* [`debug()`](../Logger.debug/)
* [`info()`](../Logger.info/)
* [`warn()`](../Logger.warn/)
* [`trace()`](../Logger.trace/)
* [`LogLevel`](../LogLevel/)
