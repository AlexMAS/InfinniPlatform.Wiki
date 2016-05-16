---
layout: doc
title: "Session.signInInternal"
position: 5
---

Изменяет активную роль текущего пользователя.

# Syntax

```js
Session.signInInternal(userName, password, remember[, resultCallback[, errorCallback]]);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`userName`|`String`|Имя пользователя.|
|`password`|`String`|Пароль пользователя.|
|`remember`|`Boolean`|Запомнить пользователя.|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
session.signInInternal('user', '123', true);
```
