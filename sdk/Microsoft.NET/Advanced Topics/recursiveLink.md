---
layout: doc
title: "Recursive links problem"
position: 
categories: 
tags:
---

Получение документов, содержащих ссылки на документ того же типа.

## Description
Если в схеме документа присутствует ссылка на документ того же самого типа, то ссылка на этот
документ не будет разрешена при выборке документов вследствие невозможности анализа схемы ссылки из-за
наличия рекурсии.
Таким образом, в этом случае не имеет значения тип хранения ссылки документа, ссылка в любом 
случае не будет разрешена.

## Example

В качестве примера рассмотрим документ "Catalogue" из тестового приложения "Gameshop"
Этот документ имеет следующую JSON-схему:

```js
{
   "Type": "Object",
   "Caption": "Schema",
   "Properties": {  
	...    
	"SimilarGames": {
     "Caption": "Похожие игры",
     "Type": "Array",
     "Items": {
      "Type": "Object",
      "TypeInfo": {
       "DocumentLink": {
        "ConfigId": "Gameshop",
        "DocumentId": "Catalogue",
        "Resolve": true
       }
      },
      "Properties": {}
     }
    }
   }
}
```

Поле SimilarGames схемы содержит ссылку на массив документов того же типа "Catalogue".
Несмотря на то, что в метаданных ссылки указано значение "Resolve" = true, разрешение
ссылки не будет выполнено вследствие наличия рекурсии.

### Document link example 
```js
{
	SimilarGames =	
	[
		{
			Id : "622E92D1-F453-4838-9892-030865F90036",
			DisplayName : "GTA V Ultimate Edition"
		}
	]
}
```

### Query result
```js
{
	SimilarGames =	 
	[
		{
			Id : "622E92D1-F453-4838-9892-030865F90036",
			DisplayName : "GTA V Ultimate Edition"
		}
	]
}
```