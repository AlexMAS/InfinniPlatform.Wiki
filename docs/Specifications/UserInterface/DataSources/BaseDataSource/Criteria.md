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


# Schema

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/DataSource/Criteria.resjson" lang="json" %}
