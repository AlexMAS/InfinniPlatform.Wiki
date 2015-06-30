---
layout: doc
title: "View.setItemTemplate()"
position: 17
---

Устанавливает [функцию](../../Script/) шаблонизации дочерних элементов панели.

# Description

Если [функция](../../Script/) шаблонизации дочерних элементов определена, то она используется при
изменении [коллекции](../../Collection/) дочерних элементов представления - [`getItems()`](../View.getItems/).
Если шаблон не определен, коллекция дочерних элементов представления должна содержать ссылки на
готовые [визуальные элементы](../../Element/).

# Syntax

```js
View.setItemTemplate(value)
```

## Parameters

`value`

[Функция](../../Script/) шаблонизации дочерних элементов представления. В параметре `argument`
передается информация, необходимая для формирования [визуального элемента](../../Element/).
Свойство `argument.value` содержит исходный элемент. Результатом работы функции должен быть
[визуальный элемент](../../Element/).

# Examples

```js
View.setItemTemplate(function(context, argument) {
  var element = new Label();
  element.setValue(argument.value);
  return element;
});

View.getItems().reset([
  'One',
  'Two',
  'Three'
]);
```

# See Also

* [`getItemTemplate()`](../View.getItemTemplate/)
* [`getItems()`](../View.getItems/)
* [`Collection`](../../Collection/)
