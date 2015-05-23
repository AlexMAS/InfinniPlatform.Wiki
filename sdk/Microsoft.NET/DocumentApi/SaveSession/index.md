---
layout: doc
title: "SaveSession"
position: 9
tags:
---

Сохраняет документы из сессии на сервере.

# Description
Сохраняет присоединенные к сессии документы на сервере, после чего сессия удаляется.

# Syntax
```csharp
dynamic SaveSession(string sessionId)
```

## Parameters

`sessionId`

Идентификатор фиксируемой сессии.

## Returns

<Описание возвращаемого значения>.

# Examples
```csharp
string session = "912497D8-651A-4C13-9F39-6EE6A3F42C31";
api.SaveSession(session);
```
