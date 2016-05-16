---
layout: doc
title: "Session"
position: 1003
---

# Description

Провайдер для работы сессией пользователя.

# Methods

|Name|Description|
|----|-----------|
|[`getCurrentUser`](Session.getCurrentUser/)|Возвращает информацию о текущем пользователе.|
|[`changePassword`](Session.changePassword/)|Изменяет пароль текущего пользователя.|
|[`changeProfile`](Session.changeProfile/)|Изменяет персональную информацию текущего пользователя.|
|[`changeActiveRole`](Session.changeActiveRole/)|Изменяет активную роль текущего пользователя.|
|[`signInInternal`](Session.signInInternal/)|Осуществляет вход пользователя в систему через внутренний провайдер.|
|[`getSignInExternalForm`](Session.getSignInExternalForm/)|Возвращает форму входа пользователя в систему через внешний провайдер.|
|[`getLinkExternalLoginForm`](Session.getLinkExternalLoginForm/)|Возвращает форму добавления текущему пользователю имени входа у внешнего провайдера.|
|[`unlinkExternalLogin`](Session.unlinkExternalLogin/)|Удаляет у текущего пользователя имя входа у внешнего провайдера.|
|[`addClaim`](Session.addClaim/)|Добавляет "утверждения" пользователя.|
|[`setSessionData`](Session.setSessionData/)|Устанавливает "утверждения" текущего пользователя.|
|[`getSessionData`](Session.getSessionData/)|Получает "утверждения" текущего пользователя.|
|[`signOut`](Session.signOut/)|Выход пользователя из системы.|

# Events

|Name|Description|
|----|-----------|
|[`onActiveRoleChanged`](Session.onActiveRoleChanged/)|Устанавливает обработчик события изменения активной роли текущего пользователя.|
|[`onSignInInternal`](Session.onSignInInternal/)|Устанавливает обработчик события входа пользователя в систему через внутренний провайдер.|
|[`onSignOut`](Session.onSignOut/)|Устанавливает обработчик события выхода пользователя из системы.|