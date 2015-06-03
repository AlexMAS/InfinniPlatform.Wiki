---
layout: doc
title: "BaseDataSource.setFilter()"
position: 18
---

Устанавливает фильтр элементов.

# Description

Фильтр элементов представляется массивом [критериев фильтрации](../Criteria/). Изменение фильтра
элементов приводит к возникновению события [`onFilterChanged`](../BaseDataSource.onFilterChanged/).

# Syntax

```js
BaseDataSource.setFilter(value)
```

## Parameters

`value`

Массив [критериев фильтрации](../Criteria/).

# Examples

```js
BaseDataSource.setFilter([
  {
    criteriaType: CriteriaType.isContains,
    property: 'FirstName',
    value: 'Ив'
  }
]);
```
