---
layout: doc
title: "Session.changePassword()"
position: 1
---

Изменяет пароль текущего пользователя.

## Description

Успешное изменение пароля приводит к возникновению события [`onPasswordChanged`](../Session.onPasswordChanged).

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

[Обработчик результата выполнения операции](../../Script/).

`errorcallback`

[Обработчик ошибки выполнения операции](../../Script/).

## Examples

```js
Session.changePassword(
  'Qwerty123',
  '321ytrewQ',
  function(context, argument) { alert('Success!'); },
  function(context, argument) { alert('Error!'); }
);
```
