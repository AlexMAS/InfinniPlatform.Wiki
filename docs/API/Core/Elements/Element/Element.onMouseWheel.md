---
layout: doc
title: "Element.onMouseWheel"
position: 108
---

Устанавливает [обработчик события](../../../Script/) о том, что на элементе прокрутили колесо мыши.

# Syntax

```js
Element.onMouseWheel(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что на элементе прокрутили колесо мыши. В параметре `args` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onMouseWheel(
  function(context, args) { alert('onMouseWheel'); }
);
```

# See Also

* [`onMouseDoubleClick`](Element.onMouseDoubleClick/)
* [`onMouseDown`](Element.onMouseDown/)
* [`onMouseUp`](Element.onMouseUp/)
* [`onMouseEnter`](Element.onMouseEnter/)
* [`onMouseLeave`](Element.onMouseLeave/)
* [`onMouseMove`](Element.onMouseMove/)
* [`MouseEvent`](../MouseEvent/)
