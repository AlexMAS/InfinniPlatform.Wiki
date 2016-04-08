---
layout: doc
title: "View.metadata"
position: 0
---

Метаданные типа [`View`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|Scripts|`Array`|Коллекция [скриптов представления](../../../Script/)|
|Parameters|`Array`|Коллекция [параметров представления](../../../Parameters/)|
|DataSources|`Array`|Коллекция [источников данных представления](../../../DataSources/BaseDataSource/)|
|HeaderTemplate|[ElementMetadata](../../Element/Element.metadata/)|Шаблон заголовка представления|
|CloseButtonVisibility|`Boolean`|Флаг видимости кнопки закрытия|
|OnOpening|[`Script`](../../../Script/)|Обработчик события о том, что представление открывается|
|OnOpened|[`Script`](../../../Script/)|Обработчик события о том, что представление было открыто|
|OnClosing|[`Script`](../../../Script/)|Обработчик события о том, что представление закрывается|
|OnClosed|[`Script`](../../../Script/)|Обработчик события о том, что представление было закрыто|

# Examples

```json
{
	"View": {
		"CloseButtonVisibility": false,
		"HeaderTemplate": {
			"StackPanel": {
				"Items": [
					{
						"ToolBar": {
							"Items": [
								{
									"ToolBarButton": {
										"ContentTemplate": {
											"Icon": {
											  "Value": "times"
											}
										},
										"Name": "CloseButton",
										"OnClick": "{context.view.close();}"
									}
								}
							]
						}
					},
					{
						"StackPanel": {
							"Items": [
								{
									"Icon": {
										"Value": "pencil"
									}
								},
								{
									"Label": {
										"Text": "EditView"
									}
								}
							]
						}
					}
				]
			}
		},

		"DataSources": [
			{
				"ObjectDataSource": {
					"Name": "MainDataSource",
					"Items": [
						{}
					]
				}
		    }
		],

		"Scripts": [
			{
				"Name": "OnOpened",
				"Body": "alert('Hi!');"
		    }
		],

		"OnOpened": {
		    "Name": "OnOpened"
		},

		"Items": [
			{
				"Label": {
					"Text": "ViewBody"
				}
			}
		]
	}
}
```