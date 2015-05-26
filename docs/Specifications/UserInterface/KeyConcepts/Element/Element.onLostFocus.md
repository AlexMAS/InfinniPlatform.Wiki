---
layout: doc
title: "Element.onLostFocus"
position: 103
---

Устанавливает обработчик события о том, что элемент потерял фокус ввода.

# Syntax

```js
Element.onLostFocus(callback)
```

## Parameters

`callback`

[Обработчик события о том, что элемент потерял фокус ввода](../../Script/).

# Examples

```js
Element.onLostFocus(
  function(context, argument) { alert('Element lost focus!'); }
);
```
