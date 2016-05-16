---
layout: doc
title: "View.setHeaderTemplate()"
position: 11
---

Устанавливает [функцию](../../../Script/) шаблонизации заголовка представления. 
Данный шаблон используется для создания заголовка в случае, когда представление открывается в режиме [диалога](../LinkView/OpenMode/).

# Syntax

```js
view.setHeaderTemplate(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|[`Script`](../../../Script/)|Функция шаблонизации заголовка представления|

## Returns

Метод ничего не возвращает.

# Examples

```js
var headerTemplate = function (context, args) {
    var label = new Label();
    label.setValue('New title');
    return label;
}

view.setOpenStrategy(new OpenModeDialogStrategy());
view.setHeaderTemplate(headerTemplate);
```

# See Also

* [`getHeaderTemplate()`](../View.getHeaderTemplate/)
