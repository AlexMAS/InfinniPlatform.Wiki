---
layout: doc
title: "Element.onKeyDown"
position: 112
---

Устанавливает [обработчик события](../../../Script/) о том, что на элементе нажали клавишу клавиатуры.

# Syntax

```js
Element.onKeyDown(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что на элементе нажали клавишу клавиатуры. В параметре `args` передается информация о произошедшем событии - объект типа [`KeyboardEvent`](../KeyboardEvent/).|

# Examples

```js
Element.onKeyDown(
  function(context, args) { alert('onKeyDown'); }
);
```

# See Also

* [`onKeyUp`](../Element.onKeyUp/)
* [`KeyboardEvent`](../KeyboardEvent/)
