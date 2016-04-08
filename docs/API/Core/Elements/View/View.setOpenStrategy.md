---
layout: doc
title: "View.setOpenStrategy()"
position: 9
---

Устанавливает [стратегию отображения представления](../LinkView/OpenMode/).

# Syntax

```js
view.setOpenStrategy(strategy)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|strategy|[`OpenMode`](../LinkView/OpenMode/)|Стратегия отображения представления|

## Returns

Метод ничего не возвращает.

# Examples

```js
view.setOpenStrategy(new OpenModeDialogStrategy());
```

# See Also

* [`OpenMode`](../LinkView/OpenMode/)