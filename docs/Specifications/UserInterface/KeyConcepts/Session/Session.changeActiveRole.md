---
layout: doc
title: "Session.changeActiveRole()"
position: 2
---

Изменяет активную роль текущего пользователя.

## Description

Успешное изменение активной роли приводит к возникновению события [`onActiveRoleChanged`](../Session.onActiveRoleChanged).

## Syntax

```js
Session.changeActiveRole(activeRole, resultCallback, errorCallback)
```

### Parameters

`activeRole`

Наименование роли.

`resultCallback`

[Обработчик результата выполнения операции](../../Script/).

`errorcallback`

[Обработчик ошибки выполнения операции](../../Script/).

## Examples

```js
Session.changeActiveRole(
  'Admin',
  function(context, argument) { alert('Success!'); },
  function(context, argument) { alert('Error!'); }
);
```
