---
layout: doc
title: "Session.onActiveRoleChanged"
position: 6
---

Устанавливает обработчик события изменения активной роли текущего пользователя.

## Syntax

```js
Session.onActiveRoleChanged(callback)
```

### Parameters

`callback`

[Обработчик события изменения активной роли текущего пользователя](../../Script/).

## Examples

```js
Session.onActiveRoleChanged(
  function(context, argument) { alert('Active role changed!'); }
);
```
