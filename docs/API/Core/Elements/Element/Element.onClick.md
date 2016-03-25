---
layout: doc
title: "Element.onClick"
position: 103
---

Устанавливает [обработчик события](../../../Script/) о том, что по элементу сделали одинарный клик мыши.

# Syntax

```js
Element.onClick(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Обработчик события](../../../Script/)|[Обработчик события](../../../Script/) о том, что по элементу сделали одинарный клик мыши. В параметре `argument` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onClick(
  function(context, argument) { alert('onClick'); }
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
