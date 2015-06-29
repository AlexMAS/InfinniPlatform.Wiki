---
layout: doc
title: "TabPanel.getItemTemplate()"
position: 7
---

Возвращает [функцию](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели определена,
то она используется при изменении [коллекции](../../../KeyConcepts/Collection/) дочерних элементов
панели - [`getItems()`](../Panel.getItems/). Если шаблон не определен, коллекция дочерних элементов
панели должна содержать ссылки на экземпляры [`TabPage`](../TabPage/).

# Syntax

```js
TabPanel.getItemTemplate()
```

## Returns

[Функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели. В параметре `argument`
передается информация, необходимая для формирования экземпляра [`TabPage`](../TabPage/). Свойство
`argument.value` содержит исходный элемент. Результатом работы функции должен быть экземпляр
[`TabPage`](../TabPage/).

# Examples

```js
var itemTemplate = TabPanel.getItemTemplate();
```

# See Also

* [`setItemTemplate()`](../TabPanel.setItemTemplate/)
* [`getHeaderTemplate()`](../TabPanel.getHeaderTemplate/)
* [`setHeaderTemplate()`](../TabPanel.setHeaderTemplate/)
* [`getItems()`](../TabPanel.getItems/)
* [`Collection`](../../../KeyConcepts/Collection/)
* [`TabPage`](../TabPage/)
