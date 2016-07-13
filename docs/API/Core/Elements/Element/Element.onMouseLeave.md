---
layout: doc
title: "Element.onMouseLeave"
position: 110
---

Устанавливает [обработчик события](../../../Script/) о том, что указатель мыши покинул границы элемента.

# Syntax

```js
Element.onMouseLeave(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что указатель мыши покинул границы элемента. В параметре `args` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onMouseLeave(
  function(context, args) { alert('onMouseLeave'); }
);
```

# See Also

* [`onMouseDoubleClick`](Element.onMouseDoubleClick/)
* [`onMouseDown`](Element.onMouseDown/)
* [`onMouseUp`](Element.onMouseUp/)
* [`onMouseWheel`](Element.onMouseWheel/)
* [`onMouseEnter`](Element.onMouseEnter/)
* [`onMouseMove`](Element.onMouseMove/)
* [`MouseEvent`](../MouseEvent/)
