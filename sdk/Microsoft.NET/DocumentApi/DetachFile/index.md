---
layout: doc
title: "DetachFile"
position: 12
categories: 
tags:
---

## Description
Отсоединить файл от указанной сессии

## Syntax

```csharp
public void DetachFile(string session, string instanceId, string fieldName);
```

`session`

Идентификатор сессии, к которой присоединяется указанный файл. Если сессия с таким идентификатором
не существует, будет вызвано исключение.

`instanceId`

Идентификатор экземпляра документа, с полем которого увязан присоединяемый файл. Если документ с 
указанным идентификатором не существует, будет вызвано исключение.

`fieldName`

Наименование поля схемы документа типа 'binary' с которым связан сохраняемый файл


## Example

```csharp
documentApi.DetachFile(sessionId, instanceId, "Avatar");
```