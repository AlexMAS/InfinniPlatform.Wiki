---
layout: doc
title: "Element.onLoaded"
position: 100
---

Устанавливает [обработчик события](../../../Script/) о том, что элемент был загружен. 

# Syntax

```js
Element.onLoaded(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Script/)|Обработчик события о том, что элемент был загружен.|

# Examples

```js
Element.onLoaded(
  function(context, args) { alert('Element is loaded!'); }
);
```
