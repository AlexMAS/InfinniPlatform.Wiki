---
layout: doc
title: "AttachFile"
position: 11
tags:
---

Присоединяет файл к указанной сессии.

# Syntax

```csharp
void AttachFile(string session, string instanceId, string fieldName, string fileName, Stream fileStream);
```

## Parameters

`session`

Идентификатор сессии, к которой присоединяется указанный файл.

`instanceId`

Идентификатор экземпляра документа, с полем которого увязан присоединяемый файл.

`fieldName`

Наименование поля схемы документа типа `binary`, с которым связан сохраняемый файл.

`fileName`

Наименование сохраняемого файла.

`fileStream`

Поток данных сохраняемого файла.

# Exceptions

[`Exception1`](../url)

Если документ с указанным идентификатором не существует.

[`Exception2`](../url)

Если сессия с указанным идентификатором не существует.

# Examples

```csharp
using (var fileStream = new FileStream(@"TestData\avatar.gif", FileMode.Open))
{
	_documentApi.AttachFile(sessionId, instanceId, "Avatar", "avatar.gif", fileStream);
}
```
