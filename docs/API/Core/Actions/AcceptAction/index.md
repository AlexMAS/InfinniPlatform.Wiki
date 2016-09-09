---
layout: doc
title: "AcceptAction"
position: 3
---

Устанавливает в качестве результата работы родительского [представления](../../Elements/View/) значение [DialogResult.accepted](../../Elements/View/DialogResult/).

# Extends

## [`BaseAction`](../BaseAction/)

# Syntax

```js
new AcceptAction(parentView)
```

## Parameters

|Name|Type|Description|
|----|----------|---------|
|parentView|[`View`](../../Elements/View/)| Родительское представление |

# Properties

Нет


# Examples

```js
var acceptAction = new AcceptAction(parentView);
acceptAction.execute(); //parentView.getDialogResult() === DialogResult.accepted
```

# See Also

* [`CancelAction`](../CancelAction/)