---
layout: doc
title: "Panel.getCollapseChanger()"
position: 9
---

Возвращает имя элемента, при клике на который раскрывается панель.

# Description

Чтобы разрешить сворачивание панели воспользуйтесь методом [setCollapsible](../Panel.setCollapsible/).    
По умолчанию панел сворачивается/разворачивается при клике на заголовок. 
C помощью метода [setCollapseChanger](../Panel.setCollapseChanger/) можно установить элемент заголовка, клик на который будет регулировать состояние панели. 

# Syntax

```js
panel.getCollapseChanger()
```

## Parameters

Нет

## Returns

Имя элемента при клике на который раскрывается панель.

# Examples

```js
var collapseChangerName = panel.getCollapseChanger();
```

# See Also

* [`setCollapseChanger()`](../Panel.setCollapseChanger/)
* [`getCollapsible()`](../Panel.getCollapsible/)
* [`setCollapsible()`](../Panel.setCollapsible/)
