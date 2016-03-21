---
layout: doc
title: "Element.onMouseUp"
position: 105
---

Устанавливает [обработчик события](../../../Script/) о том, что на элементе отпустили кнопку мыши.

# Syntax

```js
Element.onMouseUp(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Обработчик события](../../../Script/)|[Обработчик события](../../../Script/) о том, что на элементе отпустили кнопку мыши. В параметре `argument` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onMouseUp(
  function(context, argument) { alert('onMouseUp'); }
);
```

# See Also

* [`onMouseDoubleClick`](Element.onMouseDoubleClick/)
* [`onMouseDown`](Element.onMouseDown/)
* [`onMouseWheel`](Element.onMouseWheel/)
* [`onMouseEnter`](Element.onMouseEnter/)
* [`onMouseLeave`](Element.onMouseLeave/)
* [`onMouseMove`](Element.onMouseMove/)
* [`MouseEvent`](../MouseEvent/)
