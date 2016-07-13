---
layout: doc
title: "Element.onKeyUp"
position: 113
---

Устанавливает [обработчик события](../../../Script/) о том, что на элементе отпустили клавишу клавиатуры.

# Syntax

```js
Element.onKeyUp(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что на элементе отпустили клавишу клавиатуры. В параметре `args` передается информация о произошедшем событии - объект типа [`KeyboardEvent`](../KeyboardEvent/).|

# Examples

```js
Element.onKeyUp(
  function(context, args) { alert('onKeyUp'); }
);
```

# See Also

* [`onKeyDown`](../Element.onKeyDown/)
* [`KeyboardEvent`](../KeyboardEvent/)
