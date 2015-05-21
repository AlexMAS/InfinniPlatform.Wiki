---
layout: doc
title: "UploadFile"
position: 0 
categories: 
tags:
---

## Description
Предоставляет возможность загрузки бинарных данных на сервер с указанием связанного с ними
поля ссылки документа.

## Syntax
```csharp
public dynamic UploadFile(string application, string documentType, string instanceId, 
	string fieldName, string fileName, Stream fileStream)
```

`application`

Идентификатор приложения, к которому принадлежат документы указанного типа

`documentType`

Идентификатор типа документа

`instanceId`

Идентификатор экземпляра документа, в поле которого устанавливается ссылка на сохраненный файл

`fieldName`

Наименование поля ссылки в документе

`fileName`

Наименование сохраняемого файла

`fileStream`

Поток данных для сохранения

## Example

```csharp
using (var fileStream = new FileStream(@"TestData\avatar.gif", FileMode.Open))
{
	fileApi.UploadFile("Gameshop", "UserProfile", profileId, "Avatar", "avatar.gif", fileStream);
}
```