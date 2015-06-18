---
layout: doc
title: "Panel.setCollapsed()"
position: 6
---

Устанавливает значение, определяющее, свернута ли панель.

# Description

Вызов метода [`setCollapsible()`](../Panel.setCollapsible/) управляет возможностью сворачивания
панели. Если сворачивание запрещено, панель нельзя свернуть ни визуально, ни программно - с помощью
метода [`setCollapsed()`](../Panel.setCollapsed/). Если сворачивание было запрещено в то время, как
панель была свернута, панель разворачивается автоматически.

# Syntax

```js
Panel.setCollapsed(value)
```

## Parameters

`value`

Логическое значение, определяющее, свернута ли панель. Значение `false` говорит о том, что панель
развернута (значение по умолчанию), значение `true` - свернута.

# Examples

```js
// Disable collapsing
Panel.setCollapsible(false);
Panel.setCollapsed(false);   // No effect, Panel.getCollapsed() === false
Panel.setCollapsed(true);    // No effect, Panel.getCollapsed() === false

// Enable collapsing
Panel.setCollapsible(true);
Panel.setCollapsed(true);    // Collapsed, Panel.getCollapsed() === true
Panel.setCollapsed(false);   // Expanded, Panel.getCollapsed() === false
Panel.setCollapsed(true);    // Collapsed, Panel.getCollapsed() === true

// Disable collapsing
Panel.setCollapsible(false); // Expanded, Panel.getCollapsed() === false
```

# See Also

* [`getCollapsed()`](../Panel.getCollapsed/)
* [`getCollapsible()`](../Panel.getCollapsible/)
* [`setCollapsible()`](../Panel.setCollapsible/)
