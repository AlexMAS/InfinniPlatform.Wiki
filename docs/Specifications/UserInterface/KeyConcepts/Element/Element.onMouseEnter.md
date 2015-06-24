---
layout: doc
title: "Element.onMouseEnter"
position: 107
---

Устанавливает [обработчик события](../../Script/) о том, что указатель мыши вошел в границы элемента.

# Syntax

```js
Element.onMouseEnter(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что указатель мыши вошел в границы элемента. В параметре
`argument` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).

# Examples

```js
Element.onMouseEnter(
  function(context, argument) { alert('onMouseEnter'); }
);
```

# See Also

* [`onMouseDoubleClick`](Element.onMouseDoubleClick/)
* [`onMouseDown`](Element.onMouseDown/)
* [`onMouseUp`](Element.onMouseUp/)
* [`onMouseWheel`](Element.onMouseWheel/)
* [`onMouseLeave`](Element.onMouseLeave/)
* [`onMouseMove`](Element.onMouseMove/)
* [`MouseEvent`](../MouseEvent/)
