---
layout: doc
title: "ExecuteAction"
position:  
categories: 
tags:
---

## Description
Предоставляет возможность вызова пользовательского сервиса.

## Syntax
```csharp
public dynamic ExecuteAction(string application, string documentType, string service, dynamic body)
```

`application`

Идентификатор приложения.

`documentType`

Идентификатор типа документа.

`service`

Идентификатор пользовательского сервиса.

`body`

Тело запроса, необходимое для использования в точках расширения пользовательского сервиса.

## Example

```csharp

//добавляем обзор игры с указанием количества лайков, изначально равных 0
dynamic review = new
{
	Game = new
	{
		Id = Guid.NewGuid().ToString(),
		DisplayName = "X-Com:Enemy Within"
	},
	Likes = 0
};

string docId = _documentApi.SetDocument("Gameshop", "review", Guid.NewGuid().ToString(), review).Id.ToString();

var customServiceApi = new InfinniCustomServiceApi(InfinniSessionServer, InfinniSessionPort, InfinniSessionVersion);

//поставить Like статье о игре 
var result = customServiceApi.ExecuteAction("Gameshop", "Review", "Like", new
            {
                DocumentId = docId
            });

Сonsole.WriteLine(result);
```

## Result
```js
﻿{
	"IsValid": true,
}
```