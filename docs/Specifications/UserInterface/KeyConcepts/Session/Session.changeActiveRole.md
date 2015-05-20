---
layout: doc
title: "Session.changeActiveRole()"
position: 4
---

Изменяет активную роль текущего пользователя.

## Syntax

```js
Session.changeActiveRole(activeRole, resultCallback, errorCallback)
```

### Parameters

`activeRole`

Наименование роли.

`resultCallback`

[Обработчик результата выполнения операции](../ResultCallback).

`errorcallback`

[Обработчик ошибки выполнения операции](../ErrorCallback).

## Examples

```js
Session.changeActiveRole(
  'Admin',
  function(context, argument) { alert('Success!'); },
  function(context, argument) { alert('Error!'); }
);
```
