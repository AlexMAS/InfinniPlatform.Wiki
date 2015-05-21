---
layout: doc
title: "FileApi"
position: 0 
categories: 
tags:
---

Работа с объектом InfinniFileApi

## Description
Предоставляет операции для загрузки и выгрузки бинарных данных

## Constructor
```csharp
public InfinniFileApi(string server, string port, string version)
```

`server`

Адрес сервера

`port`

Порт сервера

`version`

Версия приложения

## Example
```csharp
string InfinniSessionPort = "9900";
string InfinniSessionServer = "localhost";
string InfinniSessionVersion = "1";

var api = new InfinniFileApi(InfinniSessionServer, InfinniSessionPort, InfinniSessionVersion);
```

### Methods
Наименование | Описание |
-------------|----------|
[UploadFile](UploadFile)  | Загрузка файла на сервер |
[DownloadFile](DownloadFile) |Выгрузка файла с сервера |
