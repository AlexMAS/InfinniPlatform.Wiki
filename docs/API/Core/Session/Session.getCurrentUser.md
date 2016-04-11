---
layout: doc
title: "Session.getCurrentUser"
position: 1
---

Возвращает информацию о текущем пользователе.

# Syntax

```js
Session.getCurrentUser(successCallback, errorCallback);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
var onSuccess = function (user) {
    console.log('Current user: %s', JSON.stringify(user));
};

var name = Session.getCurrentUser(onSuccess);
```

