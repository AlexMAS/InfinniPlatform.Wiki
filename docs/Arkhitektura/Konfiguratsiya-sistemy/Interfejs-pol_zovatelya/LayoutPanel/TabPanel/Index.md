---
layout: default
title: "TabPanel"
position: 1
categories: 
tags: 
---

Контейнер элементов представления в виде набора закладок для страниц.

  


![](TabControl.png)

 

|Name|Description|
|----|-----------|
|GetHeaderLocation(): [[TabHeaderLocation]]|Возвращает расположение закладок.|
|SetHeaderLocation([[TabHeaderLocation]] value)|Устанавливает расположение закладок.|
|GetHeaderOrientation(): [[TabHeaderOrientation]]|Возвращает ориентацию закладок.|
|SetHeaderOrientation([[TabHeaderOrientation]] value)|Устанавливает ориентацию закладок.|
|GetSelectedPage(): [[TabPage]]|Возвращает выделенную страницу.|
|SetSelectedPage([[TabPage]] page)|Устанавливает выделенную страницу.|
|AddPage([[TabPage]] page)|Добавляет указанную страницу.|
|RemovePage([[TabPage]] page)|Удаляет указанную страницу.|
|GetPage(string name): [[TabPage]]|Возвращает страницу с указанным именем.|
|GetPages(): array<[[TabPage]]>|Возвращает список страниц.|

|Name|Description|
|----|-----------|
|OnSelectionChanged([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события изменения выделенной страницы.|

  

```
{
	"id": "TabPanel",
	"description": "Контейнер элементов представления в виде набора закладок для страниц",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
	},
	"properties": {
		"HeaderLocation": {
			"description": "Расположение закладок",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/TabHeaderLocation",
			"default": "Top"
		},
		"HeaderOrientation": {
			"description": "Ориентация закладок",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/TabHeaderOrientation",
			"default": "Horizontal"
		},
		"DefaultPage": {
			"description": "Наименование страницы по умолчанию",
			"type": "string",
			"default": null
		},
		"Pages": {
			"description": "Список страниц",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/TabPage"
			}
		},
		"OnSelectionChanged": {
			"description": "Обработчик события изменения выделенной страницы",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		}
	}
}
```

 

 

