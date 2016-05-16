---
layout: doc
title: "LinkView.createView()"
position: 4
---

Создает [представление](../../). 

# Syntax

```js
linkView.createView(callback)
```

## Parameters

|Name|Type|Description|
|----|----|---------|
|callback|[`Script`](../../../../Script/)|Обработчик события о том, что представление было создано|

Созданное представление передается в качестве аргумента в callback.

## Returns

Метод ничего не возвращает.

# Examples

```js
var onViewReady = function(createdView){
    createdView.open();
}

linkView.createView(onViewReady);
```