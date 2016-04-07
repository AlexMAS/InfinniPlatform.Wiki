---
layout: doc
title: "View.getHeaderTemplate()"
position: 10
---

Возвращает [функцию](../../../Script/) шаблонизации заголовка представления.
Данный шаблон используется для создания заголовка в случае, когда представление открывается в режиме [диалога](../LinkView/OpenMode/OpenModeDialogStrategy/).

# Syntax

```js
view.getHeaderTemplate()
```

## Parameters

Нет

## Returns

[Функция](../../../Script/) шаблонизации заголовка представления.

# Examples

```js
var headerTemplate = view.getHeaderTemplate();
```

# See Also

* [`setHeaderTemplate()`](../View.setHeaderTemplate/)
