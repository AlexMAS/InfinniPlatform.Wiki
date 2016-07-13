---
layout: doc
title: "Element.onDoubleClick"
position: 105
---

Устанавливает [обработчик события](../../../Script/) о том, что по элементу сделали двойной клик мыши.

# Syntax

```js
element.onDoubleClick(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что по элементу сделали двойной клик мыши. В параметре `args` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
element.onDoubleClick(
  function(context, args) { alert('onDoubleClick'); }
);
```

# See Also

* [`onBeforeClick`](../Element.onBeforeClick/)
* [`onClick`](../Element.onClick/)
