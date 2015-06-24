---
layout: doc
title: "Element.onMouseWheel"
position: 106
---

Устанавливает [обработчик события](../../Script/) о том, что на элементе прокрутили колесо мыши.

# Syntax

```js
Element.onMouseWheel(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что на элементе прокрутили колесо мыши. В параметре
`argument` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).

# Examples

```js
Element.onMouseWheel(
  function(context, argument) { alert('onMouseWheel'); }
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
