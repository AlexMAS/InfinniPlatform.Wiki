---
layout: doc
title: "DeleteUser"
position: 1 
categories: 
tags:
---

## Description
Предоставляет возможность удалить пользователя системы

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic DeleteUser(string userName)
```

`userName`

Логин удаляемого пользователя системы

## Example

```csharp
var result = api.DeleteUser(userName).ToString();

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"IsValid": true,
	"ValidationMessage": "User \"NewUser_4c66de90-baa8-468d-b390-6244b9157794\" deleted successfully"
}
```