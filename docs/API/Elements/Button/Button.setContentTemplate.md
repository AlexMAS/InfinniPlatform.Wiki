---
layout: doc
title: "Button.setContentTemplate"
position: 2
---

Устанавливает [функцию](../../../Core/Script/) шаблонизации содержимого кнопки.

# Syntax

```js
button.setContentTemplate(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../Script/)|Функция шаблонизации содержимого кнопки|

## Returns

Метод ничего не возвращает.

# Examples

```js
//js-demo
var button = new Button();
var contentTemplate = function (context, args) {
    var label = new Label();
    label.setValue('Button 1');
    return label;
}

button.setContentTemplate(contentTemplate);
$elementForExample.append(button.render());
```

# See Also

* [`getContentTemplate`](../Button.getContentTemplate/)
