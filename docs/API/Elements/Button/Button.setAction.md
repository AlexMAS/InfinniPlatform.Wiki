---
layout: doc
title: "Button.setAction"
position: 3
---

Устанавливает [`действие`](../../../Core/Action/) при нажатии на кнопку.

# Syntax

```js
button.setAction(action)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|action|[`Action`](../../../Core/Action/)|Действие|

## Returns

Нет

# Examples

```js
var action = new ServerAction(/** Params for ServerAction **/); 
var content = button.getContent(action);
```

# See Also

* [`getContent`](../Button.getContent/)
