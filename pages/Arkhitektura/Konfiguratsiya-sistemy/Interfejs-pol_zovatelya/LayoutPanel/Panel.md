---
layout: default
title: Panel
position: 0
categories: 
tags: 
---

Контейнер элементов представления в виде сворачиваемой прямоугольной области.

 



 

|Name|Description|
|----|-----------|
|GetImage(): string|Возвращает изображение заголовка панели.|
|SetImage(string)|Устанавливает изображение заголовка панели.|
|GetCollapsible(): boolean|Возвращает значение, определяющее, разрешено ли сворачивание панели.|
|SetCollapsible(boolean)|Устанавливает значение, определяющее, разрешено ли сворачивание панели.|
|GetCollapsed(): boolean|Возвращает значение, определяющее, свернута ли панель.|
|SetCollapsed(boolean)|Устанавливает значение, определяющее, свернута ли панель.|
|AddItem([[Element]] item)|Добавляет дочерний элемент.|
|RemoveItem([[Element]] item)|Удаляет дочерний элемент.|
|GetItem(string name): [[Element]]|Возвращает дочерний элемент по имени.|
|GetItems(): array<[[Element]]>|Возвращает список дочерних элементов.|

|Name|Description|
|----|-----------|
|OnExpanded|Возвращает или устанавливает обработчик события разворачивания.|
|OnCollapsed|Возвращает или устанавливает обработчик события сворачивания.|

  

```
{
	"id": "Panel",
	"description": "Контейнер элементов представления в виде сворачиваемой прямоугольной области",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
	},
	"properties": {
		"Image": {
			"description": "Изображение заголовка панели",
			"type": "string"
		},
		"Collapsible": {
			"description": "Разрешено ли сворачивание панели",
			"type": "boolean",
			"default": false
		},
		"Collapsed": {
			"description": "Свернута ли панель",
			"type": "boolean",
			"default": false
		},
		"Items": {
			"description": "Список дочерних элементов",
			"type": "array",
			"items": [
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
		},
		"OnExpanded": {
			"description": "Обработчик события разворачивания панели",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnCollapsed": {
			"description": "Обработчик события сворачивания панели",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		}
	}
}
```

 

 

