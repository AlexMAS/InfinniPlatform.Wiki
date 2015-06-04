---
layout: doc
title: "AddRole"
position: 8 
categories: 
tags:
---

## Description
Предоставляет возможность добавления новой роли пользователя.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic AddRole(string roleName)
```

`roleName`

Наименование добавляемой роли

## Example

```csharp
var result = api.AddRole(roleName).ToString()

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"IsValid": true,
	"ValidationMessage": "Role added."
}
```