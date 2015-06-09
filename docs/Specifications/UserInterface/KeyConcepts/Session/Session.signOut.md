---
layout: doc
title: "Session.signOut()"
position: 1
---

Осуществляет выход пользователя из системы.

# Description

Вызов метода [`signOut()`](../Session.signOut/) осуществляет выход пользователя из системы. Успешный
выход из системы приводит к возникновению события [`onSignOut`](../Session.onSignOut/).

# Syntax

```js
Session.signOut([success[, error]])
```

## Parameters

`success`

Необязательный. [Обработчик события](../../Script/) о том, что осуществлен выход пользователя из системы.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value` содержит
информацию о пользователе.

`error`

Необязательный. [Обработчик события](../../Script/) о том, что при осуществлении выхода пользователя
из системы произошла ошибка. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.error` содержит информацию об ошибке.

# Examples

```js
Session.signOut(
  function(context, argument) { alert('You have successfully signed out!'); },
  function(context, argument) { alert('Error: ' + argument.error); }
);
```

# See Also

* [`onSignOut`](../Session.onSignOut/)
