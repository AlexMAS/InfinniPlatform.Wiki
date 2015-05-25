---
layout: doc
title: "ChangePassword"
position: 2 
categories: 
tags:
---

## Description
Предоставляет возможность смены пароля пользователя

## Syntax
```csharp
public dynamic ChangePassword(string userName, string oldPassword, string newPassword);
```

`userName`

Логин пользователя

`oldPassword`

Старый пароль пользователя

`newPassword`

Новый пароль пользователя

## Example
```csharp
dynamic changePasswordResult = _signInApi.ChangePassword("SomeUser", "SomeOldPassword", "SomeNewPassword");
```