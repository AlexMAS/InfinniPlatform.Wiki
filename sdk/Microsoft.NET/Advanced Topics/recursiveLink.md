---
layout: doc
title: "Recursive links problem"
position: 
categories: 
tags:
---
# Сценарий
Получение документов, содержащих ссылки на документ того же типа.

# Особенности поведения
Если в схеме документа присутствует ссылка на документ того же самого типа, то ссылка на этот документ не будет разрешена (resolved) при выборке документов вследствие невозможности анализа схемы ссылки из-за наличия рекурсии.

В этом случае способ хранения ссылки документа (resolve/inline) значения не имеет: ссылка в любом случае не будет разрешена (resolved).

# Пример

Рассмотрим документ _Catalogue_ из тестового приложения _Gameshop_. Этот документ имеет следующую JSON-схему:

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

Поле _SimilarGames_ схемы содержит ссылку на массив документов того же типа _Catalogue_.
Несмотря на то, что в метаданных ссылки указано значение _"Resolve" = true_, разрешение ссылки не будет выполнено вследствие наличия рекурсии.

# Пример документа со ссылкой
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

# Результат запроса
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
