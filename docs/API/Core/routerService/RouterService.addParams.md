---
layout: doc
title: "RouterService.addParams"
position: 5
---

Добавляет параметры, которые нужно передавать в скрипты, вызываемые RouterService.

# Syntax

```js
RouterService.addParams(params)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|params|`Object`|Параметры, которые нужно передавать в скрипты, вызываемые RouterService.|

## Returns

Метод ничего не возвращает.

# Examples

```js
var param = {
	userRole: 'admin'
};
RouterService.addParams( param );
```

# See Also

* [`setParams`](../RouterService.setParams/)
* [`setContext`](../RouterService.setContext/)
