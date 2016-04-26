---
layout: doc
title: "ImageBox.setAcceptTypes"
position: 4
---

Устанавливает список допустимых форматов данных. Значениями могут быть имена MIME-типа.

# Syntax

```js
ImageBox.setAcceptTypes(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|`Array`|список допустимых форматов данных.|

## Returns

Нет.

# Examples

```js
imageBox.setAcceptTypes(["image/jpeg", "image/png"]);
```

# See Also

* [`getAcceptTypes`](../ImageBox.getAcceptTypes/)
