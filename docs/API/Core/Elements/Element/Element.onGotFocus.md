---
layout: doc
title: "Element.onGotFocus"
position: 101
---

Устанавливает [обработчик события](../../../Script/) о том, что элемент получил фокус ввода.

# Syntax

```js
Element.onGotFocus(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что элемент получил фокус ввода.|

# Examples

```js
Element.onGotFocus(
  function(context, args) { alert('Element got focus!'); }
);
```

# See Also

* [`onLostFocus`](../Element.onLostFocus/)
