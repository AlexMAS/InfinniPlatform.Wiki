---
layout: doc
title: "Session.getSignInExternalForm"
position: 6
---

Возвращает форму входа пользователя в систему через внешний провайдер.

# Syntax

```js
Session.getSignInExternalForm(successUrl, failureUrl[, resultCallback[, errorCallback]]);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`successUrl`|`String`|URL для перехода в случае успешного выполнения операции.|
|`failureUrl`|`String`|URL для перехода в случае ошибки выполнения операции.|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
var successUrl = window.location.href + "&socialAuth=true";
var failureUrl = window.location.href;
var $form = $("#LoginForm");

session.getSignInExternalForm(successUrl, failureUrl, function (result) {
    $form.empty();
    $form.append(result);    
});
```
