---
layout: doc
title: "Session.unlinkExternalLogin"
position: 8
---

Удаляет у текущего пользователя имя входа у внешнего провайдера.

# Syntax

```js
Session.unlinkExternalLogin(provider, providerKey[, resultCallback[, errorCallback]]);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`provider`|`String`|Название провайдера.|
|`providerKey`|`String`|Ключ провайдера.|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
session.unlinkExternalLogin(provider, providerKey, function (result) {
    updateUser()    
});
```
