---
layout: doc
title: "ObjectMetadata"
position: 
categories: 
tags: 
---

Объект метаданных.

   

Все объекты метаданных имеют одинаковый набор свойств, которые описаны в данном разделе.

   

```
{
	"id": "ObjectMetadata",
	"description": "Объект метаданных",
	"type": "object",
	"properties": {
		"Id": {
			"description": "Уникальный идентификатор объекта метаданных",
			"type": "string",
			"required": true
		},
		"Name": {
			"description": "Наименование объекта метаданных",
			"type": "string",
			"required": true
		},
		"Caption": {
			"description": "Заголовок объекта метаданных",
			"type": "string"
		},
		"Description": {
			"description": "Описание объекта метаданных",
			"type": "string"
		}
	}
}
```

 

 

