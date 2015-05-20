---
layout: doc
title: "Session.onSignOut"
position: 9
---

Устанавливает обработчик события выхода пользователя из системы.

## Syntax

```js
Session.onSignOut(callback)
```

### Parameters

`callback`

[Обработчик события выхода пользователя из системы](../ResultCallback).

## Examples

```js
Session.onSignOut(
  function(context, argument) { alert('SignOut!'); }
);
```
