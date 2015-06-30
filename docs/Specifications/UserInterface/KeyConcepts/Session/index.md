---
layout: doc
title: "Session"
position: 1006
---

Провайдер для работы сессией пользователя - программный объект, который хранит состояние сессии
пользователя, предоставляет методы для получения и изменения информации текущего пользователя,
а также возможность входа в систему и выхода из нее.

# Syntax

```js
new Session()
```

# Methods

## [`signIn()`](Session.signIn/)

Осуществляет вход пользователя в систему.

## [`signOut()`](Session.signOut/)

Осуществляет выход пользователя из системы.

## [`getCurrentUser()`](Session.getCurrentUser/)

Возвращает информацию о пользователе.

## [`changePassword()`](Session.changePassword/)

Изменяет пароль пользователя.

## [`changeActiveRole()`](Session.changeActiveRole/)

Изменяет активную роль пользователя.

# Events

## [`onSignIn`](Session.onSignIn/)

Устанавливает [обработчик события](../Script/) о том, что осуществлен вход пользователя в систему.

## [`onSignOut`](Session.onSignOut/)

Устанавливает [обработчик события](../Script/) о том, что осуществлен выход пользователя из системы.

## [`onPasswordChanged`](Session.onPasswordChanged/)

Устанавливает [обработчик события](../Script/) о том, что пароль пользователя изменен.

## [`onActiveRoleChanged`](Session.onActiveRoleChanged/)

Устанавливает [обработчик события](../Script/) о том, что активная роль пользователя изменена.

## [`onError`](Session.onError/)

Устанавливает [обработчик события](../Script/) о том, произошла ошибка.
