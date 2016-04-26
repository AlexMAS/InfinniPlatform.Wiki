---
layout: doc
title: "TabPanel.onSelectedItemChanged"
position: 100
---

Устанавливает [обработчик события](../../../Core/Script/) о том, что выделенный элемент изменился.

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
tabPanel.onSelectedItemChanged(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[`Script`](../../../Core/Script/)|Обработчик события о том, что выделенный элемент изменился|

## Returns

Метод ничего не возвращает

# Examples

```js
var tabPanel = new TabPanel();
var tabPage1 = new TabPage();
var tabPage2 = new TabPage();
tabPanel.getItems().add(tabPage1);
tabPanel.getItems().add(tabPage2);
tabPanel.setSelectedItem(tabPage1);

tabPanel.onSelectedItemChanged(
  function(context, args) { alert('Item is selected!'); }
);

tabPanel.setSelectedItem(tabPage2);
```

# See Also

* [`getSelectedItem()`](../TabPanel.getSelectedItem/)
* [`setSelectedItem()`](../TabPanel.setSelectedItem/)
* [`getItems()`](../TabPanel.getItems/)
