---
layout: default
title: "ActionBar"
position: 0
categories: 
tags: 
---

Настройки панели действий для текущего представления (см. раздел [[Панель действий (Action Bar)|Панель действий (Action Bar)]]).   

Каждое представление ([[View]]) может содержать настройки панели действий, которые применяются к ней в момент фокусировки данного представления.

   

Следует обратить внимание, что ActionBar **не является визуальным элементом управления**, он содержит только настройки системного визуального элемента [[Панель действий (Action Bar)|Панель действий (Action Bar)]]. Указанные настройки используются при активизации представления ([[View]]), в котором объявлен ActionBar.

   

|Name|Description|
|----|-----------|
|GetVisible(): boolean|Возвращает значение, определяющее, отображается ли панель действий.|
|SetVisible(boolean value)|Устанавливает значение, определяющее, отображается ли панель действий.|
| | |
|AddItem([[ActionBarItem]] item)|Добавляет элемент во всплывающее окно.|
|RemoveItem([[ActionBarItem]] item)|Удаляет элемент из всплывающего окна.|
|GetItem(string name): [[ActionBarItem]]|Возвращает элемент всплывающего окна по имени.|
|GetItems(): array<[[ActionBarItem]]>|Возвращает элементы всплывающего окна.|

|Name|Description|
|----|-----------|
| | |

  

```
{
	"id": "ActionBar",
	"description": "Настройки панели действий",
	"type": "object",
	"properties": {
		"Visible": {
			"description": "Отображается ли панель действий",
			"type": "boolean",
			"default": true
		},
		"Items": {
			"description": "Список элементов панели действий",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ActionBarItem"
			}
		}
	}
}
```

 

 

