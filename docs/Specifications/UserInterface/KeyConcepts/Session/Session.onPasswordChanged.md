---
layout: doc
title: "Session.onPasswordChanged"
position: 102
---

Устанавливает [обработчик события](../../Script/) о том, что пароль пользователя изменен.

# Description

Вызов метода [`changePassword()`](../Session.changePassword/) изменяет пароль текущего пользователя.
Метод может быть вызван только после [входа пользователя в систему](../Session.signInInternal/).
Успешное изменение пароля приводит к возникновению события [`onPasswordChanged`](../Session.onPasswordChanged/).

# Syntax

```js
Session.onPasswordChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что пароль пользователя изменен. В параметре `argument`
передается информация о произошедшем событии.

# Examples

```js
Session.onPasswordChanged(
  function(context, argument) { alert('Password has been changed!'); }
);
```

# See Also

* [`changePassword()`](../Session.changePassword/)
