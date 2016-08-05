---
layout: doc
title: "BaseAction.metadata"
position: 0
---

Метаданные, которые реализованы во [всех действиях InfinniUI](../../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|OnExecuted|[`Script`](../../../Script/)| Устанавливает обработчик завершения действия.|

# Examples

```json
{
	"CancelAction": {
		"OnExecuted": "{ alert('OnCancel'); }"
	}
}
```