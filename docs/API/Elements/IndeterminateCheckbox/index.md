---
layout: doc
title: "IndeterminateCheckBox"
position: 0
---

Переключатель в виде флажка. Допускает неопределенное состояние.

# Description

Для отображения переключателя в виде флажка можно использовать [CheckBox](../CheckBox/) и IndeterminateCheckBox.   
Отличие в том, что IndeterminateCheckBox поддерживает ещё и неопределенное состояние.   
[CheckBox](../CheckBox/) может принимать значение `false`/`true`,   
IndeterminateCheckBox - `"unchecked"`/`"checked"`/`"indeterminate"`.

# Extends

[`CheckBox`](../CheckBox/)

# Syntax

```js
new IndeterminateCheckBox([parent])
```

## Parameters

Name|Type|Description
----|----|-----------
`parent`|[`Element`](../../Core/Elements/Element)|Родительский [элемент](../../Core/Elements/Element)
