---
layout: doc
title: "Element.onMouseMove"
position: 109
---

Устанавливает [обработчик события](../../../Script/) о том, что указатель мыши двигался внутри элемента.

# Syntax

```js
Element.onMouseMove(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Обработчик события](../../../Script/)|[Обработчик события](../../../Script/) о том, что указатель мыши двигался внутри элемента. В параметре `argument` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onMouseMove(
  function(context, argument) { alert('onMouseMove'); }
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
