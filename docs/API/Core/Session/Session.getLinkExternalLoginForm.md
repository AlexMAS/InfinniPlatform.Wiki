---
layout: doc
title: "Session.getLinkExternalLoginForm"
position: 7
---

Возвращает форму добавления текущему пользователю имени входа у внешнего провайдера.

# Syntax

```js
Session.getLinkExternalLoginForm(successUrl, failureUrl[, resultCallback[, errorCallback]]);
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
var successUrl = window.location.href + "?viewName=Profile";
var failureUrl = window.location.href + "?viewName=Profile";
var $form = $("#LoginForm");

session.getSignInExternalForm(successUrl, failureUrl, function (result) {
    $form.empty();
    $form.append(result);    
});
```
