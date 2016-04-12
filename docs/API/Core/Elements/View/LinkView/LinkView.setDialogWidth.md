---
layout: doc
title: "LinkView.setDialogWidth()"
position: 5
---

Устанавливает ширину диалогового окна (для случая OpenMode = 'Dialog').

# Syntax

```js
linkView.setDialogWidth(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|value|`String`|Ширина диалогового окна|

Возможные значения:

* Small
* Middle
* Large
* ExtraLarge

По умолчанию диалоговое окно имеет ширину Middle.


## Returns

Метод ничего не возвращает.

# Examples

```js
linkView.setOpenMode('Dialog');
linkView.setDialogWidth('Large');
```

# See Also

* [`getOpenMode`](../LinkView.getOpenMode/)
* [`setOpenMode`](../LinkView.setOpenMode/)
* [`OpenMode`](../OpenMode/)