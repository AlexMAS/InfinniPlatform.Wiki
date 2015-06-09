---
layout: doc
title: "Session.onSignIn"
position: 100
---

Устанавливает [обработчик события](../../Script/) о том, что осуществлен вход пользователя в систему.

# Description

Вызов метода [`signIn()`](../Session.signIn/) осуществляет вход пользователя в систему. Успешный
вход в систему приводит к возникновению события [`onSignIn`](../Session.onSignIn).

# Syntax

```js
Session.onSignIn(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что осуществлен вход пользователя в систему. В параметре
`argument` передается информация о произошедшем событии. Свойство `argument.value` содержит
информацию о пользователе.

# Examples

```js
Session.onSignIn(
  function(context, argument) { alert('You have successfully signed in!'); }
);
```

# See Also

* [`signIn()`](../Session.signIn/)
