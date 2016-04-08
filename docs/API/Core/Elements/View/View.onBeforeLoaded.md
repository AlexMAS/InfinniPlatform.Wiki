---
layout: doc
title: "View.onBeforeLoaded"
position: 104
---

Устанавливает [обработчик события](../../../Script/) о том, что представление представление было загружено. Данный обработчик сработает до [`onLoaded`](../../Element/Element.onLoaded/).

# Syntax

```js
view.onBeforeLoaded(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[`Script`](../../../Script/)|Обработчик события о том, что представление было загружено|

# Examples

```js
view.onBeforeLoaded(
  function(context, argument) { alert('View is loaded! (1)'); }
);

view.onLoaded(
  function(context, argument) { alert('View is loaded! (2)'); }
);
```

# See Also

* [`onLoaded`](../../Element/Element.onLoaded/)
