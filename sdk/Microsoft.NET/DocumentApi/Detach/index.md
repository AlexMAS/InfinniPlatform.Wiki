---
layout: doc
title: "Detach"
position: 8
tags:
---

Отсоединеняет указанный документа от указанной сессии.

# Description
Отсоединяет указанный документ от сессии с указанным идентификатором. Если сессия с указанным идентификатором не найдена, вызов игнорируется.

# Syntax
```csharp
dynamic Detach(string sessionId, string instanceId)
```

## Parameters

`sessionId`

Идентификатор сессии, от которой нужно отсоединить документ.

`instanceId`

Идентификатор документа, которого следует отсоединить от сессии.

## Returns

<Описание возвращаемого значения>.

# Examples
```csharp
string session = "912497D8-651A-4C13-9F39-6EE6A3F42C31";
string failObjectId = "D46D6B0A-7551-4F92-8932-454BF61BA7DB";

api.Detach(session, failObjectId);
```
