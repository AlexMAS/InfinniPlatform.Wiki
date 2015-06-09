---
layout: doc
title: "Session.onSignOut"
position: 101
---

Устанавливает [обработчик события](../../Script/) о том, что осуществлен выход пользователя из системы.

# Description

Вызов метода [`signOut()`](../Session.signOut/) осуществляет выход пользователя из системы. Успешный
выход из системы приводит к возникновению события [`onSignOut`](../Session.onSignOut/).

# Syntax

```js
Session.onSignOut(callback)
```

## Parameters

`callback`

[Обработчик события](../../Script/) о том, что осуществлен выход пользователя из системы. В параметре
`argument` передается информация о произошедшем событии. Свойство `argument.value` содержит информацию
о пользователе.

# Examples

```js
Session.onSignOut(
  function(context, argument) { alert('You have successfully signed out!'); }
);
```

# See Also

* [`signOut()`](../Session.signOut/)
