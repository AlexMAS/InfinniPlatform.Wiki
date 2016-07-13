---
layout: doc
title: "Element.onMouseEnter"
position: 109
---

Устанавливает [обработчик события](../../../Script/) о том, что указатель мыши вошел в границы элемента.

# Syntax

```js
Element.onMouseEnter(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что указатель мыши вошел в границы элемента. В параметре `args` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onMouseEnter(
  function(context, args) { alert('onMouseEnter'); }
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
