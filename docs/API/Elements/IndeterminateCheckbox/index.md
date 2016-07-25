---
layout: doc
title: "IndeterminateCheckbox"
position: 0
---

Переключатель в виде флажка. Допускает неопределенное состояние.

# Description

Для отображения переключателя в виде флажка можно использовать [CheckBox](../CheckBox/) и IndeterminateCheckbox.   
Отличие в том, что IndeterminateCheckbox поддерживает ещё и неопределенное состояние.   
[CheckBox](../CheckBox/) может принимать значение `false`/`true`,   
IndeterminateCheckbox - `"unchecked"`/`"checked"`/`"indeterminate"`.

# Extends

[`CheckBox`](../CheckBox/)

# Syntax

```js
new IndeterminateCheckbox([parent])
```

## Parameters

Name|Type|Description
----|----|-----------
`parent`|[`Element`](../../Core/Elements/Element)|Родительский [элемент](../../Core/Elements/Element)
