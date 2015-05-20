---
layout: doc
title: "Session.onSignInInternal"
position: 8
---

Устанавливает обработчик события входа пользователя в систему через внутренний провайдер.

## Syntax

```js
Session.onSignInInternal(callback)
```

### Parameters

`callback`

[Обработчик события входа пользователя в систему через внутренний провайдер](../ResultCallback).

## Examples

```js
Session.onSignInInternal(
  function(context, argument) { alert('SignIn!'); }
);
```
