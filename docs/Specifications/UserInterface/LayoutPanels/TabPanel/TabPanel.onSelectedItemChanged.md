---
layout: doc
title: "TabPanel.onSelectedItemChanged"
position: 100
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что выделенный элемент изменился.

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
TabPanel.onSelectedItemChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что выделенный элемент изменился.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.value`
содержит ссылку на выделенный элемент.

# Examples

```js
var tabPanel = new TabPanel();
var tabPage1 = new TabPage();
var tabPage2 = new TabPage();
tabPanel.getItems().add(tabPage1);
tabPanel.getItems().add(tabPage2);
tabPanel.setSelectedItem(tabPage1);

tabPanel.onSelectedItemChanged(
  function(context, argument) { alert('Item is selected!'); }
);

tabPanel.setSelectedItem(tabPage2);
```

# See Also

* [`getSelectedItem()`](../TabPanel.getSelectedItem/)
* [`setSelectedItem()`](../TabPanel.setSelectedItem/)
* [`getItems()`](../TabPanel.getItems/)
