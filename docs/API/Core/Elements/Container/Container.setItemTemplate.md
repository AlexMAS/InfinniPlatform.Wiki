---
layout: doc
title: "Container.setItemTemplate()"
position: 2
---

Устанавливает [функцию](../../../Script/) шаблонизации дочерних элементов контейнера.

# Description

Если [функция](../../../Script/) шаблонизации дочерних элементов определена, то она используется при
изменении [коллекции](../../../Collection/) дочерних элементов контейнера - [`getItems()`](../Container.getItems/).
Если шаблон не определен, коллекция дочерних элементов контейнера должна содержать ссылки на готовые
[визуальные элементы](../../Element/).

# Syntax

```js
container.setItemTemplate(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Script/)|Функция шаблонизации дочерних элементов контейнера|

В параметре `args` передается информация, необходимая для формирования [визуального элемента](../../Element/).
Свойство `args.value` содержит исходный элемент. Результатом работы функции должен быть [визуальный элемент](../../Element/).

## Returns

Метод ничего не возвращает.

# Examples

```js
container.setItemTemplate(function(context, args) {
  var element = new Label();
  element.setValue(args.value);
  return element;
});

container.getItems().reset([
  'One',
  'Two',
  'Three'
]);
```

# See Also

* [`getItemTemplate()`](../Container.getItemTemplate/)
* [`getItems()`](../Container.getItems/)
* [`Collection`](../../../Collection/)
