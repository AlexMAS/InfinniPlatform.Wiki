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
BaseDataSource.setFilter(value[, success[, error]])
```

## Parameters

`value`

Массив [критериев фильтрации](../Criteria/).

`success`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что фильтр элементов изменился.
В параметре `argument` передается информация о произошедшем событии. Свойство `argument.oldValue`
содержит предыдущий фильтр, `argument.newValue` - новый фильтр.

`error`

Необязательный. [Обработчик события](../../../KeyConcepts/Script/) о том, что при изменении фильтра
элементов произошла ошибка. В параметре `argument` передается информация о произошедшем событии.
Свойство `argument.error` содержит информацию об ошибке.

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
