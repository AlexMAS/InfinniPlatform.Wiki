---
layout: doc
title: "Session.changeActiveRole"
position: 4
---

Изменяет активную роль текущего пользователя.

# Syntax

```js
Session.changeActiveRole(activeRole[, resultCallback[, errorCallback]]);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`activeRole`|`String`|Наименование роли.|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
session.changeActiveRole('admin', onSuccess, onError);
```
