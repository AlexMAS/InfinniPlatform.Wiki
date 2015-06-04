---
layout: doc
title: "AddUserRole"
position: 10 
categories: 
tags:
---

## Description
Предоставляет возможность добавления роли указанному пользователю системы.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic AddUserRole(string userName, string roleName)
```

`userName`

Логин пользователя системы, которому необходимо добавить роль

`roleName`

Наименование роли, устанавливаемой пользователю системы

## Example

```csharp
var result = api.AddUserRole(user, roleName).ToString()

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"IsValid": true,
	"ValidationMessage": "User role added."
}
```