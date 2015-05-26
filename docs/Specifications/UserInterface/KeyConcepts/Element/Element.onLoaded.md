---
layout: doc
title: "Element.onLoaded"
position: 101
---

Устанавливает обработчик события о том, что элемент загружен.

# Syntax

```js
Element.onLoaded(callback)
```

## Parameters

`callback`

[Обработчик события о том, что элемент загружен](../../Script/).

# Examples

```js
Element.onLoaded(
  function(context, argument) { alert('Element loaded!'); }
);
```
