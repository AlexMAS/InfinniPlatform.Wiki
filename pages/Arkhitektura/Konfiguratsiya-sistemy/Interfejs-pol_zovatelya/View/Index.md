---
layout: default
title: View
position: 4
categories: 
tags: 
---

Визуальное представление.

 

|Name|Description|
|----|-----------|
|GetImage(): string|Возвращает изображение заголовка представления.|
|SetImage(string value)|Устанавливает изображение заголовка представления.|
| | |
|GetScript(string name): function<[[Context]], object>|Возвращает прикладной скрипт.|
|AddScript(string name, function<[[Context]], object> action)|Добавляет прикладной скрипт.|
| | |
|GetParameter(string name): any|Возвращает значение параметра.|
|SetParameter(string name, any value)|Устанавливает значение параметра.|
|GetParameters(): array<[[Parameter]]>|Возвращает список параметров.|
| | |
|GetDataSource(string name): [[BaseDataSource]]|Возвращает источник данных.|
|AddDataSource([[BaseDataSource]] dataSource)|Добавляет источник данных.|
|GetDataSources(): array<[[BaseDataSource]]>|Возвращает список источников данных.|
| | |
|GetChildView(string name): [[LinkViewItem]]|Возвращает ссылку на дочернее представление.|
|AddChildView(string name, [[LinkViewItem]] value)|Добавляет ссылку на дочернее представление.|
|GetChildViews(): array<[[LinkViewItem]]>|Возвращает список ссылок дочерние представления.|
| | |
|GetActionBar(): [[ActionBar]]|Возвращает настройки панели действий представления.|
|SetActionBar([[ActionBar]] value)|Устанавливает настройки панели действий представления.|
| | |
|GetLayoutPanel(): [[LayoutPanel]]|Возвращает контейнер элементов.|
|SetLayoutPanel([[LayoutPanel]] value)|Устанавливает контейнер элементов.|
| | |
|GetDialogResult(): [[DialogResult]]|Возвращает результат работы представления.|
|SetDialogResult([[DialogResult]] value)|Устанавливает результат работы представления.|
| | |
|Open()|Открывает окно.|
|Close(): boolean|Закрывает окно.|
| | |
|GetContext(): [[Context]]|Возвращает контекст представления.|
|GetExchange(): [[MessageBus]]|Возвращает точку обмена сообщениями представления.|
|GetExchangeByName(string name): [[MessageBus]]|Возвращает точку обмена сообщениями с указанным именем.|

|Name|Description|
|----|-----------|
|OnTextChanged([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что текст изменен.|
|OnOpening([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что представление открывается.|
|OnOpened([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что представление открыто.|
|OnClosing([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что представление закрывается.|
|OnClosed([[Context]] context, object arguments)|Возвращает или устанавливает обработчик события о том, что представление закрыто.|

  

```
{
	"id": "View",
	"description": "Визуальное представление",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
	},
	"properties": {
		"Image": {
			"description": "Изображение заголовка представления",
			"type": "string"
		},
		"Scripts": {
			"description": "Список скриптов представления",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/Script"
			}
		},
		"Parameters": {
			"description": "Список источников данных представления",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/Parameter"
			}
		},
		"DataSources": {
			"description": "Список источников данных представления",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/DataSource"
			}
		},
		"ChildViews": {
			"description": "Список ссылок на дочерние представления",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkViewItem"
			}
		},
		"ActionBar": {
			"description": "Настройки панели действий представления",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/ActionBar"
		},
		"LayoutPanel": {
			"description": "Контейнер элементов представления",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LayoutPanel"
		},
		"OnTextChanged": {
			"description": "Обработчик события о том, что текст изменен",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnOpening": {
			"description": "Обработчик события о том, что представление открывается",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnOpened": {
			"description": "Обработчик события о том, что представление открыто",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnClosing": {
			"description": "Обработчик события о том, что представление закрывается",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		},
		"OnClosed": {
			"description": "Обработчик события о том, что представление закрыто",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		}
	}
}
```

 

 

