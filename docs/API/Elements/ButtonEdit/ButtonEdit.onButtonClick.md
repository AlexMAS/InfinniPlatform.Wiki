---
layout: doc
title: "ButtonEdit.onButtonClick"
position: 100
---

Устанавливает [обработчик события](../../../Core/Script/) нажатия на кнопку.

# Syntax

```js
buttonEdit.onButtonClick(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`callback`|[Script](../../../Core/Script/)|Обработчик события нажатия на кнопку|

# Examples

```js
buttonEdit.onButtonClick(
  function(context, args) { alert('onButtonClick'); }
);
```
