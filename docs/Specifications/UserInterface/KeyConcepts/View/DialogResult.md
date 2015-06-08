---
layout: doc
title: "DialogResult"
position: 1000
---

Результат работы диалогового окна.

# Syntax

```js
DialogResult = {
  none: 0,
  accepted: 1,
  canceled: 2
}
```

## Members

`none`

Не определен.

`accepted`

Пользователь подтвердил диалог.

`canceled`

Пользователь отменил диалог.

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/View/DialogResult.resjson" lang="json" %}

# See Also

* [`getDialogResult()`](../View.getDialogResult/)
* [`setDialogResult()`](../View.setDialogResult/)
