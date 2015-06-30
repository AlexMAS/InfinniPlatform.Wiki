---
layout: doc
title: "TabPanel.setHeaderTemplate()"
position: 6
---

Устанавливает [функцию](../../../KeyConcepts/Script/) шаблонизации закладок дочерних элементов панели.

# Description

Если [функция](../../../KeyConcepts/Script/) шаблонизации закладок дочерних элементов панели
определена, то она используется при изменении [коллекции](../../../KeyConcepts/Collection/)
дочерних элементов панели - [`getItems()`](../Panel.getItems/).

# Syntax

```js
TabPanel.setHeaderTemplate(value)
```

## Parameters

`value`

[Функция](../../../KeyConcepts/Script/) шаблонизации закладок дочерних элементов
панели. В параметре `argument` передается информация, необходимая для формирования
[визуального элемента](../../../KeyConcepts/Element/), который будет отображен в
качестве закладки панели. Свойство `argument.value` содержит исходный элемент.
Результатом работы функции должен быть [визуальный элемент](../../../KeyConcepts/Element/).

# Examples

```js
TabPanel.setHeaderTemplate(function(context, argument) {
  var header = new Label();
  header.setValue(argument.value);
  return header;
});

TabPanel.setItemTemplate(function(context, argument) {
  var tabPage = new TabPage();
  var content = new Label();
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

* [`getHeaderTemplate()`](../TabPanel.getHeaderTemplate/)
* [`getItemTemplate()`](../TabPanel.getItemTemplate/)
* [`setItemTemplate()`](../TabPanel.setItemTemplate/)
* [`getItems()`](../TabPanel.getItems/)
* [`Collection`](../../../KeyConcepts/Collection/)
