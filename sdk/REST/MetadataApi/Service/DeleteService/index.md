---
layout: doc
title: "DeleteService"
position: 5
categories: 
tags:
---

## Description
Предоставляет возможность удаления существующих метаданных пользовательского сервиса.


## Syntax
```csharp
public dynamic DeleteService(string version, string configuration, string document, string service)
```

## Example

Пример запроса метаданных:

```csharp
api.DeleteService("TestService1");
```

При успешном выполнении запроса возвращается статус 200 ОК
