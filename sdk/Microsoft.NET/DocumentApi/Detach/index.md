---
layout: doc
title: "Detach"
position: 8
categories: 
tags:
---

## Отсоединение документа от сессии

## Описание
Отсоединяет указанный документ от клиентской сессии с указанным идентификатором.
Если сессия с указанным идентификатором не найдена, вызов игнорируется.

## Синтаксис
```csharp
public dynamic Detach(string sessionId, string instanceId);
```

`sessionId`

Идентификатор сессии, от которой нужно отсоединить документ.

`instanceId`

Идентификатор документа, которого следует отсоединить от сессии.

## Пример
```csharp

string session = "912497D8-651A-4C13-9F39-6EE6A3F42C31";
string failObjectId = "D46D6B0A-7551-4F92-8932-454BF61BA7DB";

api.Detach(session, failObjectId);
```