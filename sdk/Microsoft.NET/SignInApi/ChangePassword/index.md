---
layout: doc
title: "ChangePassword"
position: 2 
tags:
---

Изменяет пароль пользователя.

# Syntax

```csharp
dynamic ChangePassword(string userName, string oldPassword, string newPassword)
```

## Parameters

`userName`

Логин пользователя.

`oldPassword`

Старый пароль пользователя.

`newPassword`

Новый пароль пользователя.

## Returns

<Описание возвращаемого значения>.

# Exceptions
 
[`ArgumentException1`](../url)
 
<Описание исключения>.

# Examples

```csharp
dynamic changePasswordResult = _signInApi.ChangePassword("SomeUser", "SomeOldPassword", "SomeNewPassword");
```
