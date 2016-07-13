---
layout: doc
title: "Element.onMouseDown"
position: 106
---

Устанавливает [обработчик события](../../../Script/) о том, что на элементе нажали кнопку мыши.

# Syntax

```js
Element.onMouseDown(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что на элементе нажали кнопку мыши. В параметре `args` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onMouseDown(
  function(context, args) { alert('onMouseDown'); }
);
```

# See Also

* [`onMouseDoubleClick`](Element.onMouseDoubleClick/)
* [`onMouseUp`](Element.onMouseUp/)
* [`onMouseWheel`](Element.onMouseWheel/)
* [`onMouseEnter`](Element.onMouseEnter/)
* [`onMouseLeave`](Element.onMouseLeave/)
* [`onMouseMove`](Element.onMouseMove/)
* [`MouseEvent`](../MouseEvent/)
