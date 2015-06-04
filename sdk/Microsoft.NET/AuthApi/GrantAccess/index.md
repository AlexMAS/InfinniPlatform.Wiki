---
layout: doc
title: "GrantAccess"
position: 3 
categories: 
tags:
---

## Description
Предоставить пользователю разрешение на указанное действие для указанного ресурса.

Ресурс в системе может быть описан совокупностью четырех параметров:

* application - идентификатор приложения
* documentType - тип документа
* service - сервис
* instanceId - идентификатор экземляра документа

Подробнее см. [Авторизация пользовательских ресурсов](../../Advanced Topics/Authorizing user resources)

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public dynamic GrantAccess(string userName, string application, string documentType = null, string service = null, string instanceId = null)
```

`userName` 

Логин пользователя, которому предоставляется разрешение на операции с ресурсами.

`application`

Идентификатор приложения, к которому относится тип документа (documentType), для которого предоставляется 
разрешение.

`documentType`

Идентификатор типа документа, к которому относится служба (service), для которой предоставляется 
разрешение

`service`

Наименование службы, для вызова которой предоставляется разрешение

`instanceId` 

Идентификатор экземляра документа, для которого предоставляется разрешение на вызов службы, 
указанной в параметре service

## Example

```csharp
api.GrantAccess(user, "Gameshop", "UserProfile", "GetDocument").ToString()

Сonsole.WriteLine(result);
```

## Result
```js
{
   "IsValid" : true
}
```
