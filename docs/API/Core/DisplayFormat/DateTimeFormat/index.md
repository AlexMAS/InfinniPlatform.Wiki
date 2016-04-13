---
layout: doc
title: "DateTimeFormat"
position: 1020
---

Формат отображения даты/времени. Строка форматирования должна записываться в формате, который описан в разделе [`DateTimeFormat`](../DateTimeFormat.format). 

# Extends

[`BaseFormat`](../BaseFormat).

# Example

```js
//js-demo
format = new DateTimeFormat();
format.setFormat('dd-MM-yyyy');

$elementForExample.append(format.formatValue(new Date()));
```

# See also

[Настройки форматирования для даты и времени](DateTimeFormat.format)
