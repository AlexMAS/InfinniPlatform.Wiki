---
layout: doc
title: "Element.onLostFocus"
position: 102
---

Устанавливает [обработчик события](../../../Script/) о том, что элемент потерял фокус ввода.

# Syntax

```js
Element.onLostFocus(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Обработчик события](../../../Script/)|[Обработчик события](../../../Script/) о том, что элемент потерял фокус ввода.|

# Examples

```js
Element.onLostFocus(
  function(context, argument) { alert('Element lost focus!'); }
);
```

# See Also

* [`onGotFocus`](../Element.onGotFocus/)
