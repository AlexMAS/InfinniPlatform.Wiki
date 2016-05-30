---
layout: doc
title: "ListEditorBase.metadata"
position: 0
---

Метаданные типа [`ListEditorBase`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|MultiSelect|`Boolean`|false|Разрешен ли выбор нескольких элементов коллекции|
|ValueSelector|[`Script`](../../../Core/Script/)||Функция выборки из элемента коллекции значения для выбора|
|ValueProperty|`String`||Свойство элемента коллекции со значением для выбора|
|ItemSelector|[`Script`](../../../Core/Script/)||Функция выборки из элемента коллеции значения для отображения|
|ItemProperty|`String`||Свойство элемента коллекции со значением для отображения|
|ItemFormat|`String`||Правила форматирования элемента коллекции для отображения|
|DisabledItemCondition|[`Script`](../../../Core/Script/)||Функция, определяющая запрет на выбор элемента|
|OnSelectedItemChanged|[`Script`](../../../Core/Script/)||Обработчик события о том, что элемент был выделен|

# Examples

```json
{
    "MultiSelect": true,
    "ValueProperty": "id",
    "ItemFormat": "{FirstName} {LastName}, {BirthDate:d}",
    "DisabledItemCondition": "{ return (args.value.Id == 3); }"
}
```