---
layout: doc
title: "Session.signInInternal()"
position: 3
---

Осуществляет вход пользователя в систему через внутренний провайдер.

# Description

Успешный вход в систему приводит к возникновению события [`onSignInInternal`](../Session.onSignInInternal).

# Syntax

```js
Session.signInInternal(userName, password, remember, resultCallback, errorCallback)
```

## Parameters

`userName`

Имя пользователя.

`password`

Пароль пользователя.

`remember`

Запомнить пользователя.

`resultCallback`

[Обработчик результата выполнения операции](../../Script/).

`errorcallback`

[Обработчик ошибки выполнения операции](../../Script/).

# Examples

```js
Session.signInInternal(
  'User1',
  'Qwerty123',
  true,
  function(context, argument) { alert('Success!'); },
  function(context, argument) { alert('Error!'); }
);
```
