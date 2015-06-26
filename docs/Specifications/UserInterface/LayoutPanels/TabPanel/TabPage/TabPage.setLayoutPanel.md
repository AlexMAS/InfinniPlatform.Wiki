---
layout: doc
title: "TabPage.setLayoutPanel()"
position: 17
---

Устанавливает [контейнер элементов](../../../) страницы.

# Syntax

```js
TabPage.setLayoutPanel(value)
```

## Parameters

`value`

[Контейнер элементов](../../../) страницы.

# Examples

```js
var view = TabPage.getView();
var layoutPanel = new GridPanel(view);
TabPage.setLayoutPanel(layoutPanel);
```

# See Also

* [`getLayoutPanel()`](../TabPage.getLayoutPanel/)
