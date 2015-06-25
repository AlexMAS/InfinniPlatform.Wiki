---
layout: doc
title: "AuthApi"
position:  
categories: 
tags:
---

## Description
Определяет операции создания, изменения и удаления пользователей, ролей пользователей и 
прав пользователей

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
[GetAclList](GetAclList) | Получить список ресурсов, на которые могут быть установлены права доступа |