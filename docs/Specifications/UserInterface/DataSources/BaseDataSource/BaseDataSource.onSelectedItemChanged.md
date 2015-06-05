---
layout: doc
title: "BaseDataSource.onSelectedItemChanged"
position: 103
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что выделенный элемент изменился.

# Syntax

```js
BaseDataSource.onSelectedItemChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что выделенный элемент изменился. В параметре
`argument` передается информация о произошедшем событии. Свойство `argument.oldValue` содержит
предыдущий выделенный элемент, `argument.newValue` - новый выделенный элемент.

# Examples

```js
BaseDataSource.onSelectedItemChanged(
  function(context, argument) { alert('Selected item is changed!'); }
);
```
