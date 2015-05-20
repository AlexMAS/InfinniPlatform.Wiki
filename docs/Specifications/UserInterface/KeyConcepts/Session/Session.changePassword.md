---
layout: doc
title: "Session.changePassword()"
position: 3
---

Изменяет пароль текущего пользователя.

## Syntax

```js
Session.changePassword(oldPassword, newPassword, resultCallback, errorCallback)
```

### Parameters

`oldPassword`

Старый пароль.

`newPassword`

Новый пароль.

`resultCallback`

[Обработчик результата выполнения операции](../ResultCallback).

`errorcallback`

[Обработчик ошибки выполнения операции](../ErrorCallback).

## Examples

```js
Session.changePassword(
  'Qwerty123',
  '321ytrewQ',
  function(context, argument) { alert('Success!'); },
  function(context, argument) { alert('Error!'); }
);
```
