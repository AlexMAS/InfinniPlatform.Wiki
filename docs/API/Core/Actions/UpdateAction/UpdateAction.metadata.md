---
layout: doc
title: "UpdateAction.metadata"
position: 0
---

Метаданные типа [`UpdateAction`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|DestinationValue.Source<sup>*</sup>|`String`|Название источника данных|
|OnSuccess|[`Script`](../../../Script/)| Устанавливает обработчик успешного завершения действия|
|OnError|[`Script`](../../../Script/)| Устанавливает обработчик завершения действия с ошибкой|

<sup>*</sup> Обязательное свойство.

# Examples

```json
{
	"UpdateAction": {
		"DestinationValue": {
			"Source": "DataSource1"
		},
		"OnSuccess": "{ alert('onSuccess'); }",
		"OnError": "{ alert('onError'); }"
	}
}
```

# See Also

* [`DataSource`](../../DataSources/)