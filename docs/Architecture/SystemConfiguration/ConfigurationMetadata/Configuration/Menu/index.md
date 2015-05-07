---
layout: doc
title: "Menu"
position: 3
categories: 
tags: 
---

Меню конфигурации.

Меню конфигурации описывает **не** визуальный элемент, а структуру меню пользователя и действия, которые должны осуществляться при выборе пунктов меню. Каждая конфигурация ([[Configuration]]) содержит список меню (Menu), потенциально доступных пользователю. Доступность меню определяется системой с учетом прав пользователя (во многом именно по этой причине меню было выделено, как отдельный раздел конфигурирования).

  

```
{
	"id": "Menu",
	"description": "Меню конфигурации",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties": {
		"Items": {
			"description": "Список элементов меню",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/MenuItem"
			}
		},
		"Roles": {
			"description": "Список ролей пользователя",
			"type": "array",
			"items": {
				"type": "string"
			}
		}
	}
}
```

```
{
	"Name": "Menu1",
	"Caption": "Main Menu",
	"Items": [
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
	],
	"Roles": [
		"Admin",
		"Bookkeeper"
	]
} 
```

  


  


