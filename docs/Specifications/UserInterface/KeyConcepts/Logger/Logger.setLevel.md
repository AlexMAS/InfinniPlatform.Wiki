---
layout: doc
title: "Logger.setLevel()"
position: 1
---

Возвращает минимальный [уровень регистрируемых сообщений](../LogLevel/).

# Syntax

```js
Logger.setLevel(value)
```

## Parameters

`value`

Устанавливает [уровень регистрируемых сообщений](../LogLevel/).

# Examples

```js
var level = Logger.setLevel(LogLevel.error);
Logger.debug('Message'); // ignore
Logger.info('Message');  // ignore
Logger.warn('Message');  // ignore
Logger.error('Message'); // log
Logger.trace('Message'); // log
```

# See Also

* [`getLevel()`](../Logger.getLevel/)
* [`LogLevel`](../LogLevel/)
