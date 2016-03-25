---
layout: doc
title: "Element.onKeyDown"
position: 110
---

Устанавливает [обработчик события](../../../Script/) о том, что на элементе нажали клавишу клавиатуры.

# Syntax

```js
Element.onKeyDown(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Обработчик события](../../../Script/)|[Обработчик события](../../../Script/) о том, что на элементе нажали клавишу клавиатуры. В параметре `argument` передается информация о произошедшем событии - объект типа [`KeyboardEvent`](../KeyboardEvent/).|

# Examples

```js
Element.onKeyDown(
  function(context, argument) { alert('onKeyDown'); }
);
```

# See Also

* [`onKeyUp`](../Element.onKeyUp/)
* [`KeyboardEvent`](../KeyboardEvent/)
