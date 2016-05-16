---
layout: doc
title: "TabPanel.getSelectedItem()"
position: 7
---

Возвращает выделенный дочерний элемент панели.

# Description

В каждый момент времени пользователь может работать только с одной [страницей](../TabPage/), которая
соответствует выделенному дочернему элементу панели. Метод [`setSelectedItem()`](../TabPanel.setSelectedItem/)
позволяет программно выделить необходимый элемент. Выделяемый элемент должен присутствовать в
[коллекции](../../../Core/Collection/) дочерних элементов панели - [`getItems()`](../../../Core/Elements/Container/Container.getItems/).
Если соответствующая страница [заблокирована](../../../Core/Elements/Element/Element.getEnabled/),
[скрыта](../../../Core/Elements/Element/Element.getVisible/) или не найдена, выделение элемента
завершится неудачей и метод [`setSelectedItem()`](../TabPanel.setSelectedItem/) вернет значение
`false`. При успешном выделении элемента данный метод вернет значение `true`. Изменение выделенного
элемента приводит к возникновению события [`onSelectedItemChanged`](../TabPanel.onSelectedItemChanged/).

# Syntax

```js
tabPanel.getSelectedItem()
```

## Parameters

Нет

## Returns

Выделенный дочерний элемент панели.

# Examples

```js
var selectedItem = tabPanel.getSelectedItem();
```

# See Also

* [`setSelectedItem()`](../TabPanel.setSelectedItem/)
* [`getItems()`](../../../Core/Elements/Container/Container.getItems/)
* [`onSelectedItemChanged`](../TabPanel.onSelectedItemChanged/)
