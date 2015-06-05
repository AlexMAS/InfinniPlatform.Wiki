---
layout: doc
title: "BaseDataSource.onSelectedItemModified"
position: 104
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что данные выделенного элемента изменились.

# Syntax

```js
BaseDataSource.onSelectedItemModified(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что данные выделенного элемента изменились.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.property`
содержит путь измененного свойства, `argument.oldValue` - предыдущее значение свойства,
`argument.newValue` - новое значение свойства.

# Examples

```js
BaseDataSource.onSelectedItemModified(
  function(context, argument) { alert('Selected item is modified!'); }
);
```

# See Also

* [`isModified()`](../BaseDataSource.isModified/)
