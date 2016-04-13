---
layout: doc
title: "Panel.setCollapsible()"
position: 2
---

Устанавливает значение, определяющее, разрешено ли сворачивание панели.

# Description

Вызов метода [`setCollapsible()`](../Panel.setCollapsible/) управляет возможностью сворачивания
панели. Если сворачивание запрещено, панель нельзя свернуть ни визуально, ни программно - с помощью
метода [`setCollapsed()`](../Panel.setCollapsed/). Если сворачивание было запрещено в то время, как
панель была свернута, панель разворачивается автоматически.

# Syntax

```js
panel.setCollapsible(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`Boolean`|Флаг, определяющий, разрешено ли сворачивание панели. Значение `false` говорит о том, что сворачивание запрещено, значение `true` - сворачивание разрешено.|

## Returns

Метод ничего не возвращает.

# Examples

```js
// Disable collapsing
panel.setCollapsible(false);
panel.setCollapsed(false);   // No effect, panel.getCollapsed() === false
panel.setCollapsed(true);    // No effect, panel.getCollapsed() === false

// Enable collapsing
panel.setCollapsible(true);
panel.setCollapsed(true);    // Collapsed, panel.getCollapsed() === true
panel.setCollapsed(false);   // Expanded, panel.getCollapsed() === false
panel.setCollapsed(true);    // Collapsed, panel.getCollapsed() === true

// Disable collapsing
panel.setCollapsible(false); // Expanded, panel.getCollapsed() === false
```

# See Also

* [`getCollapsible()`](../Panel.getCollapsible/)
* [`getCollapsed()`](../Panel.getCollapsed/)
* [`setCollapsed()`](../Panel.setCollapsed/)
