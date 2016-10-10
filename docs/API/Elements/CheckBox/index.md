---
layout: doc
title: "CheckBox"
position: 0
---

Переключатель в виде флажка.

# Description

Для отображения переключателя в виде флажка можно использовать CheckBox и [IndeterminateCheckBox](../IndeterminateCheckBox/).   
Отличие в том, что [IndeterminateCheckBox](../IndeterminateCheckBox/) поддерживает ещё и неопределенное состояние.   
CheckBox может принимать значение `false`/`true`,   
[IndeterminateCheckBox](../IndeterminateCheckBox/) - `"unchecked"`/`"checked"`/`"indeterminate"`.

# Extends

[`Element`](../../Core/Elements/Element), [`EditorBase`](../EditorBase/)

# Syntax

```js
new CheckBox([parent])
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`parent`|[`Element`](../../Core/Elements/Element)|Родительский [элемент](../../Core/Elements/Element)|
