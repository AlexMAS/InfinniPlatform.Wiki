---
layout: doc
title: "BindingMode"
position: 1000
---

Направление обмена данными в привязке.

# Syntax

```js
BindingMode = {
  twoWay: 0,
  toSource: 1,
  toElement: 2
}
```

## Members

`twoWay`

Двунаправленный обмен между элементом и источником (two way) - если в источнике произошли изменения,
элемент обновляется, и, наоборот, если изменения произошли в элементе, источник обновляется.

`toSource`

Только обновление источника (to source) - если в источнике произошли изменения, элемент не обновляется,
но, если изменения произошли в элементе, источник обновляется.

`toElement`

Только обновление элемента (to element) - если в источнике произошли изменения, элемент обновляется,
но, если изменения произошли в элементе, источник не обновляется.

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/DataBinding/BindingMode.resjson" lang="json" %}

# See Also

* [`getMode()`](../BaseDataBinding.getMode/)
* [`setMode()`](../BaseDataBinding.setMode/)
