---
layout: doc
title: "DateTimeFormatInfo.format()"
position: 0
---

Осуществляет форматирование даты и времени по указанному [шаблону](../DateTimeFormating/).

# Syntax

```js
DateTimeFormatInfo.format(stringFormat, value)
```

## Parameters

`stringFormat`

[Строка форматирования](../DateTimeFormating/).

`value`

Значение даты и времени.

# Examples

```js
// en-US:
var value = new Date(2014, 8, 4, 16, 17);
var stringValue = DateTimeFormatInfo.format("g", value); // "9/4/2014 4:17 PM"
```

# See Also

* [`DateTimeFormating`](../DateTimeFormating/)
