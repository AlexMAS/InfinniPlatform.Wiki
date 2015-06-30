---
layout: doc
title: "TabPanel.getSelectedItem()"
position: 16
---

Возвращает выделенный дочерний элемент панели.

# Description

В каждый момент времени пользователь может работать только с одной [страницей](../TabPage/), которая
соответствует выделенному дочернему элементу панели. Метод [`setSelectedItem()`](../TabPanel.setSelectedItem/)
позволяет программно выделить необходимый элемент. Выделяемый элемент должен присутствовать в
[коллекции](../../../KeyConcepts/Collection/) дочерних элементов панели - [`getItems()`](../Panel.getItems/).
Если соответствующая страница [заблокирована](../../../KeyConcepts/Element/Element.getEnabled/),
[скрыта](../../../KeyConcepts/Element/Element.getVisible/) или не найдена, выделение элемента
завершится неудачей и метод [`setSelectedItem()`](../TabPanel.setSelectedItem/) вернет значение
`false`. При успешном выделении элемента данный метод вернет значение `true`. Изменение выделенного
элемента приводит к возникновению события [`onSelectedItemChanged`](../TabPanel.onSelectedItemChanged/).

# Syntax

```js
TabPanel.getSelectedItem()
```

## Returns

Выделенный дочерний элемент панели.

# Examples

```js
var selectedItem = TabPanel.getSelectedItem();
```

# See Also

* [`setSelectedItem()`](../TabPanel.setSelectedItem/)
* [`getItems()`](../TabPanel.getItems/)
* [`onSelectedItemChanged`](../TabPanel.onSelectedItemChanged/)
