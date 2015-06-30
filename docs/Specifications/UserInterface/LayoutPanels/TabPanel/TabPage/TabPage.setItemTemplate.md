---
layout: doc
title: "TabPage.setItemTemplate()"
position: 22
---

Устанавливает [функцию](../../../../KeyConcepts/Script/) шаблонизации дочерних элементов страницы.

# Description

Если [функция](../../../../KeyConcepts/Script/) шаблонизации дочерних элементов определена, то она
используется при изменении [коллекции](../../../../KeyConcepts/Collection/) дочерних элементов страницы -
[`getItems()`](../TabPage.getItems/). Если шаблон не определен, коллекция дочерних элементов страницы
должна содержать ссылки на готовые [визуальные элементы](../../../../KeyConcepts/Element/).

# Syntax

```js
TabPage.setItemTemplate(value)
```

## Parameters

`value`

[Функция](../../../../KeyConcepts/Script/) шаблонизации дочерних элементов страницы. В параметре `argument`
передается информация, необходимая для формирования [визуального элемента](../../../../KeyConcepts/Element/).
Свойство `argument.value` содержит исходный элемент. Результатом работы функции должен быть [визуальный
элемент](../../../../KeyConcepts/Element/).

# Examples

```js
TabPage.setItemTemplate(function(context, argument) {
  var element = new Label();
  element.setValue(argument.value);
  return element;
});

TabPage.getItems().reset([
  'One',
  'Two',
  'Three'
]);
```

# See Also

* [`getItemTemplate()`](../TabPage.getItemTemplate/)
* [`getItems()`](../TabPage.getItems/)
* [`Collection`](../../../../KeyConcepts/Collection/)
