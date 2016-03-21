---
layout: doc
title: "Element.onMouseDoubleClick"
position: 103
---

Устанавливает [обработчик события](../../../Script/) о том, что по элементу сделали двойной клик мыши.

# Syntax

```js
Element.onMouseDoubleClick(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Обработчик события](../../../Script/)|[Обработчик события](../../../Script/) о том, что по элементу сделали двойной клик мыши. В параметре `argument` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onMouseDoubleClick(
  function(context, argument) { alert('onMouseDoubleClick'); }
);
```

# See Also

* [`onMouseDown`](Element.onMouseDown/)
* [`onMouseUp`](Element.onMouseUp/)
* [`onMouseWheel`](Element.onMouseWheel/)
* [`onMouseEnter`](Element.onMouseEnter/)
* [`onMouseLeave`](Element.onMouseLeave/)
* [`onMouseMove`](Element.onMouseMove/)
* [`MouseEvent`](../MouseEvent/)
