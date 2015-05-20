---
layout: doc
title: "SearchPanel"
position: 17
categories: 
tags: 
---

Элемент представления для полнотекстового поиска по источнику данных.

 

![](SearchPanel.png)

 

|Name|Description|
|----|-----------|
|GetValue(): string|Возвращает строку поиска.|
|SetValue(string)|Устанавливает строку поиска.|
| | |
|GetDataSource(): string|Возвращает наименование источника данных.|
|SetDataSource(string value)|Устанавливает наименование источника данных.|

|Name|Description|
|----|-----------|
|OnValueChanged|Событие изменения значения.|

    

```
{
	"id": "SearchPanel",
	"description": "Элемент представления для полнотекстового поиска по источнику данных",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
	},
	"properties": {
		"Value": {
			"description": "Привязка данных для значения строки поиска",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
		},
		"DataSource": {
			"description": "Наименование источника данных",
			"type": "string",
			"required": true
		},
		"OnValueChanged": {
			"description": "Обработчик события изменения значения",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
		}
	}
}
```

```
{
	"Name": "SearchPanel1",
	"DataSource": "PatientsDataSource"
}
```

 

 

