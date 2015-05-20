---
layout: doc
title: "Session.signInInternal()"
position: 5
---

Осуществляет вход пользователя в систему через внутренний провайдер.

## Syntax

```js
Session.signInInternal(userName, password, remember, resultCallback, errorCallback)
```

### Parameters

`userName`

Имя пользователя.

`password`

Пароль пользователя.

`remember`

Запомнить пользователя.

`resultCallback`

[Обработчик результата выполнения операции](../ResultCallback).

`errorcallback`

[Обработчик ошибки выполнения операции](../ErrorCallback).

## Examples

```js
Session.signInInternal(
  'User1',
  'Qwerty123',
  true,
  function(context, argument) { alert('Success!'); },
  function(context, argument) { alert('Error!'); }
);
```
