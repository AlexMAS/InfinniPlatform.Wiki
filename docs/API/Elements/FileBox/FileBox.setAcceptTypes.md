---
layout: doc
title: "FileBox.setAcceptTypes"
position: 4
---

Устанавливает список допустимых форматов данных. Значениями могут быть имена MIME-типа или расширения файлов вместе с разделительной точкой.

# Syntax

```js
FileBox.setAcceptTypes(value)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`value`|`Array`|список допустимых форматов данных.|

## Returns

Нет.

# Examples

```js
fileBox.setAcceptTypes(['application/pdf', 'application/zip', '.7z', '.rar']);
```

# See Also

* [`getAcceptTypes`](../FileBox.getAcceptTypes/)
