---
layout: doc
title: "RestDataSource.metadata"
position: 0
---

Метаданные [RestDataSource](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|GettingParams|`Object`|[Параметры запроса](../#urlparams-format) на получение данных|
|SettingParams|`Object`|[Параметры запроса](../#urlparams-format) на сохранение данных|
|DeletingParams|`Object`|[Параметры запроса](../#urlparams-format) на удаление|

# Examples

```json
{
	"RestDataSource": {
	    "GettingParams": {
			"Method": "Get",
			"Origin": "http://<%ip%>:<%port%>",
			"Path": "/documents/<%document%>",
			"Data": {
			  "filter": "eq(_id,'<%_id%>')"
			},
			"Params": {
			  "ip": "localhost",
			  "port": "9900",
			  "document": "Patients",
			  "_id": "73eba46a-0c6f-42d3-8a7b-2962f0fbf06d"
			}
		},
		"SettingParams": {
			"Method": "Post",
			"Origin": "http://<%ip%>:<%port%>",
			"Path": "/documents/edit/<%document%>",
			"Data": {
			  "newValue": "<%patinet%>"
			},
			"Params": {
			  "ip": "localhost",
			  "port": "9900",
			  "document": "Patient",
			  "patinet": {
			  		"Source": "MainDataSource",
			  		"Property": "$"
				}
			}
		},
		"DeletingParams": {
			"Method": "Delete",
			"Origin": "http://<%ip%>:<%port%>",
			"Path": "/documents/delete/<%document%>",
			"Data": {
			  "filter": "eq(_id,'<%_id%>')"
			},
			"Params": {
			  "ip": "localhost",
			  "port": "9900",
			  "document": "Patients",
			  "_id": "73eba46a-0c6f-42d3-8a7b-2962f0fbf06d"
			}
		}
	}
}
```