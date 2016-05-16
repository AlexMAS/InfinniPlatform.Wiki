---
layout: doc
title: "Panel.setHeader()"
position: 8
---

Устанавливает заголовок панели.

# Syntax

```js
panel.setHeader(value)
```

## Parameters

|Name|Description|
|----|-----------|
|value|Заголовок панели. Если у панели не задан [шаблонизатор заголовка](../Panel.setHeaderTemplate/), то в качестве заголовка будет использоваться текст, возвращаемый `Panel.getHeader()`. Если же шаблонизатор заголовка задан, то данное значение будет передаваться в шаблонизатор в качестве `args.value `.|

## Returns

Метод ничего не возвращает.

# Examples

```js
panel.setHeader('Header text');
```

# See Also

* [`getHeader()`](../Panel.getHeader/)
* [`getHeaderTemplate()`](../Panel.getHeaderTemplate/)
* [`setHeaderTemplate()`](../Panel.setHeaderTemplate/)
