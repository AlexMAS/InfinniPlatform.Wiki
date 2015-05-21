---
layout: doc
title: "DocumentApi"
position: 0 
categories: 
tags:
---

Работа с объектом InfinniDocumentApi

## Description
Определяет операции для создания, сохранения, получения, удаления документов и создания и сохранения 
сессий работы с документами. 

## Constructor
```csharp
public InfinniDocumentApi(string server, string port, string version);
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

var api = new InfinniDocumentApi(InfinniSessionServer, InfinniSessionPort, InfinniSessionVersion);

```

### Methods

Наименование | Описание |
-------------|----------|
[GetDocument](GetDocument)  | Получить список документов |
[SetDocument](SetDocument)  | Сохранить документ |
[DeleteDocument](DeleteDocument) | Удалить документ |
[UpdateDocument](UpdateDocument) | Обновить документ |
[CreateSession](CreateSession) | Создать сессию |
[GetSession](GetSession) | Получить документы сессии |
[Attach](Attach) | Присоединить документ к сессии |
[Detach](Detach) | Отсоединить документ от сессии |
[SaveSession](SaveSession) | Сохранить сессию |