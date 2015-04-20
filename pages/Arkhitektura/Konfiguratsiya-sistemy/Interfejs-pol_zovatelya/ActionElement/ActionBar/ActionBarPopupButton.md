---
layout: default
title: ActionBarPopupButton
position: 2
categories: 
tags: 
---

Элемент панели действий в виде кнопки со всплывающим окном.

 

|Name|Description|
|----|-----------|
|AddItem([[ActionBarItem]] item)|Добавляет элемент во всплывающее окно.|
|RemoveItem([[ActionBarItem]] item)|Удаляет элемент из всплывающего окна.|
|GetItem(string name): [[ActionBarItem]]|Возвращает элемент всплывающего окна по имени.|
|GetItems(): array<[[ActionBarItem]]>|Возвращает элементы всплывающего окна.|

|Name|Description|
|----|-----------|
| | |

  

```
{
	"id": "ActionBarPopupButton",
	"description": "Элемент панели действий в виде кнопки со всплывающим окном",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ActionBarButton"
	},
	"properties": {
		"Items": {
			"description": "Список элементов всплывающего окна",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ActionBarItem"
			}
		}
	}
}
```

```
{
	"Name": "ActionBarPopupButton1",
	"Text": "Добавить",
	"Items": [
		{
			"ActionBarButton": {
				"Name": "ActionBarButton1",
				"Text": "Группу"
			}
		},
		{
			"ActionBarButton": {
				"Name": "ActionBarButton2",
				"Text": "Пользователя"
			}
		}
	]
}
```

 

 

