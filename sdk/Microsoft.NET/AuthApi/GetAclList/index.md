---
layout: doc
title: "GetAclList"
position: 12 
categories: 
tags:
---

## Description
Предоставляет возможность получения списка объектов системы прав доступа по указанному фильтру.

**Важно:** Перед операциями с пользователем необходимо авторизоваться в системе под пользователем
с правами администратора. Подробнее см. [Аутентификация пользователей в системе](../../SignInApi/SignInInternal).

## Syntax
```csharp
public IEnumerable<dynamic> GetAclList(
            AclType aclType,
            Action<FilterBuilder> filter,
            int pageNumber,
            int pageSize,
            Action<SortingBuilder> sorting = null)
```

`aclType` 

Тип объекта ACL, который требуется получить

* AclType.User - пользователь 
* AclType.Role - роль пользователя

`filter` 

Конструктор фильтра объектов ACL указанного типа

`pageNumber`

Номер страницы

`pageSize`

Номер страницы

`sorting`

Конструктор сортировки объектов ACL указанного типа

## Example

```csharp
var result = api.GetAclList(AclType.User, f => f.AddCriteria(cr => cr.Property("UserName").IsEquals(user)), 0, 1).ToString();

Сonsole.WriteLine(result);
```

## Result
```js
[
  {
    "Id": "eb25ae1e-b018-46f4-b04d-8dbe6e57de80",
    "UserName": "NewUser_710b3734-ef20-4791-afa3-a5d249bd2b27",
    "__ConfigId": "administration",
    "__DocumentId": "user",
    "TimeStamp": "2015-06-04T14:23:52.1553605+05:00"
  }
]
```

