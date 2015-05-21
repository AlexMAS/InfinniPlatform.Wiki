---
layout: doc
title: "SignInInternal"
position: 0 
categories: 
tags:
---

## Description
Предоставляет возможность регистрации пользователя в системе

## Syntax
```csharp
public dynamic SignInInternal(string userName, string password, bool remember);
```

`userName` 

Логин пользователя

`password`

Пароль пользователя

`remember`

Запомнить пользователя

## Example
```csharp
dynamic signResult = signInApi.SignInInternal("Admin", "Admin", true);
```
