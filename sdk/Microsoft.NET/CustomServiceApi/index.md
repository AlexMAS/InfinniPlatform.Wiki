---
layout: doc
title: "CustomServiceApi"
position: 
categories: 
tags:
---

Работа с объектом CustomServiceApi

## Description
Определяет операции для работы с сервисами, описанными пользователем в приложении (
пользовательскими сервисами). 

## Constructor
```csharp
public InfinniCustomServiceApi(string server, string port, string version);
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

var api = new InfinniCustomServiceApi(InfinniSessionServer, InfinniSessionPort, InfinniSessionVersion);

```
### Methods

Наименование | Описание |
-------------|----------|
[ExecuteAction](ExecuteAction)  | Выполнить вызов пользовательского сервиса |