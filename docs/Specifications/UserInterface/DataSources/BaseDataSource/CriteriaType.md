---
layout: doc
title: "CriteriaType"
position: 1001
---

Оператор фильтрации.

# Syntax

```js
CriteriaType = {
  isEquals = 1,
  isNotEquals = 2,
  isMoreThan = 4,
  isLessThan = 8,
  isMoreThanOrEquals = 16,
  isLessThanOrEquals = 32,
  isContains = 64,
  isNotContains = 128,
  isEmpty = 256,
  isNotEmpty = 512,
  isStartsWith = 1024,
  isNotStartsWith = 2048,
  isEndsWith = 4096,
  isNotEndsWith = 8192,
  isIn = 16384,
  isNotIn = 32768
}
```

## Members

`isEquals`

Равно.

`isNotEquals`

Не равно.

`isMoreThan`

Больше.

`isLessThan`

Меньше.

`isMoreThanOrEquals`

Больше или равно.

`isLessThanOrEquals`

Меньше или равно.

`isContains`

Содержит.

`isNotContains`

Не содержит.

`isEmpty`

Пустое значение.

`isNotEmpty`

Не пустое значение.

`isStartsWith`

Начинается с.

`isNotStartsWith`

Не начинается с.

`isEndsWith`

Заканчивается на.

`isNotEndsWith`

Не заканчивается на.

`isIn`

Входит в множество.

`isNotIn`

Не входит в множество.

# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/DataSource/CriteriaType.resjson" lang="json" %}
