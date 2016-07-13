---
layout: doc
title: "Element.setStyle()"
position: 40
---

Устанавливает элементу кастомный стиль (на деле устанавливает ему одноименный класс,
стили которого можно задать самому в подключаемых на страницу стилях).
Этот способ кастомизации внешнего вида череват разными последствиями, 
поскольку примененные к классу css-правила могут противоречить правилам задуманным InfinniUI,
в следствии чего верстка может "поехать" неожиданным образом. 
Следует применять эту возможность как можно реже и как можно аккуратнее

# Syntax

```js
Element.setStyle(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`String`|Стилевой класс элемента.|

## Returns

Метод не возвращает значений.

# Examples

```js
Element.setStyle('toolbar_button');
```

# See Also

* [`getStyle()`](../Element.getStyle/)
* [`getTextStyle()`](../Element.getTextStyle/)
* [`setTextStyle()`](../Element.setTextStyle/)
* [`getForeground()`](../Element.getForeground/)
* [`setForeground()`](../Element.setForeground/)
* [`getBackground()`](../Element.getBackground/)
* [`setBackground()`](../Element.setBackground/)
