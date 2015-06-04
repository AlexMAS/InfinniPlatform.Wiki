---
layout: doc
title: "AuthApi"
position:  
categories: 
tags:
---

Работа с объектом AuthApi

## Description
Определяет операции создания, изменения и удаления пользователей, ролей пользователей и 
прав пользователей

## Constructor
```csharp
public AuthApi(string server, string port, string version)
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

var api = new InfinniDocumentApi(InfinniSessionServer, InfinniSessionPort, InfinniSessionVersion);

```

### Methods

Наименование | Описание |
-------------|----------|
[AddUser](AddUser)  | Добавить пользователя системы |
[DeleteUser](DeleteUser) | Удалить пользователя системы |
[GetUser](GetUser) | Получить пользователя системы |
[GrantAccess](GrantAccess) | Установить разрешения для пользователя |
[DenyAccess](DenyAccess) | Установить запреты для пользователя |
[AddUserClaim](AddUserClaim) | Добавить пользовательский Claim (Утверждение) |
[GetUserClaim](GetUserClaim) | Получить значение указанного типа Claim для указанного пользователя |
[DeleteUserClaim](DeleteUserClaim) | Удалить значение Claim указанного типа для указанного пользователя |
[AddRole](AddRole) | Добавить роль пользователя |
[DeleteRole](DeleteRole) | Удалить роль пользователя |
[AddUserRole](AddUserRole) | Добавить указанному пользователю указанную роль |
[DeleteUserRole](DeleteUserRole) | Удалить у указанного пользователя указанную роль |

