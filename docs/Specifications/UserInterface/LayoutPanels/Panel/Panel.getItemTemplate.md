---
layout: doc
title: "Panel.getItemTemplate()"
position: 15
---

Возвращает [функцию](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов определена, то она
используется при изменении [коллекции](../../../KeyConcepts/Collection/) дочерних элементов панели -
[`getItems()`](../Panel.getItems/). Если шаблон не определен, коллекция дочерних элементов панели
должна содержать ссылки на готовые [визуальные элементы](../../../KeyConcepts/Element/).

# Syntax

```js
Panel.getItemTemplate()
```

## Returns

[Функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели. В параметре `argument`
передается информация, необходимая для формирования [визуального элемента](../../../KeyConcepts/Element/).
Свойство `argument.value` содержит исходный элемент. Результатом работы функции должен быть [визуальный
элемент](../../../KeyConcepts/Element/).

# Examples

```js
var itemTemplate = Panel.getItemTemplate();
```

# See Also

* [`setItemTemplate()`](../Panel.setItemTemplate/)
* [`getItems()`](../Panel.getItems/)
* [`Collection`](../../../KeyConcepts/Collection/)
