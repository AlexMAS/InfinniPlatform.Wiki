---
layout: doc
title: "DetachFile"
position: 12
tags:
---

Отсоединяет файл от указанной сессии.

# Syntax

```csharp
void DetachFile(string session, string instanceId, string fieldName)
```

## Parameters

`session`

Идентификатор сессии, к которой присоединяется указанный файл.

`instanceId`

Идентификатор экземпляра документа, с полем которого увязан присоединяемый файл.

`fieldName`

Наименование поля схемы документа типа `binary`, с которым связан сохраняемый файл.

# Exceptions

[`ArgumentException1`](../url)

Если сессия с таким идентификатором не существует.

[`ArgumentException1`](../url)

Если документ с указанным идентификатором не существует.

# Examples

```csharp
documentApi.DetachFile(sessionId, instanceId, "Avatar");
```
