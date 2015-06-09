---
layout: doc
title: "Session.getCurrentUser()"
position: 2
---

Возвращает информацию о пользователе.

# Description

Вызов метода [`getCurrentUser()`](../Session.getCurrentUser/) возвращает информацию о текущем
пользователе. Метод может быть вызван только после [входа пользователя в систему](../Session.signInInternal/).

# Syntax

```js
Session.getCurrentUser(success[, error])
```

## Parameters

`success`

[Обработчик события](../../Script/) о том, что информация о пользователе получена. В параметре
`argument` передается информация о произошедшем событии. Свойство `argument.value` содержит
информацию о пользователе.

`error`

Необязательный. [Обработчик события](../../Script/) о том, что при получении информации о
пользователе произошла ошибка. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.error` содержит информацию об ошибке.

# Examples

```js
Session.getCurrentUser(
  function(context, argument) { alert('User info is available!'); },
  function(context, argument) { alert('Error: ' + argument.error); }
);
```
