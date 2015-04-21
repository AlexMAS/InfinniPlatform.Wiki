---
layout: default
title: ToolBarPopupButton
position: 2
categories: 
tags: 
---

Элемент панели инструментов в виде кнопки со всплывающим окном.

 

|Name|Description|
|----|-----------|
|GetImage(): string|Возвращает изображение кнопки.|
|SetImage(string value)|Устанавливает изображение кнопки.|
|GetAction(): [[Action]]|Возвращает действие при нажатии на кнопку.|
|SetAction([[Action]] value)|Устанавливает действие при нажатии на кнопку.|
|Click()|Осуществляет программное нажатие на кнопку.|
|AddItem([[ToolBarItem]] item)|Добавляет элемент во всплывающее окно.|
|RemoveItem([[ToolBarItem]] item)|Удаляет элемент из всплывающего окна.|
|GetItem(string name): [[ToolBarItem]]|Возвращает элемент всплывающего окна по имени.|
|GetItems(): array<[[ToolBarItem]]>|Возвращает элементы всплывающего окна.|

|Name|Description|
|----|-----------|
|OnClick|Возвращает или устанавливает обработчик события нажатия на кнопку.|

  

```
{
	"id": "ToolBarPopupButton",
	"description": "Элемент панели инструментов в виде кнопки со списком возможных действий",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ToolBarButton"
	},
	"properties": {
		"Items": {
			"description": "Список элементов всплывающего окна",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/ToolBarItem"
			}
		}
	}
}
```

```
{
	"Name": "ToolBarPopupButton1",
	"Text": "Добавить",
	"Items": [
		{
			"ToolBarButton": {
				"Name": "ToolBarButton1",
				"Text": "Группу"
			}
		},
		{
			"ToolBarButton": {
				"Name": "ToolBarButton",
				"Text": "Пользователя"
			}
		}
	]
}
```

