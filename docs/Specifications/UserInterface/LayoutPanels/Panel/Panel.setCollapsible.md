---
layout: doc
title: "Panel.setCollapsible()"
position: 11
---

Устанавливает значение, определяющее, разрешено ли сворачивание панели.

# Description

Вызов метода [`setCollapsible()`](../Panel.setCollapsible/) управляет возможностью сворачивания
панели. Если сворачивание запрещено, панель нельзя свернуть ни визуально, ни программно - с помощью
метода [`setCollapsed()`](../Panel.setCollapsed/). Если сворачивание было запрещено в то время, как
панель была свернута, панель разворачивается автоматически.

# Syntax

```js
Panel.setCollapsible(value)
```

## Parameters

`value`

Логическое значение, определяющее, разрешено ли сворачивание панели. Значение `false` говорит о том,
что сворачивание запрещено (значение по умолчанию), значение `true` - сворачивание разрешено.

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

* [`getCollapsible()`](../Panel.getCollapsible/)
* [`getCollapsed()`](../Panel.getCollapsed/)
* [`setCollapsed()`](../Panel.setCollapsed/)
