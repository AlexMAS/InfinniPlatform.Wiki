---
layout: doc
title: "Session.onPasswordChanged"
position: 5
---

Устанавливает обработчик события изменения пароля текущего пользователя.

## Syntax

```js
Session.onPasswordChanged(callback)
```

### Parameters

`callback`

[Обработчик события изменения пароля текущего пользователя](../../Script/).

## Examples

```js
Session.onPasswordChanged(
  function(context, argument) { alert('Password changed!'); }
);
```
