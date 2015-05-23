---
layout: doc
title: "DownloadFile"
position: 1 
tags:
---

Выгружает бинарный файл с сервера.

# Description

Предоставляет возможность выгрузки бинарных данных с сервера с указанием связанного с ними поля ссылки документа.

# Syntax

```csharp
dynamic DownloadFile(string application, string documentType, string instanceId, string fieldName)
```

## Parameters

`application`

Идентификатор приложения, к которому принадлежат документы указанного типа.

`documentType`

Идентификатор типа документа.

`instanceId`

Идентификатор экземпляра документа, в поле которого установлена ссылка на сохраненный файл.

`fieldName`

Наименование поля ссылки в документе.

## Returns

<Описание возвращаемого значения>.

# Examples

```csharp
var result = _fileApi.DownloadFile("Gameshop", "UserProfile", instanceId, "Avatar");
```
