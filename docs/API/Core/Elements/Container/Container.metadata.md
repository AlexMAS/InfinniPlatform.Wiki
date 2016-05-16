---
layout: doc
title: "Container.metadata"
position: 0
---

Метаданные типа [`Container`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|Items|`Array`/`Object`|Элементы контейнера|
|ItemTemplate|[`Script`](../../../Script/)|(Необязательное) Функция шаблонизации дочерних элементов контейнера, |
|ItemFormat|[`DisplayFormat`](../../../DisplayFormat/)|(Необязательное) Формат отображения дочерних элементов контейнера|
|ItemSelector|[`Script`](../../../Script/)|(Необязательное) Функция, которая по переданным данным конструирует отображаемое значение|
|ItemProperty|`String`|(Необязательное) Свойство дочерних элементов контейнера для отображения в контейнере|
|GroupValueSelector|[`Script`](../../../Script/)|(Необязательное) Функция, определяющую условие группировки дочерних элементов контейнера|
|GroupValueProperty|`String`|(Необязательное) Свойство, определяющее условие группировки дочерних элементов контейнера|
|GroupItemTemplate|[`Script`](../../../Script/)|(Необязательное) Функция шаблонизации заголовков групп|
|GroupItemFormat|[`DisplayFormat`](../../../DisplayFormat/)|(Необязательное) Формат заголовков групп|
|GroupItemSelector|[`Script`](../../../Script/)|(Необязательное) Функция, которая по переданным данным конструирует значение заголовков групп|
|GroupItemProperty|`String`|(Необязательное) Свойство, отображаемое в качестве заголовков групп|

Если поле Items заданно массивом, то Container не является шаблонизируемым и строится по метаданным Items. 
Если же Items является объектом, то он содержит [привязку](../../../DataBinding/) на источник элементов, для отображения которых необходимо задать шаблон.

ItemSelector и GroupItemSelector должны возвращать элементарные значения: строку или число.

Свойства ItemTemplate, ItemFormat, ItemSelector и ItemProperty являются взаимоисключающими. Если указать несколько из них, то для отображения будет выбрано наиболее приоритетное. 
В схеме свойства указаны в порядке приоритета.   
Кроме того, взаимноисключающими являются GroupValueSelector и GroupValueProperty, а также GroupItemTemplate, GroupItemFormat, GroupItemSelector и GroupItemProperty.


# Examples

Рассмотрим случай, когда Items является массивом.

```json
{
	"StackPanel": {
		"Items": [
			{
				"Icon": {
					"Value": "remove"
				}
            },
            {
				"Label": {
					"Text": "delete"
				}
            }
		]
	}
}
```

Пример шаблонизируемого контейнера:

```json
{
	"StackPanel": {
		"Items": {
			"Source": "People",
            "Property": ""
		},
		"ItemTemplate": {
			"StackPanel": {
				"Items": [
					{
						"Label": {
							"Value": {
								"Source": "People",
	                            "Property": "$.FullName"
							}
						}
		            },
		            {
						"Label": {
							"Value": {
								"Source": "People",
	                            "Property": "$.Age"
							}
						}
		            }
				]
			}
        }
	}
}
```

Контейнер с группировкой:

```json
{
    "ListBox": {
        "ItemTemplate": {
            "TextBox": {
                "Name": "TextBox1",
                "Value": {
                    "Source": "MainDataSource",
                    "Property": "#.Display"
                }
            }
        },
        "GroupItemFormat": "Connect: {Display}",
        "GroupValueProperty": "Display",
        "Items" : {
            "Source": "MainDataSource",
            "Property": ""
        }
    }
}
```
