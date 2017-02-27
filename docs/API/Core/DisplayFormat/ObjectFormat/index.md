---
layout: doc
title: "ObjectFormat"
position: 1020
---

Формат отображения объекта. Строка форматирования должна записываться в формате, который описан в разделе [`ObjectFormat.format`](ObjectFormat.format).

# Extends

[`BaseFormat`](../BaseFormat).

# Example

```js
//js-demo
format = new ObjectFormat();
format.setFormat('${:n3}');

$elementForExample.append(format.formatValue(1/3));
```

# See also

[Настройки форматирования объекта](ObjectFormat.format)
