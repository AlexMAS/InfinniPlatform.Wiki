---
layout: doc
title: "Parameter.setValue()"
position: 5
---

Устанавливает значение параметра.

# Description

Вызов метода [`setValue()`](../Parameter.setValue/) осуществляет изменение значение параметра.
Успешное выполнение данной операции приводит к возникновению события [`onValueChanged`](../Parameter.onValueChanged/).

# Syntax

```js
Parameter.setValue(value)
```

## Parameters

`value`

Произвольное значение.

# Examples

```js
Parameter.setValue(123);
```

# See Also

* [`getValue()`](../Parameter.getValue/)
