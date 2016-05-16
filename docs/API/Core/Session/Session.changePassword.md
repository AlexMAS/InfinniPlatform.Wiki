---
layout: doc
title: "Session.changePassword"
position: 2
---

Изменяет пароль текущего пользователя.

# Syntax

```js
Session.changePassword(oldPassword, newPassword[, resultCallback[, errorCallback]]);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`oldPassword`|`String`|Старый пароль.|
|`newPassword`|`String`| Новый пароль.|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
var onSuccess = function () {
    console.log('success');
};

var onError = function (err) {
    console.error(err);
}

session.changePassword('123', 'abc123', onSuccess, onError);
```
