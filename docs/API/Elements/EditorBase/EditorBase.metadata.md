---
layout: doc
title: "EditorBase.metadata"
position: 0
---

Метаданные типа [`EditorBase`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|Value|[`BindingMetadata`](../../../Core/Binding/Binding.metadata/)|Нет|Значение|
|HintText|`String`||Текст с подсказкой для ввода|
|ErrorText|`String`||Текст с информацией об ошибке|
|WarningText|`String`||Текст с информацией о предупреждении|
|OnValueChanging|[Script](../../../Core/Script/)||Обработчик события о том, что значение изменяется|
|OnValueChanged|[Script](../../../Core/Script/)||Обработчик события о том, что значение было изменено|

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