---
layout: default
title: MenuItem
position: 
categories: 
tags: 
---

Элемент меню.

  

```
{
	"id": "MenuItem",
	"description": "Элемент меню",
	"type": "object",
	"properties": {
		"Text": {
			"description": "Текст элемента меню",
			"type": "string",
			"required": true
		},
		"Image": {
			"description": "Изображение элемента меню",
			"type": "string"
		},
		"Action": {
			"description": "Действие при выборе элемента меню",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/Action"
		},
		"Items": {
			"description": "Список дочерних элементов меню",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/MenuItem"
			}
		}
	}
}
```

```
{
	"Text": "File",
	"Items": [
		{
			"Text": "New"
		},
		{
			"Text": "Open"
		},
		{
			"Text": "Save"
		},
		{
			"Text": "Save as..."
		},
		{
			"Text": "Exit"
		}
	]
}
```

 

 

