---
layout: doc
title: "DataGridColumn.metadata"
position: 0
---

Метаданные типа [`DataGridColumn`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|HeaderTemplate|[`Element`](../../../../Core/Elements/Element/)|Шаблон отображения заголовка колонки.|
|Header|`String`|Заголовок колонки.|
|CellSelector|[`Script`](../../../../Core/Script/)|Функция выборки из элемента коллеции значения для ячейки.|
|CellProperty|`String`|Свойство элемента коллекции со значением для ячейки.|
|CellFormat|`String`&#124;[`Format`](../../../../Core/DisplayFormat/)|Правила форматирования элемента коллекции для ячейки.|
|CellTemplate|[`Element`](../../../../Core/Elements/Element/)|Шаблон отображения элемента коллекции для ячейки.|
|Width|`String`|Ширина колонки (напр. "100px", "25%").|
|Sortable|`Boolean`|Возможность сортировки колонки.|
|SortedDefault|`String`|Направление сортировки колонки по умолчанию (напр. "asc" или "desc").|
|SortFunction|`Script`|Функция сортировки колонки.|


# Examples

```json
{
  "Header": "Kingdom",
  "CellProperty": "Kingdom",
  "Sortable": true,
  "SortedDefault": "asc",
  "SortFunction": "{ console.log( args.sortDirection ) }"
}
```
