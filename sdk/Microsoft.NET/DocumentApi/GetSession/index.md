---
layout: doc
title: "GetSession"
position: 6
categories: 
tags:
---

## Получение списка документов для указанной клиентской сессии

## Description
Возвращает список документов, присоединенных к указанной клиентской сессии.
Если сессия не существует, создается новая сессия и возвращается пустой список документов.

## Syntax

```csharp
public dynamic GetSession(string sessionId);
```

`sessionId`

Идентификатор клиентской сессии на сервере.

## Example
```csharp
api.GetSession(session);
```

## Returns
```js
{
	"Items": [{
		"ConfigId": "gameshop",
		"DocumentId": "catalogue",
		"Document": {
			"Id": "eea03040-9582-447b-b527-e0da2075da7d",
			"Name": "DiabloIII",
			"Price": 1800
		},
	},
	{
		"ConfigId": "gameshop",
		"DocumentId": "catalogue",
		"Document": {
			"Id": "3f3f92f5-5378-4893-a797-4a35c54752fc",
			"Name": "Wolfenstein: NewOrder",
			"Price": 999
		},
	}]
}
```
