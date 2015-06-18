---
layout: doc
title: "Panel.getItemTemplate()"
position: 7
---

Возвращает [функцию](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов определена, то она
используется при установке списка дочерних элементов панели - [`setItems()`](../Panel.setItems/), -
и при добавлении новых дочерних элементов - [`addItem()`](../Panel.addItem/). Если шаблон не
определен, методы [`setItems()`](../Panel.setItems/) и [`addItem()`](../Panel.addItem/) будут
ожидать ссылки на готовые [визуальные элементы](../../../KeyConcepts/Element/).

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
* [`setItems()`](../Panel.setItems/)
* [`addItem()`](../Panel.addItem/)
* [`removeItem()`](../Panel.removeItem/)
