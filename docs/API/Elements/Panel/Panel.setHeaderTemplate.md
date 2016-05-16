---
layout: doc
title: "Panel.setHeaderTemplate()"
position: 6
---

Устанавливает [функцию](../../../Core/Script/) шаблонизации заголовка панели.

# Syntax

```js
panel.setHeaderTemplate(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Core/Script/)|Функция шаблонизации заголовка панели. В параметре `args` передается информация, необходимая для формирования [визуального элемента](../../../Core/Elements/Element/), который будет отображен в качестве заголовка панели. Свойство `args.value` содержит данные заголовка. Результатом работы функции должен быть [визуальный элемент](../../../Core/Elements/Element/)|

## Returns

Метод ничего не возвращает.

# Examples

```js
panel.setHeaderTemplate(function(context, args) {
  var element = new Label();
  element.setValue(args.value);
  return element;
});
```

# See Also

* [`getHeaderTemplate()`](../Panel.getHeaderTemplate/)
* [`getHeader()`](../Panel.getHeader/)
* [`setHeader()`](../Panel.setHeader/)
