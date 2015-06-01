---
layout: doc
title: "Session.onSignOut"
position: 103
---

Устанавливает обработчик события выхода пользователя из системы.

# Syntax

```js
Session.onSignOut(callback)
```

## Parameters

`callback`

[Обработчик события выхода пользователя из системы](../../Script/).

# Examples

```js
Session.onSignOut(
  function(context, argument) { alert('SignOut!'); }
);
```
