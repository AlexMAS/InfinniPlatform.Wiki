---
layout: doc
title: "Session.signIn()"
position: 0
---

Осуществляет вход пользователя в систему.

# Description

Вызов метода [`signIn()`](../Session.signIn/) осуществляет вход пользователя в систему. Успешный
вход в систему приводит к возникновению события [`onSignIn`](../Session.onSignIn).

# Syntax

```js
Session.signIn(userName, password[, remember[, success[, error]]])
```

## Parameters

`userName`

Имя пользователя.

`password`

Пароль пользователя.

`remember`

Необязательный. Запомнить пользователя.

`success`

Необязательный. [Обработчик события](../../Script/) о том, что осуществлен вход пользователя в систему.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value` содержит
информацию о пользователе.

`error`

Необязательный. [Обработчик события](../../Script/) о том, что при осуществлении входа пользователя
в систему произошла ошибка. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.error` содержит информацию об ошибке.

# Examples

```js
Session.signIn(
  'User1',
  'Qwerty123',
  true,
  function(context, argument) { alert('You have successfully signed in!'); },
  function(context, argument) { alert('Error: ' + argument.error); }
);
```

# See Also

* [`onSignIn`](../Session.onSignIn/)
