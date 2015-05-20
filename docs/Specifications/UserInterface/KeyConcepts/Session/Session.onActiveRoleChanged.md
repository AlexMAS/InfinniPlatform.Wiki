---
layout: doc
title: "Session.onActiveRoleChanged"
position: 7
---

Устанавливает обработчик события изменения активной роли текущего пользователя.

## Syntax

```js
Session.onActiveRoleChanged(callback)
```

### Parameters

`callback`

[Обработчик события изменения активной роли текущего пользователя](../ResultCallback).

## Examples

```js
Session.onActiveRoleChanged(
  function(context, argument) { alert('ActiveRoleChanged!'); }
);
```
