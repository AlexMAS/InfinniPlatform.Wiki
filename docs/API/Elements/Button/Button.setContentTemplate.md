---
layout: doc
title: "Button.setContentTemplate"
position: 2
---

Устанавливает [функцию](../../Script/) шаблонизации содержимого кнопки.

# Syntax

```js
button.setContentTemplate(value)
```

## Parameters

|Name|Type|Required|Description|
|----|----|:--:|-----------|
|value|[`Script`](../../Script/)|-|Преобразователь данных между элементом и источником|

## Returns

Метод ничего не возвращает.

# Examples

```js
//js-demo
var button = new Button();
var $button = button.render();
//button.setContentTemplate(???);

$elementForExample.append($button);
```

# See Also

* [`getContentTemplate`](../Button.getContentTemplate/)
