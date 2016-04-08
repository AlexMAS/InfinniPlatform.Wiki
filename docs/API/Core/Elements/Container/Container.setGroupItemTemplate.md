---
layout: doc
title: "Container.setGroupItemTemplate()"
position: 6
---

Устанавливает [функцию](../../../Script/) шаблонизации заголовков групп. 

# Description
Если в контейнере [задана группировка](../Container.setGroupValueSelector/), то, 
воспользовавшись `setGroupItemTemplate`, можно определить заголовки групп.

# Syntax

```js
container.setGroupItemTemplate(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Script/)|Функция шаблонизации заголовков групп|

Данная функция в параметре `args` принимает информацию о группах:

* `args.index` - индекс текущей группы,
* `args.item` - элементы текущей группы.

Результатом работы функции должен быть [визуальный элемент](../../Element/).


## Returns

Метод ничего не возвращает.

# Examples

```js
var headerCreator = function(context, args) {
	var element = new Label();
	var header = args.index + ') ' + args.item[0].Class
	element.setValue(header);
	return element;
};

container.setGroupItemTemplate(headerCreator);
```

# See Also

* [`getGroupItemTemplate()`](../Container.getGroupItemTemplate/)
* [`setGroupValueSelector()`](../Container.setGroupValueSelector/)
