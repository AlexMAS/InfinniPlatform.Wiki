---
layout: doc
title: "Element.onGotFocus"
position: 101
---

Устанавливает обработчик события о том, что элемент получил фокус ввода.

# Syntax

```js
Element.onGotFocus(callback)
```

## Parameters

`callback`

[Обработчик события о том, что элемент получил фокус ввода](../../Script/).

# Examples

```js
Element.onGotFocus(
  function(context, argument) { alert('Element got focus!'); }
);
```
