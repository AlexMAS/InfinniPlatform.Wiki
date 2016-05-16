---
layout: doc
title: "Cell.getColumnSpan()"
position: 1
---

Возвращает размер ячейки в колонках.

# Syntax

```js
cell.getColumnSpan()
```

## Parameters

Нет

## Returns

Целое число, определяющее то, сколько колонок по горизонтали будет занимать ячейка. Число должно
быть в диапазоне от `1` до `12` включительно. 

# Examples

```js
var columnSpan = cell.getColumnSpan();
```

# See Also

* [`setColumnSpan()`](../Cell.setColumnSpan/)
