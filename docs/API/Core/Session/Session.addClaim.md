---
layout: doc
title: "Session.addClaim"
position: 9
---

Добавляет "утверждения" пользователя.

# Syntax

```js
Session.addClaim(userName, claimName, claimValue[, resultCallback[, errorCallback]]);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`userName`|`String`|Имя пользователя.|
|`claimName`|`String`|Имя "утверждения".|
|`claimValue`|`Function`|Значение "утверждения".|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
session.addClaim(userName, TenantId, Code, function (result) {
    update();    
});
```
