---
layout: doc
title: "SaveAction.metadata"
position: 0
---

Метаданные типа [`SaveAction`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|DestinationValue.Source<sup>*</sup>|`String`| |Название источника данных|
|CanClose|`Boolean`|true|Значение, определяющее, нужно ли закрыть родительское представление после сохранения|
|OnSuccess|[`Script`](../../../Script/)| |Устанавливает обработчик успешного завершения действия|
|OnError|[`Script`](../../../Script/)| |Устанавливает обработчик завершения действия с ошибкой|


<sup>*</sup> Обязательное свойство.

# Examples

```json
{
	"SaveAction": {
		"DestinationValue": {
			"Source": "DataSource1"
		},
		"CanClose": false,
		"OnSuccess": "{ alert('onSuccess'); }",
		"OnError": "{ alert('onError'); }"
	}
}
```

# See Also

* [`DataSource`](../../../DataSources/)