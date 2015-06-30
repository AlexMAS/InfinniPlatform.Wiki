---
layout: doc
title: "GridCell.setColumnSpan()"
position: 13
---

Возвращает размер ячейки в колонках.

# Syntax

```js
GridCell.setColumnSpan(value)
```

## Parameters

`value`

Целое число, определяющее то, сколько колонок по горизонтали будет занимать ячейка. Число должно
быть в диапазоне от `1` до `12` включительно. Если размеры ячейки не позволяют разместить ее в
текущей строке, она и ее содержимое будут перенесены на новую строку.

# Examples

```js
GridCell.setColumnSpan(2);
```

# See Also

* [`getColumnSpan()`](../GridCell.getColumnSpan/)
