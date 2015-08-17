---
layout: doc
title: "InsertRegister"
position: 17
categories: 
tags:
---

## Description
Предоставляет возможность добавления нового регистра в хранилище метаданных.
При этом не происходит никакой дополнительной обработки данных.

## Syntax
```csharp
public dynamic InsertRegister(dynamic register, string version, string configName)
```

### Parameters

`register`

Экземпляр добавляемого регистра

`version`

Семантическая версия конфигурации (например, "1.0.0.0").

`configName`

Наименование объекта конфигурации


## Example


Пример запроса метаданных:

```csharp
dynamic register = api.CreateRegister("2.0.0.0","TestConfig1");
register.Name = "TestRegister";

api.InsertRegister(register, "2.0.0.0","TestConfig1");
```

При успешном выполнении запроса возвращается статус 200 ОК