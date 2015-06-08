---
layout: doc
title: "Element.onLoaded"
position: 100
---

Устанавливает [обработчик события](../../Script/) о том, что элемент загружен.

# Syntax

```js
Element.onLoaded(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что элемент загружен.

# Examples

```js
Element.onLoaded(
  function(context, argument) { alert('Element is loaded!'); }
);
```
