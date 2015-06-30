---
layout: doc
title: "View.getItemTemplate()"
position: 15
---

Возвращает [функцию](../../Script/) шаблонизации дочерних элементов представления.

# Description

Если [функция](../../Script/) шаблонизации дочерних элементов определена, то она используется при
изменении [коллекции](../../Collection/) дочерних элементов представления - [`getItems()`](../View.getItems/).
Если шаблон не определен, коллекция дочерних элементов представления должна содержать ссылки на
готовые [визуальные элементы](../../Element/).

# Syntax

```js
View.getItemTemplate()
```

## Returns

[Функция](../../Script/) шаблонизации дочерних элементов представления. В параметре `argument`
передается информация, необходимая для формирования [визуального элемента](../../Element/).
Свойство `argument.value` содержит исходный элемент. Результатом работы функции должен быть
[визуальный элемент](../../Element/).

# Examples

```js
var itemTemplate = View.getItemTemplate();
```

# See Also

* [`setItemTemplate()`](../View.setItemTemplate/)
* [`getItems()`](../View.getItems/)
* [`Collection`](../../Collection/)
