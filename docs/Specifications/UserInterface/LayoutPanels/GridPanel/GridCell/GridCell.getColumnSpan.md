---
layout: doc
title: "GridCell.getColumnSpan()"
position: 12
---

Возвращает размер ячейки в колонках.

# Syntax

```js
GridCell.getColumnSpan()
```

## Returns

Целое число, определяющее то, сколько колонок по горизонтали будет занимать ячейка. Число должно
быть в диапазоне от `1` до `12` включительно. Если размеры ячейки не позволяют разместить ее в
текущей строке, она и ее содержимое будут перенесены на новую строку.

# Examples

```js
var columnSpan = GridCell.getColumnSpan();
```

# See Also

* [`setColumnSpan()`](../GridCell.setColumnSpan/)
