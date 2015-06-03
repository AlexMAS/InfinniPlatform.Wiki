---
layout: doc
title: "BaseDataSource.onFilterChanged"
position: 102
---

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что фильтр элементов изменился.

# Description

Фильтр элементов представляется массивом [критериев фильтрации](../Criteria/).

# Syntax

```js
BaseDataSource.onFilterChanged(callback)
```

## Parameters

`callback`

[Обработчик события](../../../KeyConcepts/Script/) о том, что фильтр элементов изменился. В параметре
`argument` передается информация о произошедшем событии. Свойство `argument.oldValue` содержит
предыдущий фильтр, свойство `argument.newValue` - новый фильтр.

# Examples

```js
Element.onFilterChanged(
  function(context, argument) { alert('Filter changed!'); }
);
```
