---
layout: doc
title: "TabPanel.setSelectedItem()"
position: 17
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
tabPanel.setSelectedItem(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`TabPage`](../TabPage/)|Дочерний элемент панели, который необходимо выделить|

## Returns

Логическое значение, определяющее успешность выделения дочернего элемента панели. Значение `false` говорит о том, элемент не был выделен, значение `true` - элемент успешно выделен.

# Examples

```js
var tabPanel = new TabPanel();
var tabPage1 = new TabPage();
var tabPage2 = new TabPage();
tabPanel.getItems().add(tabPage1);
tabPanel.getItems().add(tabPage2);
tabPanel.setSelectedItem(tabPage1);
```

# See Also

* [`getSelectedItem()`](../TabPanel.getSelectedItem/)
* [`getItems()`](../../../Core/Elements/Container/Container.getItems/)
* [`onSelectedItemChanged`](../TabPanel.onSelectedItemChanged/)
