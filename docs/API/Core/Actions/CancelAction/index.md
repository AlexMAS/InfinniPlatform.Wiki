---
layout: doc
title: "CancelAction"
position: 4
---

Устанавливает в качестве результата работы родительского [представления](../../Elements/View/) значение [DialogResult.canceled](../../Elements/View/DialogResult/).

# Extends

## [`BaseAction`](../BaseAction/)

# Syntax

```js
new CancelAction(parentView)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|parentView|[`View`](../../Elements/View/)| Родительское представление |

# Properties

Нет


# Examples

```js
var cancelAction = new CancelAction(parentView);
cancelAction.execute(); //parentView.getDialogResult() === DialogResult.canceled
```

# See Also

* [`AcceptAction`](../AcceptAction/)