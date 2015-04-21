---
layout: default
title: "ScrollPanel"
position: 6
categories: 
tags: 
---

Контейнер элементов представления в виде области, содержимое которой может прокручиваться по вертикали и горизонтали.

 

|Name|Description|
|----|-----------|
|GetVerticalScroll(): [[ScrollVisibility]]|Возвращает видимость полосы прокрутки по вертикали.|
|SetVerticalScroll([[ScrollVisibility]] value)|Возвращает видимость полосы прокрутки по вертикали.|
|GetHorizontalScroll(): [[ScrollVisibility]]|Возвращает видимость полосы прокрутки по горизонтали.|
|SetHorizontalScroll([[ScrollVisibility]] value)|Устанавливает видимость полосы прокрутки по горизонтали.|
|GetLayoutPanel(): [[LayoutPanel]]|Возвращает контейнер элементов.|
|SetLayoutPanel([[LayoutPanel]] value)|Устанавливает контейнер элементов.|

|Name|Description|
|----|-----------|
| | |

  

```
{
	"id": "ScrollPanel",
	"description": "Контейнер элементов представления в виде области, содержимое которой может прокручиваться по вертикали и горизонтали",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
	},
	"properties": {
		"VerticalScroll": {
			"description": "Видимость полосы прокрутки по вертикали",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ScrollVisibility"
		},
		"HorizontalScroll": {
			"description": "Видимость полосы прокрутки по горизонтали",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ScrollVisibility"
		},
		"LayoutPanel": {
			"description": "Контейнер элементов",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LayoutPanel"
		}
	}
}
```

 

 

