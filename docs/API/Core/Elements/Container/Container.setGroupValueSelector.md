---
layout: doc
title: "Container.setGroupValueSelector()"
position: 5
---

Устанавливает [функцию](../../../Script/), определяющую условие группировки дочерних элементов контейнера.

# Syntax

```js
container.setGroupValueSelector(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Script/)|Функция, определяющая условие группировки дочерних элементов контейнера|

Данная функция в параметре `args` принимает информацию об элементе контейнера. Свойство `args.value` содержит исходный элемент.
Результатом работы функции должно быть некоторое значение, по которому будут группироваться элементы.

## Returns

Метод ничего не возвращает.

# Examples

```js
var selector = function(context, args) {
	var item = args.value;
	return item.Class;
};

container.setGroupValueSelector(selector);
```

# See Also

* [`getGroupValueSelector()`](../Container.getGroupValueSelector/)
