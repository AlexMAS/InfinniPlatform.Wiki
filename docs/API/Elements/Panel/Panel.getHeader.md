---
layout: doc
title: "Panel.getHeader()"
position: 7
---

Возвращает значение заголовка панели.

# Syntax

```js
panel.getHeader()
```

## Parameters

Нет

## Returns

Заголовок панели. 
Если у панели не задан [шаблонизатор заголовка](../Panel.setHeaderTemplate/), то в качестве заголовка будет использоваться текст, возвращаемый `Panel.getHeader()`.  
Если же шаблонизатор заголовка задан, то данное значение будет передаваться в шаблонизатор в качестве `args.value `. 

# Examples

```js
var header = panel.getHeader();
```

# See Also

* [`setHeader()`](../Panel.setHeader/)
* [`getHeaderTemplate()`](../Panel.getHeaderTemplate/)
* [`setHeaderTemplate()`](../Panel.setHeaderTemplate/)
