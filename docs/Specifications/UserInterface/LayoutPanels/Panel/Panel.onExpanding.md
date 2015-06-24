---
layout: doc
title: "Panel.onExpanding"
position: 100
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что панель разворачивается.

# Description

Если панель была свернута, вызов метода [`setCollapsed()`](../Panel.setCollapsed/) с параметром `false`
означает необходимость развернуть панель. В этом случае возникает событие [`onExpanding`](../Panel.onExpanding/).
В итоге панель будет развернута, если нет ни одного обработчика, подписанного на событие [`onExpanding`](../Panel.onExpanding/),
либо если все обработчики этого события вернули значение, отличное от `false`. Если панель в конечном счете была развернута, 
возникает событие [`onExpanded`](../Panel.onExpanded/). В обработчике события [`onExpanded`](../Panel.onExpanded/)
можно зарегистрировать факт того, что панель была развернута.

# Syntax

```js
Panel.onExpanding(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что панель разворачивается.

# Examples

```js
Panel.setCollapsible(true);
Panel.setCollapsed(true);

Panel.onExpanding(
  function(context, argument) { alert('Panel is expanding!'); }
);

Panel.setCollapsed(false);
```

# See Also

* [`setCollapsed()`](../Panel.setCollapsed/)
* [`onExpanded`](../Panel.onExpanded/)
