---
layout: doc
title: "PasswordBox.getAutocomplete"
position: 5
---

Возвращает значение, определяющее, будет ли срабатывать стандартная автоподстановка пароля.

# Description



# Syntax

```js
PasswordBox.getAutocomplete()
```

## Returns

Значение, определяющее, будет ли срабатывать стандартная автоподстановка пароля:
* `false` означает, что автоподстановка сохраненных ранее паролей происходить не будет.
* `true` означает, что автоподстановка сохраненных ранее паролей будет срабатывать (поведение по умолчанию).

# Examples

```js
var autocomplete = PasswordBox.getAutocomplete();
```

# See Also

* [`setAutocomplete()`](../PasswordBox.setAutocomplete/)
