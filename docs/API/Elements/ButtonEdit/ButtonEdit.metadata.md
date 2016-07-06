---
layout: doc
title: "ButtonEdit.metadata"
position: 0
---

Метаданные типа [`ButtonEdit`](../).

# Schema

|Name|Type|Default|Description|
|----|----|----|-----------|
|Icon|`String`<sup>*</sup>| |(Необязательное) Иконка, отображаемая на кнопке|
|ReadOnly|`Boolean`|true|(Необязательное) Значение, определяющее, возможно ли редактирование текстового поля|
|ShowClear|`Boolean`|true|(Необязательное) Значение, определяющее наличие кнопки, очищающей указанное значение|
|OnButtonClick|[`Script`](../../../Core/Script/)| |(Необязательное) Обработчик события нажатия на кнопку|
|Action|[`ActionMetadata`](../../../Core/Actions/)| |(Необязательное) Основное действие кнопки|

OnButtonClick сработает раньше, чем Action.

<sup>*</sup> Полный список доступных названий и соответсвующих отображений: [Icons](http://fontawesome.io/icons/).

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