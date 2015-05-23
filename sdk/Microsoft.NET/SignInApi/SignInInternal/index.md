---
layout: doc
title: "SignInInternal"
position: 0 
tags:
---

Регистрирует пользователя в системе.

# Syntax

```csharp
dynamic SignInInternal(string userName, string password, bool remember)
```

## Parameters

`userName` 

Логин пользователя.

`password`

Пароль пользователя.

`remember`

Запомнить пользователя.

## Returns

<Описание возвращаемого значения>.
 
# Exceptions
 
[`ArgumentException1`](../url)
 
<Описание исключения>.

# Examples

```csharp
dynamic signResult = signInApi.SignInInternal("Admin", "Admin", true);
```
