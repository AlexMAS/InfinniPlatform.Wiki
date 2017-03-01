---
layout: doc
title: "RouterService.setParams"
position: 4
---

Устанавливает параметры, который будут передаваться в скрипты, вызываемые RouterService.

# Syntax

```js
RouterService.setParams(params)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|params|`Object`|Параметры, которые будут передаваться в скрипты, вызываемые RouterService.|

## Returns

Метод ничего не возвращает.

# Examples

```js
var param = {
	user: {
		id: 1,
		name: 'Иванов Иван Иванович'
	}
};
RouterService.setParams( param );
```

# See Also

* [`addParams`](../RouterService.addParams/)
* [`setContext`](../RouterService.setContext/)
