---
layout: doc
title: "SaveSession"
position: 9
categories: 
tags:
---

## Фиксация сессии

## Описание
Сохраняет присоединенные к сессии документы на сервере, после чего сессия удаляется.

## Синтаксис
```csharp
public dynamic SaveSession(string sessionId);
```

`sessionId`

Идентификатор фиксируемой сессии.

## Пример
```csharp
string session = "912497D8-651A-4C13-9F39-6EE6A3F42C31";

api.SaveSession(session);
```

