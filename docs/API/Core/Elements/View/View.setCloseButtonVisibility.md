---
layout: doc
title: "View.setCloseButtonVisibility()"
position: 13
---

Устанавливает флаг видимости кнопки закрытия. 
Кнопка закрытия отображается, когда представление открывается в режиме [диалога](../LinkView/OpenMode/). По умолчанию она является видимой.

# Syntax

```js
view.setCloseButtonVisibility(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`Boolean`|Флаг видимости кнопки закрытия|

## Returns

Метод ничего не возвращает.

# Examples

```js
view.setOpenStrategy(new OpenModeDialogStrategy());
view.setCloseButtonVisibility(false);
```

# See Also

* [`getCloseButtonVisibility()`](../View.getCloseButtonVisibility/)
