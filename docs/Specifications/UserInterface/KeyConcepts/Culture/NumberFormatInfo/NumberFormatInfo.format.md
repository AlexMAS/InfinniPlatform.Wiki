---
layout: doc
title: "NumberFormatInfo.format()"
position: 0
---

Осуществляет форматирование числового значения по указанному [шаблону](../NumberFormatting/).

# Syntax

```js
NumberFormatInfo.format(stringFormat, value)
```

## Parameters

`stringFormat`

[Строка форматирования](../NumberFormatting/).

`value`

Числовое значение.

# Examples

```js
// en-US:
var value = 123.4567;
var stringValue = NumberFormatInfo.format("n2", value); // 123.46
```

# See Also

* [`NumberFormatting`](../NumberFormatting/)
