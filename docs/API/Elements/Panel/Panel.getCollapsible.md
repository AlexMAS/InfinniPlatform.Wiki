---
layout: doc
title: "Panel.getCollapsible()"
position: 1
---

Возвращает значение, определяющее, разрешено ли сворачивание панели.

# Description

Вызов метода [`setCollapsible()`](../Panel.setCollapsible/) управляет возможностью сворачивания
панели. Если сворачивание запрещено, панель нельзя свернуть ни визуально, ни программно - с помощью
метода [`setCollapsed()`](../Panel.setCollapsed/). Если сворачивание было запрещено в то время, как
панель была свернута, панель разворачивается автоматически.

# Syntax

```js
panel.getCollapsible()
```

## Parameters

Нет

## Returns

Логическое значение, определяющее, разрешено ли сворачивание панели.  
Значение `false` говорит о том, что сворачивание запрещено (значение по умолчанию),  
значение `true` - сворачивание разрешено.

# Examples

```js
var isCollapsible = panel.getCollapsible();
```

# See Also

* [`setCollapsible()`](../Panel.setCollapsible/)
* [`getCollapsed()`](../Panel.getCollapsed/)
* [`setCollapsed()`](../Panel.setCollapsed/)
