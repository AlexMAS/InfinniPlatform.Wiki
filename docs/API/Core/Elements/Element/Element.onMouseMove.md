---
layout: doc
title: "Element.onMouseMove"
position: 111
---

Устанавливает [обработчик события](../../../Script/) о том, что указатель мыши двигался внутри элемента.

# Syntax

```js
Element.onMouseMove(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что указатель мыши двигался внутри элемента. В параметре `args` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onMouseMove(
  function(context, args) { alert('onMouseMove'); }
);
```

# See Also

* [`onMouseDoubleClick`](Element.onMouseDoubleClick/)
* [`onMouseDown`](Element.onMouseDown/)
* [`onMouseUp`](Element.onMouseUp/)
* [`onMouseWheel`](Element.onMouseWheel/)
* [`onMouseEnter`](Element.onMouseEnter/)
* [`onMouseLeave`](Element.onMouseLeave/)
* [`MouseEvent`](../MouseEvent/)
