---
layout: doc
title: "TabPanel.getHeaderTemplate()"
position: 5
---

Возвращает [функцию](../../../Core/Script/) шаблонизации закладок дочерних элементов панели.

# Description

Если [функция](../../../Core/Script/) шаблонизации закладок дочерних элементов панели
определена, то она используется при изменении [коллекции](../../../Core/Collection/)
дочерних элементов панели - [`getItems()`](../../../Core/Elements/Container/Container.getItems/).

# Syntax

```js
tabPanel.getHeaderTemplate()
```

## Parameters

Нет

## Returns

[Функция](../../../Core/Script/) шаблонизации закладок дочерних элементов
панели. В параметре `args` передается информация, необходимая для формирования
[визуального элемента](../../../Core/Elements/Element/), который будет отображен в
качестве закладки панели. Свойство `args.value` содержит исходный элемент.
Результатом работы функции должен быть [визуальный элемент](../../../Core/Elements/Element/).

# Examples

```js
var headerTemplate = tabPanel.getHeaderTemplate();
```

# See Also

* [`setHeaderTemplate()`](../TabPanel.setHeaderTemplate/)
* [`getItemTemplate()`](../../../Core/Elements/Container/Container.getItemTemplate/)
* [`setItemTemplate()`](../../../Core/Elements/Container/Container.setItemTemplate/)
* [`getItems()`](../../../Core/Elements/Container/Container.getItems/)
* [`Collection`](../../../Core/Collection/)
