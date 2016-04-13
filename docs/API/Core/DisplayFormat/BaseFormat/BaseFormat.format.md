---
layout: doc
title: "BaseFormat.format"
position: 1
---

Форматирует один или несколько объектов.. Если для форматирования передано несколько объектов, то возвращается строка отформатированных значений, разделенных символами [`BaseFormat.Separator`].

# Syntax

```js
Format.format(value);
```

## Parameters

Name|Type|Description
----|----|-----------
`value`|&#42;|Форматируемое значение.

# Returns

Отформатированное представление.

# Examples

```js
Format.format([33, 44]);
```

# See Also

* [`format()`](../BaseFormat.format/)