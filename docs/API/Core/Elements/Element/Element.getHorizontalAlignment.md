---
layout: doc
title: "Element.getHorizontalAlignment()"
position: 25
---

Возвращает [горизонтальное выравнивание](../ElementHorizontalAlignment/) в родительском элементе.

# Syntax

```js
Element.getHorizontalAlignment()
```


## Parameters

Нет

## Returns

[Горизонтальное выравнивание](../ElementHorizontalAlignment/) в родительском элементе.

# Examples

```js
//js-demo
var label = new Label();
var $label = label.render();

var div = document.createElement("div");
div.innerHTML = label.getHorizontalAlignment();

$elementForExample.prepend(div);

```

# See Also

* [`setHorizontalAlignment()`](../Element.setHorizontalAlignment/)
* [`ElementHorizontalAlignment`](../ElementHorizontalAlignment/)
