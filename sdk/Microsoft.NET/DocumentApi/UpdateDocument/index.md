---
layout: doc
title: "UpdateDocument"
position: 4 
categories: 
tags:
---

## Description
Предоставляет возможность частичного обновления экземпляра документа.
При этом происходит только изменение полей, указанных в переданном объекте изменений.

## Syntax
```csharp
public void UpdateDocument(string applicationId, string documentType, string instanceId, 
	object changesObject);
```

`applicationId` 

Идентификатор приложения, к которому принадлежат метаданные документа указанного типа.

`documentType`

Идентификатор типа документа, экземпляр которого подлежит частичному изменению.

`instanceId`

Идентификатор экземпляра обновляемого документа.

`changesObject`

Экземпляр объекта, содержащего изменения данных.

## Example

Сохраненный документ в базе:

```js
var documentObject = new
{
	Name = "gta V",
	Price = 2000,
	Availability = new
	{
		Available = false,
		SaleStartDate = new DateTime(2014, 04, 14)
	}
};
```

Код изменения данных документа.

```csharp
var changesObject = new
{
	Name = "gta V ultimate edition",
	Availability = new
	{
		Available = true,
	}
};

api.UpdateDocument("gameshop", "catalogue", result, changesObject);
```

Результат изменения документа (актуальная версия документа в базе).

```js
{
	Name = "gta V ultimate edition",
	Price = 2000,
	Availability = new
	{
		Available = true,
	}
}
```
