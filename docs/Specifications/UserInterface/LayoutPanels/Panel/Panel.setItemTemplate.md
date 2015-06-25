---
layout: doc
title: "Panel.setItemTemplate()"
position: 16
---

Устанавливает [функцию](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов определена, то она
используется при изменении [коллекции](../../../KeyConcepts/Collection/) дочерних элементов панели -
[`getItems()`](../Panel.getItems/). Если шаблон не определен, коллекция дочерних элементов панели
должна содержать ссылки на готовые [визуальные элементы](../../../KeyConcepts/Element/).

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

Panel.getItems().reset([
  'One',
  'Two',
  'Three'
]);
```

# See Also

* [`getItemTemplate()`](../Panel.getItemTemplate/)
* [`getItems()`](../Panel.getItems/)
* [`Collection`](../../../KeyConcepts/Collection/)
