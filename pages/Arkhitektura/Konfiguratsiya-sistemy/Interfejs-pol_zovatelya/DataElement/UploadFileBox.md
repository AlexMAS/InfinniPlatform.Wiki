---
layout: default
title: UploadFileBox
position: 16
categories: 
tags: 
---

Элемент представления для отображения и редактирования файлов.

  


  


 

Значением элемента (Value) является структура данных типа [[BlobData]].

    

|Name|Description|
|----|-----------|
|GetReadOnly(): boolean|Возвращает значение, определяющее, запрещено ли редактирование значения.|
|SetReadOnly(boolean value)|Устанавливает значение, определяющее, запрещено ли редактирование значения.|
| | |
|GetAcceptTypes(): array<string>|Возвращает список допустимых форматов данных.|
|SetAcceptTypes(array<string> value)|Устанавливает список допустимых форматов данных.|
| | |
|GetMaxSize(): integer|Возвращает максимальный размер данных в байтах.|
|SetMaxSize(integer value)|Устанавливает максимальный размер данных в байтах.|
| | |
|GetValue(): [[BlobData]]|Возвращает изображение.|
|SetValue([[BlobData]] value)|Устанавливает изображение.|

|Name|Description|
|----|-----------|
| OnValueChanged|Событие изменения значения.|

  

```
{
	"id": "UploadFileBox",
	"description": "Элемент представления для выгрузки одного или нескольких файлов",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
	},
	"properties": {
		"ReadOnly": {
			"description": "Запрещено ли редактирование значения",
			"type": "boolean",
			"default": false,
        },
		"AcceptTypes": {
			"description": "Список допустимых форматов данных",
			"type": "array",
			"items": {
				"type": "string"
			}
		},
		"MaxSize": {
			"description": "Максимальный размер данных в байтах",
			"type": "integer",
			"default": 0
		},
		"Value": {
			"description": "Привязка данных для значения",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
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
	"Name": "UploadFileBox1",
	"AcceptTypes": [ "application/pdf", "application/msword" ],
	"MaxSize": 1048576,
	"Value": {
		"PropertyBinding": {
			"DataSource": "EditObjectDataSource",
			"Property": "$.Attachment"
		}
	}
}
```

 

 

