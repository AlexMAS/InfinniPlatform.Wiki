---
layout: doc
title: "BooleanFormat"
position: 1020
---

Формат отображения логического значения.

# Methods

Name|Description
----|-----------
[`getFalseText`](BooleanFormat.getFalseText/)|Возвращает текст для отображения ложного значения.
[`setFalseText`](BooleanFormat.setFalseText/)|Устанавливает текст для отображения ложного значения.
[`getTrueText`](BooleanFormat.getTrueText/)|Возвращает текст для отображения истинного значения.
[`setTrueText`](BooleanFormat.setTrueText/)|Устанавливает текст для отображения истинного значения.

# Example

```js
//js-demo
format = new BooleanFormat();
format.setTrueText('Y');
format.setFalseText('N');

$elementForExample.append(format.formatValue(true));
$elementForExample.append('<hr>');
$elementForExample.append(format.formatValue(false));

```




