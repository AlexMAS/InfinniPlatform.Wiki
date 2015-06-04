---
layout: doc
title: "DeleteUserClaim"
position: 6 
categories: 
tags:
---

## Description
Предоставляет возможность удалить у пользователя системы утверждение (Claim) указанного типа.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic DeleteUserClaim(string userName, string claimType)
```

`userName`

Логин пользователя системы, которому устанавливается значение Claim

`claimType`

Тип утверждения, значение которого устанавливается пользователю системы


## Example

```csharp
var result = api.DeleteUserClaim(user, "ApplicationOrganization").ToString()

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"ValidationMessage": "Claim removed successfully",
	"IsValid": true
}
```