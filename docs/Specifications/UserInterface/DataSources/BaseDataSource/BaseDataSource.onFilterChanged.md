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
предыдущий фильтр, `argument.newValue` - новый фильтр.

# Examples

```js
BaseDataSource.onFilterChanged(
  function(context, argument) { alert('Filter is changed!'); }
);
```
