---
layout: default
title: "Сервисы подсистемы авторизации (Authorization API)"
position: 6
categories: 
tags: 
---

### Аутентификация (Вход в систему) пользователя с использованием внутреннего хранилища пользователей системы

|Атрибут|Реализация|
|-------|----------|
|Метод запроса с использованием API на C#|```
new SignInApi().SignInInternal("Admin", "Admin", false);
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/signin

```

```
{
    "id" : null,
    "changesObject" : {
        "UserName" : "TestUser",
        "Password" : "Password1",
        "Remember" : true
	 },
    "replace" : false
}
```

|
|Возвращаемый результат|```
 
```

|

### Выход из системы пользователя с использованием внутреннего хранилища пользователей

|Атрибут|Реализация|
|-------|----------|
|Метод запроса с использованием API на C#|```
new SignInApi().SignOutInternal();
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/signout
```

```
{
    "id" : null,
    "changesObject" : {
     },
    "replace" : false
}
```

|
|Возвращаемый результат|```
 
```

|

### Добавление нового пользователя системы

|Атрибут|Реализация|
|-------|----------|
|Метод запроса с использованием API на C#|```
new AclApi().AddUser("TestUser", "Password1");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/adduser
```

```
{
    "id" : null,
    "changesObject" : {
        "UserName" : "TestUser",
        "Password" : "Password1"
    },
    "replace" : false
}
```

|
|Возвращаемый результат|```
{
    "ValidationMessage" : "User created successfully",
    "IsValid" : true
}
```

|

### Удаление существующего пользователя

|Атрибут|Реализация|
|-------|----------|
|Метод запроса с использованием API на C#|```
new AclApi().RemoveUser("TestUser");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/removeuser
```

```
{
    "id" : null,
    "changesObject" : {
        "UserName" : "TestUser"        
    },
    "replace" : false
}
```

|
|Возвращаемый результат|```
{
    "IsValid": true,
    "ValidationMessage": "User deleted"
}
```

|

### Получение списка ролей всех пользователей системы

|Метод запроса с использованием API на C#|```
new AclApi().GetUserRoles();
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/getuserroles 
```

```
{
    "id" : null,
    "changesObject" : null,
    "replace" : false
}
```

|
|Возвращаемый результат|```
[{
    "Name": "TestRole",
    "Caption": "TestRole",
    "Description": "TestRole",
    "Id": "55cc763e-4649-40f7-a7db-3d87f6bfddea",
    "TimeStamp": "2014-10-14T16:16:02.2766601+06:00"
}]
```

|

### Удаление роли у пользователя

|Метод запроса с использованием API на C#|```
new AclApi().RemoveUserRole("TestUser","TestRole");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/removeuserrole 
```

```
{
    "id": null,
    "changesObject": {
        "UserName": "TestUser",
        "RoleName": "TestRole"
    },
    "replace": false
}
```

|
|Возвращаемый результат|```
{
	"IsValid" : "true",
	"ValidationMessage" : "user deleted."
}
```

|

### Создание новой роли

|Метод запроса с использованием API на C#|```
new AclApi().AddRole("TestRole","Тестовый заголовок","Тестовое описание");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/addrole
```

```
{
    "id" : null,
    "changesObject" : {
        "RoleName" : "TestRole",
        "RoleCaption" : "TestRole",
        "RoleDescription" : "TestRole"
    },
    "replace" : false
}
```

|
|Возвращаемый результат|```
{
	"IsValid" : "true",
	"ValidationMessage" : "Role added."
}
```

|

### Удалить существующую роль

|Метод запроса с использованием API на C#|```
new AclApi().RemoveRole("TestRole");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/addrole
```

```
{
    "id" : null,
    "changesObject" : {
        "RoleName" : "TestRole",
    },
    "replace" : false
}
```

|
|Возвращаемый результат|```
{
	"IsValid" : "true",
	"ValidationMessage" : "Role removed."
}
```

|

### Предоставление доступа

|Метод запроса с использованием API на C#|```
new AclApi().GrantAccess("TestUser", "Demography", "Patient");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/applyaccess 
```

```
{
    "id": null,
    "changesObject": {
        "Configuration": "Demography",
        "Metadata": "Patient",
        "Action": null,
        "RecordId": null,
        "UserName": "TestUser1",
        "Result": true
    },
    "replace": false
}
```

|
|Возвращаемый результат|```
{
    "Id": "36445adf-95e0-4ca0-984d-7211422dc1cf",
    "Configuration": "Demography",
	"Metadata": "Patient",
    "UserName": "TestUser1",
    "Result": true,
    "Version": "version_restfulapi"
}
```

|

### Запрет доступа

|Метод запроса с использованием API на C#|```
new AclApi().DenyAccess("TestUser", "Demography", "Patient");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/applyaccess 
```

```
{
    "id": null,
    "changesObject": {
        "Configuration": "Demography",
        "Metadata": "Patient",
        "Action": null,
        "RecordId": null,
        "UserName": "TestUser1",
        "Result": false
    },
    "replace": false
}
```

|
|Возвращаемый результат|```
{
    "Id": "36445adf-95e0-4ca0-984d-7211422dc1cf",
    "Configuration": "Demography",
	"Metadata": "Patient",
    "UserName": "TestUser1",
    "Result": false,
    "Version": "version_restfulapi"
}
```

|

### Запрет доступа для всех пользователей

|Метод запроса с использованием API на C#|```
new AclApi().DenyAccessAll("Demography", "Patient");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/applyaccess 
```

```
{
    "id": null,
    "changesObject": {
        "Configuration": "Demography",
        "Metadata": "Patient",
        "Action": null,
        "RecordId": null,
        "UserName": "Default",
        "Result": false
    },
    "replace": false
}
```

|
|Возвращаемый результат|```
{
    "Id": "36445adf-95e0-4ca0-984d-7211422dc1cf",
    "Configuration": "Demography",
	"Metadata": "Patient",
    "UserName": "Default",
    "Result": false,
    "Version": "version_restfulapi"
}
```

|

Предоставление доступа и запрет доступа для ролей осуществляется аналогично предоставлению доступа и запрета доступа для пользователей, только вместо имени пользователя указывается имя роли.

### Предоставление роли администратора

|Метод запроса с использованием API на C#|```
new AdminApi().GrantAdminRole("TestUser");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/grantadminrole 
```

```
{
    "id": null,
    "changesObject": {
        "UserName": "TestUser"
    },
    "replace": false
}
```

|
|Возвращаемый результат|```
{
    "Id": "0699e727-907c-4720-9579-d641fa4e34f6",
    "UserName": "TestUser",
    "Version": "version_restfulapi"
}
```

|

### Запрет роли администратора

|Метод запроса с использованием API на C#|```
new AdminApi().DenyAdminRole("TestUser");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/denyadminrole 
```

```
{
    "id": null,
    "changesObject": {
        "UserName": "TestUser"
    },
    "replace": false
}
```

|
|Возвращаемый результат|```
{
    "Id": "0699e727-907c-4720-9579-d641fa4e34f6",
    "UserName": "TestUser",
    "Version": "version_restfulapi"
}
```

|

### Смена пароля пользователя

|Метод запроса с использованием API на C#|```
new SignInApi().ChangePassword("TestUser","Password1","Password2");
```

|
|REST запрос с клиента|```
POST http://<serverName>:<port>/RestfulApi/StandardApi/authorization/changepassword 
```

```
{
    "id": null,
    "changesObject": {
        "UserName": "TestUser",
        "OldPassword": "Password1",
        "NewPassword": "Password2"
    },
    "replace": false
}
```

|
|Возвращаемый результат|```
{
    "ValidationMessage": "User password updated successfully",
    "IsValid": true
}
```

|

