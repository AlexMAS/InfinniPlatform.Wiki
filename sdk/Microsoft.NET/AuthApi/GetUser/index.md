---
layout: doc
title: "GetUser"
position: 2 
categories: 
tags:
---

## Description
Предоставляет возможность получить пользователя системы с указанным идентификатором

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic GetUser(string userName)
```

`userName`

Логин пользователя системы, которого необходимо получить

## Example

```csharp
var result = api.GetUser(userName).ToString();

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"UserName": "NewUser_ba7fe32e-873c-4e00-8672-6fe00dfba926",
	"PasswordHash": "AHygX+uVvel0l2Gand20jDyeDrHFyASvw5mBf0RfVhXXD0L/jdR7+b7tI/9vIDpbyw==",
	"SecurityStamp": "3f8e052b-408d-4159-8698-9365d2929858",
	"Roles": [],
	"Claims": [],
	"Logins": [],
	"Id": "82066f77-3a93-49b1-a643-fa5a6a19bf14",
	"__ConfigId": "authorization",
	"__DocumentId": "userstore",
	"TimeStamp": "2015-06-04T10:38:48.8080132+05:00"
}
```