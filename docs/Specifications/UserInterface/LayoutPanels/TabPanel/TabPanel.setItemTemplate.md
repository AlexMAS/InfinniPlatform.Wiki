---
layout: doc
title: "TabPanel.setItemTemplate()"
position: 8
---

Устанавливает [функцию](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели определена,
то она используется при изменении [коллекции](../../../KeyConcepts/Collection/) дочерних элементов
панели - [`getItems()`](../Panel.getItems/). Если шаблон не определен, коллекция дочерних элементов
панели должна содержать ссылки на экземпляры [`TabPage`](../TabPage/).

# Syntax

```js
TabPanel.setItemTemplate(value)
```

## Parameters

`value`

[Функция](../../../KeyConcepts/Script/) шаблонизации дочерних элементов панели. В параметре `argument`
передается информация, необходимая для формирования экземпляра [`TabPage`](../TabPage/). Свойство
`argument.value` содержит исходный элемент. Результатом работы функции должен быть экземпляр
[`TabPage`](../TabPage/).

# Examples

```js
TabPanel.setHeaderTemplate(function(context, argument) {
  var header = new Label(context.view);
  header.setValue(argument.value);
  return header;
});

TabPanel.setItemTemplate(function(context, argument) {
  var tabPage = new TabPage(context.view);
  var content = new Label(context.view);
  content.setValue(argument.value);
  tabPage.getItems().add(content);
  return tabPage;
});

TabPanel.getItems().reset([
  'One',
  'Two',
  'Three'
]);
```

# See Also

* [`getItemTemplate()`](../TabPanel.getItemTemplate/)
* [`getHeaderTemplate()`](../TabPanel.getHeaderTemplate/)
* [`setHeaderTemplate()`](../TabPanel.setHeaderTemplate/)
* [`getItems()`](../TabPanel.getItems/)
* [`Collection`](../../../KeyConcepts/Collection/)
* [`TabPage`](../TabPage/)
