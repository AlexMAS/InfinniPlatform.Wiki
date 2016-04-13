---
layout: doc
title: "Panel.setCollapsed()"
position: 4
---

Устанавливает значение, определяющее, свернута ли панель.

# Description

Вызов метода [`setCollapsible()`](../Panel.setCollapsible/) управляет возможностью сворачивания панели.
Если сворачивание запрещено, панель нельзя свернуть ни визуально, ни программно - с помощью метода
[`setCollapsed()`](../Panel.setCollapsed/). Если сворачивание было запрещено в то время, как панель
была свернута, панель разворачивается автоматически.

Если панель была свернута, вызов метода [`setCollapsed()`](../Panel.setCollapsed/) с параметром `false`
означает необходимость развернуть панель. В этом случае возникает событие [`onExpanding`](../Panel.onExpanding/).
В итоге панель будет развернута, если нет ни одного обработчика, подписанного на событие [`onExpanding`](../Panel.onExpanding/),
либо если все обработчики этого события вернули значение, отличное от `false`. Если панель в конечном счете была развернута, 
возникает событие [`onExpanded`](../Panel.onExpanded/). В обработчике события [`onExpanded`](../Panel.onExpanded/)
можно зарегистрировать факт того, что панель была развернута.

Если панель была развернута и ее [можно свернуть](../Panel.getCollapsible/), вызов метода [`setCollapsed()`](../Panel.setCollapsed/)
с параметром `true` означает необходимость свернуть панель. В этом случае возникает событие [`onCollapsing`](../Panel.onCollapsing/).
В итоге панель будет свернута, если нет ни одного обработчика, подписанного на событие [`onCollapsing`](../Panel.onCollapsing/),
либо если все обработчики этого события вернули значение, отличное от `false`. Если панель в конечном счете была свернута,
возникает событие [`onCollapsed`](../Panel.onCollapsed/). В обработчике события [`onCollapsed`](../Panel.onCollapsed/)
можно зарегистрировать факт того, что панель была свернута.

# Syntax

```js
panel.setCollapsed(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`Boolean`|Флаг, определяющий, свернута ли панель. Значение `false` говорит о том, что панель развернута, значение `true` - свернута.|

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

* [`getCollapsed()`](../Panel.getCollapsed/)
* [`getCollapsible()`](../Panel.getCollapsible/)
* [`setCollapsible()`](../Panel.setCollapsible/)
* [`onExpanding`](../Panel.onExpanding/)
* [`onExpanded`](../Panel.onExpanded/)
* [`onCollapsing`](../Panel.onCollapsing/)
* [`onCollapsed`](../Panel.onCollapsed/)
