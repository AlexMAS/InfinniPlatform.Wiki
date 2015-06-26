---
layout: doc
title: "TabPage.getItemTemplate()"
position: 21
---

Возвращает [функцию](../../../../KeyConcepts/Script/) шаблонизации дочерних элементов страницы.

# Description

Если [функция](../../../../KeyConcepts/Script/) шаблонизации дочерних элементов определена, то она
используется при изменении [коллекции](../../../../KeyConcepts/Collection/) дочерних элементов страницы -
[`getItems()`](../TabPage.getItems/). Если шаблон не определен, коллекция дочерних элементов страницы
должна содержать ссылки на готовые [визуальные элементы](../../../../KeyConcepts/Element/).

# Syntax

```js
TabPage.getItemTemplate()
```

## Returns

[Функция](../../../../KeyConcepts/Script/) шаблонизации дочерних элементов страницы. В параметре `argument`
передается информация, необходимая для формирования [визуального элемента](../../../../KeyConcepts/Element/).
Свойство `argument.value` содержит исходный элемент. Результатом работы функции должен быть [визуальный
элемент](../../../../KeyConcepts/Element/).

# Examples

```js
var itemTemplate = TabPage.getItemTemplate();
```

# See Also

* [`setItemTemplate()`](../TabPage.setItemTemplate/)
* [`getItems()`](../TabPage.getItems/)
* [`Collection`](../../../../KeyConcepts/Collection/)
