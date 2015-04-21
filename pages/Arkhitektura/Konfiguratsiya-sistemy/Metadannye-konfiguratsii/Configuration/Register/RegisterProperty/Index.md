---
layout: default
title: RegisterProperty
position: 2
categories: 
tags: 
---

Свойство регистра.

   

```
{
	"id": "RegisterProperty",
	"description": "Свойство регистра",
	"type": "object",
	"properties": {
		"Property": {
			"description": "Свойство документа регистра",
			"type": "string",
			"required": true
		},
		"Type": {
			"description": "Тип свойства регистра",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/RegisterPropertyType",
			"required": true
		}
	}
}
```

   

```
{
	"Property": "Сurrency",
	"Type": "Dimension"
}
```

 

 

