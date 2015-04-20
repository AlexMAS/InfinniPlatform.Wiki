---
layout: default
title: GridPanelCell
position: 
categories: 
tags: 
---

Описание ячейки сетки.

 

|Name|Description|
|----|-----------|
|GetColumnSpan(): integer|Возвращает размер ячейки в колонках.|
|AddItem([[Element]] item)|Добавляет дочерний элемент.|
|RemoveItem([[Element]] item)|Удаляет дочерний элемент.|
|GetItems(): array<[[Element]]>|Возвращает список дочерних элементов.|

  

```
{
	"id": "GridPanelCell",
	"description": "Описание ячейки сетки",
	"type": "object",
	"properties": {
		"ColumnSpan": {
			"description": "Размер ячейки в колонках",
			"type": "integer",
			"default": 1
		},
		"Items": {
			"description": "Список элементов ячейки",
			"type": "array",
			"items": [
				{
					"$ref": "http://demo.infinnity.ru:8081/display/MC/LayoutPanel"
				},
				{
					"$ref": "http://demo.infinnity.ru:8081/display/MC/ActionElement"
				},
				{
					"$ref": "http://demo.infinnity.ru:8081/display/MC/DataElement"
				}
			]
		}
	}
}
```

 

 

