---
layout: doc
title: "Session.setSessionData"
position: 10
---

Устанавливает "утверждения" текущего пользователя.

# Syntax

```js
Session.setSessionData(claimType, claimValue[, resultCallback[, errorCallback]]);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`claimType`|`String`|Имя "утверждения".|
|`claimValue`|`Function`|Значение "утверждения".|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
session.setSessionData(TenantId, Code, function (result) {
    update();    
});
```
