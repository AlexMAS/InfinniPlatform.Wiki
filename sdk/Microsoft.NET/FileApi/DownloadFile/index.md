---
layout: doc
title: "DownloadFile"
position: 1 
categories: 
tags:
---

## Description
Предоставляет возможность выгрузки бинарных данных с сервера с указанием связанного с ними
поля ссылки документа.

## Syntax
```csharp
public dynamic DownloadFile(string application, string documentType, 
	string instanceId, string fieldName)
```

`application`

Идентификатор приложения, к которому принадлежат документы указанного типа

`documentType`

Идентификатор типа документа

`instanceId`

Идентификатор экземпляра документа, в поле которого установлена ссылка на сохраненный файл

`fieldName`

Наименование поля ссылки в документе

## Example

```csharp
using (var fileStream = new FileStream(@"TestData\avatar.gif", FileMode.Open))
{
	fileApi.DownloadFile("Gameshop", "UserProfile", profileId, "Avatar");
}
```