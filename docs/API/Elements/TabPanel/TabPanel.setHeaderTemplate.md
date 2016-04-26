---
layout: doc
title: "TabPanel.setHeaderTemplate()"
position: 6
---

Устанавливает [функцию](../../../Core/Script/) шаблонизации закладок дочерних элементов панели.

# Description

Если [функция](../../../Core/Script/) шаблонизации закладок дочерних элементов панели
определена, то она используется при изменении [коллекции](../../../Core/Collection/)
дочерних элементов панели - [`getItems()`](../../../Core/Elements/Container/Container.getItems/).

# Syntax

```js
tabPanel.setHeaderTemplate(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Core/Script/)|Функция шаблонизации закладок дочерних элементов панели. В параметре `args` передается информация, необходимая для формирования [визуального элемента](../../../Core/Elements/Element/), который будет отображен в качестве закладки панели. Свойство `args.value` содержит исходный элемент. Результатом работы функции должен быть [визуальный элемент](../../../Core/Elements/Element/)|

## Returns

Метод ничего не возвращает.

# Examples

```js
tabPanel.setHeaderTemplate(function(context, argument) {
  var header = new Label();
  header.setValue(argument.value);
  return header;
});

tabPanel.setItemTemplate(function(context, argument) {
  var tabPage = new TabPage();
  var content = new Label();
  content.setValue(argument.value);
  tabPage.getItems().add(content);
  return tabPage;
});

tabPanel.getItems().reset([
  'One',
  'Two',
  'Three'
]);
```

# See Also

* [`getHeaderTemplate()`](../TabPanel.getHeaderTemplate/)
* [`getItemTemplate()`](../../../Core/Elements/Container/Container.getItemTemplate/)
* [`setItemTemplate()`](../../../Core/Elements/Container/Container.setItemTemplate/)
* [`getItems()`](../../../Core/Elements/Container/Container.getItems/)
* [`Collection`](../../../Core/Collection/)
