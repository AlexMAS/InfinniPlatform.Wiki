---
layout: doc
title: "Panel.getHeaderTemplate()"
position: 14
---

Возвращает [функцию](../../../KeyConcepts/Script/) шаблонизации заголовка панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации заголовка панели определена,
то она используется при установке заголовка панели - [`setHeader()`](../Panel.setHeader/).
Если шаблон не определен, метод [`setHeader()`](../Panel.setHeader/) будет ожидать ссылку
на готовый [визуальный элемент](../../../KeyConcepts/Element/).

# Syntax

```js
Panel.getHeaderTemplate()
```

## Returns

[Функция](../../../KeyConcepts/Script/) шаблонизации заголовка панели. В параметре `argument` передается
информация, необходимая для формирования [визуального элемента](../../../KeyConcepts/Element/), который
будет отображен в качестве заголовка панели. Свойство `argument.value` содержит данные заголовка.
Результатом работы функции должен быть [визуальный элемент](../../../KeyConcepts/Element/).

# Examples

```js
var headerTemplate = Panel.getHeaderTemplate();
```

# See Also

* [`setHeaderTemplate()`](../Panel.setHeaderTemplate/)
* [`getHeader()`](../Panel.getHeader/)
* [`setHeader()`](../Panel.setHeader/)
