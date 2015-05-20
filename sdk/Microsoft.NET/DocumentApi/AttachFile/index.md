---
layout: doc
title: "AttachFile"
position: 11
categories: 
tags:
---

## Description
Присоединить файл к указанной сессии

## Syntax

```csharp
public void AttachFile(string session, string instanceId, string fieldName, string fileName, Stream fileStream);
```

`session`

Идентификатор сессии, к которой присоединяется указанный файл. Если сессия с таким идентификатором
не существует, будет вызвано исключение.

`instanceId`

Идентификатор экземпляра документа, с полем которого увязан присоединяемый файл. Если документ с 
указанным идентификатором не существует, будет вызвано исключение.

`fieldName`

Наименование поля схемы документа типа 'binary' с которым связан сохраняемый файл

`fileName`

Наименование сохраняемого файла

`fileStream`

Поток данных сохраняемого файла

## Example

```csharp
using (var fileStream = new FileStream(@"TestData\avatar.gif", FileMode.Open))
{
	_documentApi.AttachFile(sessionId, instanceId, "Avatar", "avatar.gif", fileStream);
}
```