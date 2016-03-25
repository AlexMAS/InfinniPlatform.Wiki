---
layout: doc
title: "Button.setContent"
position: 2
---

Устанавливает содержимое кнопки.


# Syntax

```js
button.setContent(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`String`|Содержимое кнопки|

## Returns

Метод ничего не возвращает.

# Examples

```js
//js-demo
var button = new Button();
button.setContent('Click<br/>me');
$elementForExample.append(button.render());
```

# See Also

* [`getContent`](../Button.getContent/)
