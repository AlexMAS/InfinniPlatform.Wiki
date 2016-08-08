---
layout: doc
title: "ObjectDataSource.metadata"
position: 0
---

Метаданные [ObjectDataSource](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|Items|`Array`(&hArr;)|Массив элементов источника данных|

(&hArr;) Свойство может быть задано, как [`DataBinding`](../../../DataBinding/DataBinding.metadata/).

# Examples

```json
{
	"ObjectDataSource": {
	  "Name": "objectDataSource1",
	  "Items": [
	    { "Id": 1, "Display": "LTE" },
	    { "Id": 2, "Display": "3G" },
	    { "Id": 3, "Display": "2G" }
	  ]
	}
}
```

```json
{
	"ObjectDataSource": {
	  "Name": "convertedDataSource",
	  "Items": {
		  "Source": "MainDataSource",
		  "Property": "",
		  "Mode": "ToElement",
		  "Converter": {
			  "ToElement": "{ return args.value.map(function(item){return {FullName: item.LastName + ' ' + item.FirstName, Birthday: item.Birthday}; }); }"
			}
		}
	}
}
```