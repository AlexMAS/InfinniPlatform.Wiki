---
layout: default
title: "TabPage"
position: 0
categories: 
tags: 
---

Страница панели закладок.

 

|Name|Description|
|----|-----------|
|GetImage(): string|Возвращает изображение заголовка страницы.|
|SetImage(string)|Устанавливает изображение заголовка страницы.|
| | |
|GetCanClose(): boolean|Возвращает значение, определяющее, разрешено ли закрытие страницы.|
|SetCanClose(boolean)|Устанавливает значение, определяющее, разрешено ли закрытие страницы.|
| | |
|GetLayoutPanel(): [[LayoutPanel]]|Возвращает контейнер элементов страницы.|
|SetLayoutPanel([[LayoutPanel]] layoutPanel)|Устанавливает контейнер элементов страницы.|
| | |
|Close(): boolean|Закрывает страницу.|

|Name|Description|
|----|-----------|
|OnClosing([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что страница закрывается.|
|OnClosed([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что страница закрыта.|

  

```
{
	"id": "TabPage",
	"description": "Страница панели закладок",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
	},
	"properties": {
		"Image": {
			"description": "Изображение заголовка страницы",
			"type": "string",
			"default": null
		},
		"CanClose": {
			"description": "Разрешено ли закрытие страницы",
			"type": "boolean",
			"default": false
		},
		"LayoutPanel": {
			"description": "Контейнер элементов страницы",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LayoutPanel"
		},
        "OnClosing": {
            "description": "Обработчик события о том, что страница закрывается",
            "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
        },
        "OnClosed": {
            "description": "Обработчик события о том, что страница закрыта",
            "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
        }
	}
}
```

 

 

