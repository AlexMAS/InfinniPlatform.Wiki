---
layout: doc
title: "Session.changePassword()"
position: 3
---

Изменяет пароль пользователя.

# Description

Вызов метода [`changePassword()`](../Session.changePassword/) изменяет пароль текущего пользователя.
Метод может быть вызван только после [входа пользователя в систему](../Session.signInInternal/).
Успешное изменение пароля приводит к возникновению события [`onPasswordChanged`](../Session.onPasswordChanged/).

# Syntax

```js
Session.changePassword(oldPassword, newPassword[, success[, error]])
```

## Parameters

`oldPassword`

Старый пароль.

`newPassword`

Новый пароль.

`success`

Необязательный. [Обработчик события](../../Script/) о том, что пароль пользователя изменен.
В параметре `argument` передается информация о произошедшем событии.

`error`

Необязательный. [Обработчик события](../../Script/) о том, что при изменении пароля пользователя
произошла ошибка. В параметре `argument` передается информация о произошедшем событии. Свойство
`argument.error` содержит информацию об ошибке.

# Examples

```js
Session.changePassword(
  'Qwerty123',
  '321ytrewQ',
  function(context, argument) { alert('Password has been changed!'); },
  function(context, argument) { alert('Error: ' + argument.error); }
);
```

# See Also

* [`onPasswordChanged`](../Session.onPasswordChanged/)
