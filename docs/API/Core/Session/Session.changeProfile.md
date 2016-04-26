---
layout: doc
title: "Session.changeProfile"
position: 3
---

Изменяет персональную информацию текущего пользователя.

# Syntax

```js
Session.changeProfile(displayName[, description[, resultCallback[, errorCallback]]]);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`displayName`|`String`|Отображаемое имя пользователя.|
|`description`|`String`|Описание пользователя.|
|`successCallback`|`Function`|Обработчик результата выполнения операции.|
|`errorCallback`|`Function`|Обработчик ошибки выполнения операции.|

# Returns

Нет

# Examples

```js
session.changeProfile('user name');
```
