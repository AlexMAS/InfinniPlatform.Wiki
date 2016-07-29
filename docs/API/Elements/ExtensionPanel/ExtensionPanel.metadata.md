---
layout: doc
title: "ExtensionPanel.metadata"
position: 0
---

Метаданные типа [`ExtensionPanel`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|ExtensionName|`String`|Название пользовательского элемента|
|Parameters|`Array`|Параметры, передаваемые в пользовательский элемент|

# Examples

```json
{
	"ExtensionName": "SuperPanelExtension",
	"ItemTemplate": {
		"Label": {
			"Value": {
		        "Source": "MainDataSource",
		        "Property": "#.Name"
		    }
		}
	},
	"Items": {
		"Source": "MainDataSource",
		"Property": ""
	}
}
```

```json
{
	"ExtensionName": "CaptchaExtension",
	"Parameters": [
      {
        "Name": "type",
        "Value": "reCAPTCHA"
      }
    ]
}
```