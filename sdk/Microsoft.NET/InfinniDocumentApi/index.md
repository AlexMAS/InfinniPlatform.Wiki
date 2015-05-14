---
layout: doc
title: "InfinniDocumentApi"
position: 
categories: 
tags:
---

Работа с объектом InfinniDocumentApi

## Краткое описание
Определяет операции для создания, сохранения, получения, удаления документов и создания и сохранения 
сессий работы с документами. 

## Конструктор
```csharp
public InfinniDocumentApi(string server, string port, string version);
```

### server 
Наименование удаленного сервера

### port
Порт удаленного сервера

### version
Версия сервисов для подключения

## Примеры
```csharp
string InfinniSessionPort = "9900";
string InfinniSessionServer = "localhost";
string InfinniSessionVersion = "1";

var api = new InfinniDocumentApi(InfinniSessionServer, InfinniSessionPort, InfinniSessionVersion);

```
