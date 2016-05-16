---
layout: doc
title: "Panel.onExpanding"
position: 100
---

Устанавливает [обработчик события](../../../Core/Script/) о том, что панель разворачивается.

# Description

Если панель была свернута, вызов метода [`setCollapsed()`](../Panel.setCollapsed/) с параметром `false`
означает необходимость развернуть панель. В этом случае возникает событие [`onExpanding`](../Panel.onExpanding/).
В итоге панель будет развернута, если нет ни одного обработчика, подписанного на событие [`onExpanding`](../Panel.onExpanding/),
либо если все обработчики этого события вернули значение, отличное от `false`. Если панель в конечном счете была развернута, 
возникает событие [`onExpanded`](../Panel.onExpanded/). В обработчике события [`onExpanded`](../Panel.onExpanded/)
можно зарегистрировать факт того, что панель была развернута.

# Syntax

```js
panel.onExpanding(callback)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|callback|[`Script`](../../../Core/Script/)|Обработчик события о том, что панель разворачивается|

## Returns

Метод ничего не возвращает

# Examples

```js
panel.setCollapsible(true);
panel.setCollapsed(true);

panel.onExpanding(
  function(context, args) { alert('Panel is expanding!'); }
);

panel.setCollapsed(false);
```

# See Also

* [`setCollapsed()`](../Panel.setCollapsed/)
* [`onExpanded`](../Panel.onExpanded/)
