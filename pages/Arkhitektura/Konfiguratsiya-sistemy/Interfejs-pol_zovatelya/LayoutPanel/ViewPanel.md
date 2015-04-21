---
layout: default
title: ViewPanel
position: 5
categories: 
tags: 
---

Контейнер элементов представления в виде прямоугольной области, в которую помещается указанное представление.

 

![](ViewPanel_Ex1.png)

 

|Name|Description|
|----|-----------|
| | |

|Name|Description|
|----|-----------|
| | |

  

```
{
	"id": "ViewPanel",
	"description": "Контейнер элементов представления в виде прямоугольной области, в которую помещается указанное представление",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
	},
	"properties": {
		"View": {
			"description": "Ссылка на представление",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkView"
		}
	}
}
```

 

 

