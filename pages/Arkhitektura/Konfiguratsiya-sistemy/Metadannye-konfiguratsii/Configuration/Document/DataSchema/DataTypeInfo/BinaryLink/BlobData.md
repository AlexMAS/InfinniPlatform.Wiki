---
layout: default
title: BlobData
position: 
categories: 
tags: 
---

Данные BLOB (Binary Large OBject).

   

Данные BLOB (Binary Large OBject) описывают не метаданные модели данных, а **данные** атрибута документа, который имеет тип [[Binary|DataType]]. Описанная структура данных содержит информацию о BLOB (Info) и данные BLOB (Data). В случае, когда сервер возвращает клиенту данные атрибута с типом [[Binary|DataType]], информация (Info) передается всегда, а данные (Data) передаются только в том случае, если в описании этого атрибута указана настройка Resolve=true (см. [[BinaryLink]]). Соответственно, в случае, когда данные (Data) с сервера не приходят (иными словами, Data === undefined), предполагается, что клиент сам решает, когда следует загружать данные. Для загрузки данных клиент отправляет серверу дополнительный запрос, передавая в параметрах запроса уникальный идентификатор BLOB (Info.Id).  


   

```
{
	"id": "BlobData",
	"description": "Данные BLOB",
	"type": "object",
	"properties": {
		"Info": {
			"description": "Информация о BLOB",
			"type": "object",
			"required": true,
			"properties": {
				"Id": {
					"description": "Уникальный идентификатор BLOB",
					"type": "string",
					"required": true
				},
				"Name": {
					"description": "Наименование BLOB",
					"type": "string",
					"required": false
				},
				"Type": {
					"description": "Формат данных BLOB",
					"type": "string",
					"required": false
				},
				"Size": {
					"description": "Размер в байтах BLOB",
					"type": "integer",
					"required": false
				},
				"Time": {
					"description": "Дата и время создания BLOB",
					"type": "string",
					"format": "date-time",
					"required": false
				}
			}
		},
		"Data": {
			"description": "Данные BLOB",
			"type": "string",
			"media": {
				"binaryEncoding": "base64"
			},
			"required": false
		}
	}
}
```

   

```
{
	"Info": {
		"Id": "ED970A9B-1276-4995-BEEE-545F6CB05A41",
		"Name": "Attachment.pdf",
		"Type": "application/pdf",
		"Size": 3,
		"Time": "2014-09-25T07:54:30"
	}
}
```

```
{
	"Info": {
		"Id": "ED970A9B-1276-4995-BEEE-545F6CB05A41",
		"Name": "Attachment.pdf",
		"Type": "application/pdf",
		"Size": 3,
		"Time": "2014-09-25T07:54:30"
	},
	"Data": "AQID"
}
```

 

 

