---
layout: default
title: "PropertyCategory"
position: 
categories: 
tags: 
---

Описание способа отображения категории свойств объекта.

 

|Name|Description|
|----|-----------|
|GetCategories(): array<>|Возвращает список категорий.|
|GetProperties(): array<[[PropertyEditor]]>|Возвращает список свойств категории.|
|GetText(): string|Возвращает текст заголовка категории.|
|SetText(string)|Устанавливает текст заголовка категории.|
|GetImage(): string|Возвращает изображение заголовка категории.|
|SetImage(string)|Устанавливает изображение заголовка категории.|
|GetExpandable(): boolean|Возвращает значение, определяющее, разрешено ли сворачивание категории.|
|SetExpandable(boolean)|Устанавливает значение, определяющее, разрешено ли сворачивание категории.|
|Expand()|Разворачивает категорию, если сворачивание разрешено и категория свернута.|
|Collapse()|Сворачивает категорию, если сворачивание разрешено и категория развернута.|

|Name|Description|
|----|-----------|
|OnExpand|Событие разворачивания категории. |
|OnCollapse|Событие сворачивания категории.|

    

```
{
	"id": "PropertyCategory",
	"description": "Описание способа отображения категории свойств объекта",
	"type": "object",
	"properties": {
		"Categories": {
			"description": "Список категорий",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/PropertyCategory"
			}
		},
		"Properties": {
			"description": "Список свойств категории",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/PropertyEditor"
			}
		},
		"Text": {
			"description": "Текст заголовка категории",
			"type": "string"
		},
		"Image": {
			"description": "Изображение заголовка категории",
			"type": "string",
			"default": null
		},
		"Expandable": {
			"description": "Разрешено ли сворачивание категории",
			"type": "boolean",
			"default": false
		},
		"Expanded": {
			"description": "Развернута ли категория",
			"type": "boolean",
			"default": true
		},
		"OnExpand": {
			"description": "Обработчик события разворачивания категории",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnCollapse": {
			"description": "Обработчик события сворачивания категории",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		}
	}
}
```

```
{
	"Text": "Общая информация",
	"Properties": [
		{
			"Text": "Имя",
			"Property": "FirstName"
		},
		{
			"Text": "Отчество",
			"Property": "MiddleName"
		},
		{
			"Text": "Фамилия",
			"Property": "LastName"
		}
	]
}
```

 

 

