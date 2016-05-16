---
layout: doc
title: "Container.getGroupItemTemplate()"
position: 6
---

Возвращает [функцию](../../../Script/) шаблонизации заголовков групп. 

# Description
Если в контейнере [задана группировка](../Container.setGroupValueSelector/), то, 
воспользовавшись [`setGroupItemTemplate`](../Container.setGroupItemTemplate/), можно определить заголовки групп.

# Syntax

```js
container.getGroupItemTemplate()
```

## Parameters

Нет

## Returns

[Функция](../../../Script/) шаблонизации заголовков групп.  

Данная функция в параметре `args` принимает информацию о группах:

* `args.index` - индекс текущей группы,
* `args.item` - элементы текущей группы.

Результатом работы функции должен быть [визуальный элемент](../../Element/).

# Examples

```js
var groupItemTemplate = container.getGroupItemTemplate();
```

# See Also

* [`setGroupItemTemplate()`](../Container.setGroupItemTemplate/)
* [`setGroupValueSelector()`](../Container.setGroupValueSelector/)
