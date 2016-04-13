---
layout: doc
title: "Panel.getHeaderTemplate()"
position: 5
---

Возвращает [функцию](../../../Core/Script/) шаблонизации заголовка панели.

# Syntax

```js
panel.getHeaderTemplate()
```

## Parameters

Нет

## Returns

[Функция](../../../Core/Script/) шаблонизации заголовка панели. В параметре `args` передается
информация, необходимая для формирования [визуального элемента](../../../Core/Elements/Element/), который
будет отображен в качестве заголовка панели. Свойство `args.value` содержит данные заголовка.
Результатом работы функции должен быть [визуальный элемент](../../../Core/Elements/Element/).

# Examples

```js
var headerTemplate = panel.getHeaderTemplate();
```

# See Also

* [`setHeaderTemplate()`](../Panel.setHeaderTemplate/)
* [`getHeader()`](../Panel.getHeader/)
* [`setHeader()`](../Panel.setHeader/)
