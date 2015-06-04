---
layout: doc
title: "DeleteUserRole"
position: 11 
categories: 
tags:
---

## Description
Предоставляет возможность удаления роли у указанного пользователя системы.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic DeleteUserRole(string userName, string roleName)
```

`userName`

Логин пользователя системы, у которого необходимо удалить роль

`roleName`

Наименование роли, удаляемой у пользователя

## Example

```csharp
var result = api.DeleteUserRole(user, roleName).ToString()

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"IsValid": true,
	"ValidationMessage": "User role deleted."
}
```