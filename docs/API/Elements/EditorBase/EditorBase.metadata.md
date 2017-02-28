---
layout: doc
title: "EditorBase.metadata"
position: 0
---

Метаданные типа [`EditorBase`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|Value|[`BindingMetadata`](../../../Core/DataBinding/DataBinding.metadata/)|Значение|
|HintText|`String`(&#402;)|Текст с подсказкой для ввода|
|ErrorText|`String`(&#402;)|Текст с информацией об ошибке|
|WarningText|`String`(&#402;)|Текст с информацией о предупреждении|
|OnValueChanging|[Script](../../../Core/Script/)|Обработчик события о том, что значение изменяется|
|OnValueChanged|[Script](../../../Core/Script/)|Обработчик события о том, что значение было изменено|

(&#402;) Свойство может быть задано, как [`JSExpression`](../../../Core/JSExpression).

# Examples

```json
{
	"Value": {
		"Source": "MainDataSource",
		"Property": "Name"
	},
	"HintText": "Enter your name",
	"OnValueChanged": "onNameChengedScript"
}
```
