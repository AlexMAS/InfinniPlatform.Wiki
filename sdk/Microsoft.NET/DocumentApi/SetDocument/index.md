---
layout: doc
title: "SetDocument"
position: 2
categories: 
tags:
---

## Description
Определяет метод сохранения документов в постоянное хранилище. Сохранение документов осуществляется,
учитывая схему документа, описанную в приложении при его создании или изменении. Для каждой версии
метаданных документов приложения существует собственная версия схемы данных. Каждый сохраняемый документ
должен соответствовать одной из ранее созданных версий метаданных этого документа. 
При сохранении документа соблюдаются [следующие правила проверки типов данных изменяемых полей]
(../../Advanced Topics/dataTypeChecking)

## Syntax

```csharp
public string SetDocument(string applicationId, string documentType, string documentId, object document);
```

`applicationId`

Идентификатор приложения, в котором объявлены метаданные документа указанного типа.

`documentType`

Идентификатор типа документа, метаданные которого объявлены в указанном приложении.

`documentId`

Идентификатор сохраняемого документа.

`document`

Экземпляр сохраняемого документа.

`returns`
Идентификатор сохраненного документа.


## Example

Сохранение документа:

```csharp

	var documentObject = new
	{
		Name = "gta vice city",
		Price = 100.50
	};
	
	var result = api.SetDocument("gameshop", "catalogue", Guid.NewGuid().ToString(), documentObject);
	
```