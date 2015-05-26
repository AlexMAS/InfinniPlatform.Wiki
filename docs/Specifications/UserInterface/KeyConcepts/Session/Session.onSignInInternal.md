---
layout: doc
title: "Session.onSignInInternal"
position: 7
---

Устанавливает обработчик события входа пользователя в систему через внутренний провайдер.

# Syntax

```js
Session.onSignInInternal(callback)
```

## Parameters

`callback`

[Обработчик события входа пользователя в систему через внутренний провайдер](../../Script/).

# Examples

```js
Session.onSignInInternal(
  function(context, argument) { alert('SignIn!'); }
);
```
