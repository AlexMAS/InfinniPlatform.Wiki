---
layout: doc
title: "Element.setContext()"
position: 2
---

Устанавливает [контекст представления](/docs/Api/Core/Context/).

# Syntax

```js
Element.setContext(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`ViewContext`](/docs/Api/Core/Context/)|Контекст представления|

## Returns

Метод не возвращает значений.

# Examples

```js
Element.setContext(view.getContext());
```