---
layout: doc
title: "AddUserClaim"
position: 5 
categories: 
tags:
---

## Description
Предоставляет возможность добавить пользователю системы утверждение (Claim) указанного типа, имеющее 
указанное значение

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic AddUserClaim(string userName, string claimType, string claimValue)
```

`userName`

Логин пользователя системы, которому устанавливается значение Claim

`claimType`

Тип утверждения, значение которого устанавливается пользователю системы

`claimValue`

Устанавливаемое значение утверждения

## Example

```csharp
var result = api.AddUserClaim(user,"ApplicationOrganization","TestOrganization").ToString()

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"ValidationMessage": "Claim added successfully",
	"IsValid": true
}
```