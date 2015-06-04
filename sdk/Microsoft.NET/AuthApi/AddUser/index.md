---
layout: doc
title: "AddUser"
position: 0 
categories: 
tags:
---

## Description
Предоставляет возможность добавить пользователя системы

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic AddUser(string userName, string password)
```

`userName`

Логин создаваемого пользователя системы

`password`

Пароль создаваемого пользователя системы

## Example

```csharp
var result = api.AddUser(userName, userPassword).ToString();

Сonsole.WriteLine(result);
```

## Result
```js
{
	"UserInfo": {
		"UserName": "Admin",
		"Roles": [{
			"Id": "71276b87-ec89-4332-91b5-13f718f0c959",
			"DisplayName": "System administrator"
		}],
		"Logins": [],
		"Claims": []
	},
	"IsValid": true
}
```