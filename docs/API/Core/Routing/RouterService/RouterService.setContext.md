---
layout: doc
title: "RouterService.setContext"
position: 3
---

Устанавливает контекст, который будет передаваться в скрипты, вызываемые RouterService.

# Syntax

```js
RouterService.setContext(context)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|context|`String`|Контекст, который будет передан в скрипты, вызываемые RouterService.|

## Returns

Метод ничего не возвращает.

# Examples

```js
RouterService.setContext( view.getContext() );
```

# See Also

* [`setParams`](../RouterService.setParams/)
* [`addParams`](../RouterService.addParams/)
