---
layout: doc
title: "ComboBox.getAutocomplete"
position: 5
---

Возвращает значение, определяющее, разрешено ли автозавершение ввода.

# Description

Если для ComboBox будет установлено автозавершение ввода, то при наборе первых нескольких букв значения ComboBox сможет завершить набор за вас.

# Syntax

```js
comboBox.getAutocomplete()
```

## Parameters

Нет

## Returns

Логическое значение, определяющее, разрешено ли автозавершение ввода.  
Значение `true` означает, что автозавершение ввода разрешено, значение `false` - запрещено.

# Examples

```js
var isAutocomplete = comboBox.getAutocomplete();
```

# See Also

* [`setAutocomplete()`](../ComboBox.setAutocomplete/)
