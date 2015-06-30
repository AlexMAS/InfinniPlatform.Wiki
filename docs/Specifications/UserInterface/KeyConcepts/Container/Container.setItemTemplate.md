---
layout: doc
title: "Container.setItemTemplate()"
position: 16
---

Устанавливает [функцию](../../Script/) шаблонизации дочерних элементов контейнера.

# Description

Если [функция](../../Script/) шаблонизации дочерних элементов определена, то она используется при
изменении [коллекции](../../Collection/) дочерних элементов контейнера - [`getItems()`](../Container.getItems/).
Если шаблон не определен, коллекция дочерних элементов контейнера должна содержать ссылки на готовые
[визуальные элементы](../../Element/).

# Syntax

```js
Container.setItemTemplate(value)
```

## Parameters

`value`

[Функция](../../Script/) шаблонизации дочерних элементов контейнера. В параметре `argument`
передается информация, необходимая для формирования [визуального элемента](../../Element/).
Свойство `argument.value` содержит исходный элемент. Результатом работы функции должен быть
[визуальный элемент](../../Element/).

# Examples

```js
Container.setItemTemplate(function(context, argument) {
  var element = new Label();
  element.setValue(argument.value);
  return element;
});

Container.getItems().reset([
  'One',
  'Two',
  'Three'
]);
```

# See Also

* [`getItemTemplate()`](../Container.getItemTemplate/)
* [`getItems()`](../Container.getItems/)
* [`Collection`](../../Collection/)
