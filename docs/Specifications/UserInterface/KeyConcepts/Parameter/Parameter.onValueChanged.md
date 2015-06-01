---
layout: doc
title: "Parameter.onValueChanged"
position: 100
---

Устанавливает обработчик события изменения значения параметра.

# Syntax

```js
Parameter.onValueChanged(callback)
```

## Parameters

`callback`

[Обработчик события изменения значения параметра](../../Script/).

# Examples

```js
Session.onValueChanged(
  function(context, argument) { alert('Parameter value changed!'); }
);
```
