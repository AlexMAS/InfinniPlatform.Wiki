---
layout: doc
title: "Cell.setColumnSpan()"
position: 2
---

Возвращает размер ячейки в колонках.

# Syntax

```js
cell.setColumnSpan(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`Number`|Целое число, определяющее то, сколько колонок по горизонтали будет занимать ячейка. Число должно быть в диапазоне от `1` до `12` включительно.|

## Returns

Метод ничего не возвращает.

# Examples

```js
cell.setColumnSpan(2);
```

# See Also

* [`getColumnSpan()`](../Cell.getColumnSpan/)
