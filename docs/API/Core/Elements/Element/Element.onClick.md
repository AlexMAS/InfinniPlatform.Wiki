---
layout: doc
title: "Element.onClick"
position: 104
---

Устанавливает [обработчик события](../../../Script/) о том, что по элементу сделали одинарный клик мыши.

# Syntax

```js
element.onClick(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что по элементу сделали одинарный клик мыши. В параметре `args` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
element.onClick(
  function(context, args) { alert('onClick'); }
);
```

# See Also

* [`onBeforeClick`](../Element.onBeforeClick/)
* [`onDoubleClick`](../Element.onDoubleClick/)
