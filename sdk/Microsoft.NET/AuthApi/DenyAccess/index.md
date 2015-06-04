---
layout: doc
title: "DenyAccess"
position: 4 
categories: 
tags:
---

## Description
Установить запрет пользователю на указанное действие для указанного ресурса.

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
public dynamic DenyAccess(string userName, string application, string documentType = null, string service = null, string instanceId = null)
```

`userName` 

Логин пользователя, которому устанавливается запрет на операции с ресурсами.

`application`

Идентификатор приложения, к которому относится тип документа (documentType), для которого устанавливается 
запрет.

`documentType`

Идентификатор типа документа, к которому относится служба (service), для которой устанавливается 
запрет

`service`

Наименование службы, для вызова которой устанавливается запрет

`instanceId` 

Идентификатор экземляра документа, для которого устанавливается запрет на вызов службы, 
указанной в параметре service

## Example

```csharp
api.DenyAccess(user, "Gameshop", "UserProfile", "GetDocument").ToString()

Сonsole.WriteLine(result);
```

## Result
```js
{
   "IsValid" : true
}
```
