---
layout: doc
title: "Container.getGroupValueSelector()"
position: 4
---

Возвращает [функцию](../../../Script/), определяющую условие группировки дочерних элементов контейнера.

# Syntax

```js
container.getGroupValueSelector()
```

## Parameters

Нет

## Returns

[Функция](../../../Script/), определяющая условие группировки дочерних элементов контейнера.  

Данная функция в параметре `args` принимает информацию об элементе контейнера. Свойство `args.value` содержит исходный элемент.  
Результатом работы функции должно быть некоторое значение, по которому будут группироваться элементы.

# Examples

```js
var groupValueSelector = container.getGroupValueSelector();
```

# See Also

* [`setGroupValueSelector()`](../Container.setGroupValueSelector/)
