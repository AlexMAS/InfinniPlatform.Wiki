---
layout: doc
title: "ButtonEdit.metadata"
position: 0
---

Метаданные типа [`ButtonEdit`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|Icon|`String`<sup>1</sup>| |Иконка, отображаемая на кнопке|
|ReadOnly|`Boolean`|true|Значение, определяющее, возможно ли редактирование текстового поля|
|ShowClear|`Boolean`|true|Значение, определяющее наличие кнопки, очищающей указанное значение|
|OnButtonClick|[`Script`](../../../Core/Script/)| |Обработчик события нажатия на кнопку|
|Action|[`ActionMetadata`](../../../Core/Actions/)| |Основное действие кнопки|

OnButtonClick сработает раньше, чем Action.

<sup>1</sup> Полный список доступных названий и соответсвующих отображений: [Icons](http://fontawesome.io/icons/).

# Examples

ButtonEdit удобно использовать для редактирования полей-объектов (вроде адреса).

```js
{
	"ButtonEdit": {
		"ShowClear": false,
		"Icon": "pencil",
		"Value": {
	        "Source": "MainDataSource",
	        "Property": "$.Address"
	    },
	    "DisplayFormat": "{City}, {Street} st., {House}",
		"Action": {
			"EditAction": {
				/** ... **/
			}
		}
	}
}
```