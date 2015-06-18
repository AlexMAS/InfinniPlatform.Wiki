---
layout: doc
title: "Panel.setItemTemplate()"
position: 8
---

Устанавливает [функцию](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов определена, то она
используется при установке списка дочерних элементов панели - [`setItems()`](../Panel.setItems/), -
и при добавлении новых дочерних элементов - [`addItem()`](../Panel.addItem/). Если шаблон не
определен, методы [`setItems()`](../Panel.setItems/) и [`addItem()`](../Panel.addItem/) будут
ожидать ссылки на готовые [визуальные элементы](../../../KeyConcepts/Element/).

# Syntax

```js
Panel.setItemTemplate(value)
```

## Parameters

`value`

[Функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели. В параметре `argument`
передается информация, необходимая для формирования [визуального элемента](../../../KeyConcepts/Element/).
Свойство `argument.value` содержит исходный элемент. Результатом работы функции должен быть [визуальный
элемент](../../../KeyConcepts/Element/).

# Examples

```js
Panel.setItemTemplate(function(context, argument) {
  var element = new Label(context.view);
  element.setValue(argument.value);
  return element;
});

Panel.setItems([
  'One',
  'Two',
  'Three'
]);
```

# See Also

* [`getItemTemplate()`](../Panel.getItemTemplate/)
* [`getItems()`](../Panel.getItems/)
* [`setItems()`](../Panel.setItems/)
* [`addItem()`](../Panel.addItem/)
* [`removeItem()`](../Panel.removeItem/)
