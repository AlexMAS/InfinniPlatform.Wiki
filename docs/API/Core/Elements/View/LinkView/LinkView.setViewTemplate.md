---
layout: doc
title: "LinkView.setViewTemplate()"
position: 3
---

Устанавливает [функцию](../../../../Script/) шаблонизации представления.

# Syntax

```js
linkView.setViewTemplate(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../../Script/)|Функция шаблонизации заголовка представления|

## Returns

Метод ничего не возвращает.

# Examples

```js
var viewTemplate = function (context, args) {
    var label = new Label();
    label.setValue('View Body');
    return label;
}

linkView.setViewTemplate(viewTemplate);
```
