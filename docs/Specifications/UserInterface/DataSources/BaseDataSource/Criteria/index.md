---
layout: doc
title: "Criteria"
position: 1000
---

Критерий фильтрации объекта.

# Description

Для фильтрации элементов источника данных необходимо указать массив критериев фильтрации. Каждый
элемент этого массива - критерий фильтрации - представляет собой объект предопределенного формата.

# Properties

`criteriaType`

[Оператор фильтрации](../CriteriaType/).

`property`

Свойство объекта.

`value`

Значение фильтра.

# Examples

```js
{
  criteriaType: CriteriaType.isContains,
  property: 'FirstName',
  value: 'Jo'
}
```

# See Also

* [`CriteriaType`](../CriteriaType/)
* [`getFilter()`](../BaseDataSource.getFilter/)
* [`setFilter()`](../BaseDataSource.setFilter/)
* [`onFilterChanged`](../BaseDataSource.onFilterChanged/)
