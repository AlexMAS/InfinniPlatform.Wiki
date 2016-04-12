---
layout: doc
title: "Container.getItemTemplate()"
position: 1
---

Возвращает [функцию](../../../Script/) шаблонизации дочерних элементов контейнера.

# Description

Если [функция](../../../Script/) шаблонизации дочерних элементов определена, то она используется при
изменении [коллекции](../../../Collection/) дочерних элементов контейнера - [`getItems()`](../Container.getItems/).
Если шаблон не определен, коллекция дочерних элементов контейнера должна содержать ссылки на готовые
[визуальные элементы](../../Element/).

# Syntax

```js
container.getItemTemplate()
```

## Parameters

Нет

## Returns

[Функция](../../../Script/) шаблонизации дочерних элементов контейнера.  

В параметре `args` передается информация, необходимая для формирования [визуального элемента](../../Element/).
Свойство `args.value` содержит исходный элемент.  
Результатом работы функции должен быть [визуальный элемент](../../Element/).

# Examples

```js
var itemTemplate = container.getItemTemplate();
```

# See Also

* [`setItemTemplate()`](../Container.setItemTemplate/)
* [`getItems()`](../Container.getItems/)
* [`Collection`](../../../Collection/)
