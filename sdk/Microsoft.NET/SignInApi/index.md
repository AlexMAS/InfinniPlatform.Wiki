---
layout: doc
title: "SignInApi"
position: 0 
categories: 
tags:
---

Работа с объектом InfinniSignInApi

## Description

Определяет операции для регистрации сессии пользователя, смены пользователя и 
смены пароля.

## Constructor
```csharp
public InfinniSignInApi(string server, string port, string version);
```


`server`

Наименование удаленного сервера.

`port`

Порт удаленного сервера.

`version`

Версия сервисов для подключения.

## Example
```csharp
string InfinniSessionPort = "9900";
string InfinniSessionServer = "localhost";
string InfinniSessionVersion = "1";

var api = new InfinniSignInApi(InfinniSessionServer, InfinniSessionPort, InfinniSessionVersion);
```

### Methods

Наименование | Описание |
-------------|----------|
[SignInInternal](SignInInternal)  | Зарегистрироваться во внутреннем хранилище пользователей |
[SignOut](SignOut)  | Сменить пользователя |
[ChangePassword](ChangePassword)  | Сменить пароль пользователя |