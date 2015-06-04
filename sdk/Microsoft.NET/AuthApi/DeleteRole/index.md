---
layout: doc
title: "DeleteRole"
position: 9 
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующей роли пользователя.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic DeleteRole(string roleName)
```

`roleName`

Наименование удаляемой роли

## Example

```csharp
var result = api.DeleteRole(roleName).ToString()

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"IsValid": true,
	"ValidationMessage": "Role with name TestRole752e7486-289e-4547-9a48-a279c0d01505 deleted."
}
```