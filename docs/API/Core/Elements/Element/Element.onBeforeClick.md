---
layout: doc
title: "Element.onBeforeClick"
position: 103
---

Устанавливает [обработчик события](../../../Script/) клика мыши, который будет срабатывать при захвате события на элементе.

# Syntax

```js
Element.onBeforeClick(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что по элементу сделали одинарный клик мыши. В параметре `args` передается информация о произошедшем событии - объект типа [`MouseEvent`](../MouseEvent/).|

# Examples

```js
Element.onBeforeClick(
  function(context, args) { alert('onBeforeClick'); }
);
```

# See Also

* [`onClick`](../Element.onClick/)
* [`onDoubleClick`](../Element.onDoubleClick/)
