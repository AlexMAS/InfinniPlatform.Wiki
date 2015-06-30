---
layout: doc
title: "Panel.setHeaderTemplate()"
position: 15
---

Устанавливает [функцию](../../../KeyConcepts/Script/) шаблонизации заголовка панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации заголовка панели определена,
то она используется при установке заголовка панели - [`setHeader()`](../Panel.setHeader/).
Если шаблон не определен, метод [`setHeader()`](../Panel.setHeader/) будет ожидать ссылку
на готовый [визуальный элемент](../../../KeyConcepts/Element/).

# Syntax

```js
Panel.setHeaderTemplate(value)
```

## Parameters

`value`

[Функция](../../../KeyConcepts/Script/) шаблонизации заголовка панели. В параметре `argument` передается
информация, необходимая для формирования [визуального элемента](../../../KeyConcepts/Element/), который
будет отображен в качестве заголовка панели. Свойство `argument.value` содержит данные заголовка.
Результатом работы функции должен быть [визуальный элемент](../../../KeyConcepts/Element/).

# Examples

```js
Panel.setHeaderTemplate(function(context, argument) {
  var element = new Label();
  element.setValue(argument.value);
  return element;
});

Panel.setHeader('Header text');
```

# See Also

* [`getHeaderTemplate()`](../Panel.getHeaderTemplate/)
* [`getHeader()`](../Panel.getHeader/)
* [`setHeader()`](../Panel.setHeader/)
