---
layout: doc
title: "Parameters"
position: 0
---

Параметр представления.

# Description

Параметры объявляются в рамках представления и используются для обмена данными между представлениями.

# Syntax

```js
new Parameter(options);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`options.view`|[`View`](../../Core/View/View)|Родительское [представление](../../Core/View/View).|

# Methods

|Name|Description|
|----|---------|
|[`getName`](Parameter.getName/)|Возвращает наименование параметра.|
|[`setName`](Parameter.setName/)|Устанавливает наименование параметра.|
|[`getView`](Parameter.getView/)|Возвращает родительское представление.|
|[`getValue`](Parameter.getValue/)|Возвращает значение параметра.|
|[`setValue`](Parameter.setValue/)|Устанавливает значение параметра.|
|[`getProperty`](Parameter.getProperty/)|Возвращает значение атрибута параметра.|
|[`setProperty`](Parameter.setProperty/)|Устанавливает значение атрибута параметра.|

# Events

|Name|Description|
|----|---------|
|`onPropertyChanged`|Устанавливает [обработчик события](../../Core/Script/) о том, что значение было изменено.|