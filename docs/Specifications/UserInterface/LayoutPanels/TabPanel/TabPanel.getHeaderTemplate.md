---
layout: doc
title: "TabPanel.getHeaderTemplate()"
position: 14
---

Возвращает [функцию](../../../KeyConcepts/Script/) шаблонизации закладок дочерних элементов панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации закладок дочерних элементов панели
определена, то она используется при изменении [коллекции](../../../KeyConcepts/Collection/)
дочерних элементов панели - [`getItems()`](../Panel.getItems/).

# Syntax

```js
TabPanel.getHeaderTemplate()
```

## Returns

[Функция](../../../KeyConcepts/Script/) шаблонизации закладок дочерних элементов
панели. В параметре `argument` передается информация, необходимая для формирования
[визуального элемента](../../../KeyConcepts/Element/), который будет отображен в
качестве закладки панели. Свойство `argument.value` содержит исходный элемент.
Результатом работы функции должен быть [визуальный элемент](../../../KeyConcepts/Element/).

# Examples

```js
var headerTemplate = TabPanel.getHeaderTemplate();
```

# See Also

* [`setHeaderTemplate()`](../TabPanel.setHeaderTemplate/)
* [`getItemTemplate()`](../TabPanel.getItemTemplate/)
* [`setItemTemplate()`](../TabPanel.setItemTemplate/)
* [`getItems()`](../TabPanel.getItems/)
* [`Collection`](../../../KeyConcepts/Collection/)
