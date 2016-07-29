---
layout: doc
title: "ExtensionPanel.setBuilder()"
position: 3
---

Устанавливает [Builder](/docs/Api/Core/Builders/). Builder может быть полезен, когда по каким-либо причинам [itemTemplate](/docs/API/Core/Elements/Container/Container.setItemTemplate/) неприменим.

# Syntax

```js
Element.setBuilder(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Builder`](/docs/Api/Core/Builders/)|Построитель элементов|

## Returns

Метод не возвращает значений.

# Examples

```js
Element.setBuilder(new ApplicationBuilder());
```