---
layout: doc
title: "Element.onKeyUp"
position: 111
---

Устанавливает [обработчик события](../../../Script/) о том, что на элементе отпустили клавишу клавиатуры.

# Syntax

```js
Element.onKeyUp(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Обработчик события](../../../Script/)|[Обработчик события](../../../Script/) о том, что на элементе отпустили клавишу клавиатуры. В параметре `argument` передается информация о произошедшем событии - объект типа [`KeyboardEvent`](../KeyboardEvent/).|

# Examples

```js
Element.onKeyUp(
  function(context, argument) { alert('onKeyUp'); }
);
```

# See Also

* [`onKeyDown`](../Element.onKeyDown/)
* [`KeyboardEvent`](../KeyboardEvent/)
