---
layout: doc
title: "TabPage.setTabPanel()"
position: 11
---

Устанавливает родительскую [панель закладок](../../).

# Description

Экземпляры панели закладок [`TabPanel`](../../) и страницы [`TabPage`](../) могут быть созданы в разное
время. Однако для того, чтобы страница появилась в панели закладок, ее необходимо добавить туда явно:

```js
var tabPanel = new TabPanel(view);
var tabPage = new TabPage(view);
tabPanel.getItems().add(tabPage);
```

В момент добавления страницы устанавливается связь между панелью и добавленной страницей. В этот момент
панель вызывает у добавленной страницы метод `setTabPanel()` и передает ссылку на себя. В свою очередь
метод `setTabPanel()` запоминает ссылку на переданную родительскую панель. Если в момент вызова метода
`setTabPanel()` страница относилась к другой панели, она из нее автоматически удаляется.

# Syntax

```js
TabPage.setTabPanel(value)
```

## Parameters

`value`

Родительская [панель закладок](../../).

# Examples

```js
TabPage.setTabPanel(tabPanel);
```

# See Also

* [`getTabPanel()`](../TabPage.getTabPanel/)
* [`TabPanel`](../../)
