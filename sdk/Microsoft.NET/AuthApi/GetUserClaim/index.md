---
layout: doc
title: "GetUserClaim"
position: 7 
categories: 
tags:
---

## Description
Предоставляет возможность получить у пользователя системы установленное значение утверждения (Claim) указанного типа.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic GetUserClaim(string userName, string claimType)
```

`userName`

Логин пользователя системы, которому устанавливается значение Claim

`claimType`

Тип утверждения, значение которого устанавливается пользователю системы


## Example

```csharp
var result = api.GetUserClaim(user,claimType).ToString()

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"ClaimType": "OrganizationId",
	"UserName": "NewUser_1f9b3800-16ba-414c-b0cc-0583cbffe419",
	"ClaimValue": "TestOrganization"
}
```