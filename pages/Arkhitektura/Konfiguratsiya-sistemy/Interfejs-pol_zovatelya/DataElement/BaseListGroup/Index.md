---
layout: default
title: BaseListGroup
position: 2
categories: 
tags: 
---

Шаблон для создания групп коллекции данных.

   

#### Methods

|Name|Description|
|----|-----------|
|[[GetValueSelector|BaseListGroup.ValueSelector]](): [ValueSelectorFunc](#valueselectorfunc)|Возвращает функцию выборки значения из элемента списка для группировки данных.|
|[[SetValueSelector|BaseListGroup.ValueSelector]]([ValueSelectorFunc](#valueselectorfunc) value)|Устанавливает функцию выборки значения из элемента списка для группировки данных.|
| | |
|[[GetValueProperty|BaseListGroup.ValueProperty]](): string|Возвращает свойство элемента списка, которое хранит значение для группировки данных.|
|[[SetValueProperty|BaseListGroup.ValueProperty]](string value)|Устанавливает свойство элемента списка, которое хранит значение для группировки данных.|
| | |
|[[GetDisplaySelector|BaseListGroup.DisplaySelector]](): [DisplaySelectorFunc](#displayselectorfunc)|Возвращает функцию выборки значения из элемента списка для отображения в заголовке группы.|
|[[SetDisplaySelector|BaseListGroup.DisplaySelector]]([DisplaySelectorFunc](#displayselectorfunc) value)|Устанавливает функцию выборки значения из элемента списка для отображения в заголовке группы.|
| | |
|[[GetDisplayProperty|BaseListGroup.DisplayProperty]](): string|Возвращает свойство элемента списка, которое хранит значение для отображения в заголовке группы.|
|[[SetDisplayProperty|BaseListGroup.DisplayProperty]](string value)|Устанавливает свойство элемента списка, которое хранит значение для отображения в заголовке группы.|
| | |
|[[GetItemFormat|BaseListGroup.ItemFormat]](): [[BaseFormat]]|Возвращает формат отображения заголовка группы.|
|[[SetItemFormat|BaseListGroup.ItemFormat]]([[BaseFormat]] value)|Устанавливает формат отображения заголовка группы.|
| | |
|[[GetItemTemplate|BaseListGroup.ItemTemplate]](): [ItemTemplateFunc](#itemtemplatefunc)|Возвращает визуальный шаблон для отображения заголовка группы.|
|[[SetItemTemplate|BaseListGroup.ItemTemplate]]([ItemTemplateFunc](#itemtemplatefunc) value)|Устанавливает визуальный шаблон для отображения заголовка группы.|
| | |
|[[GetSortDirection|BaseListGroup.SortDirection]](): [[SortDirection]]|Возвращает направление операции сортировки групп.|
|[[SetSortDirection|BaseListGroup.SortDirection]]([[SortDirection]] value)|Устанавливает направление операции сортировки групп.|
| | |
|[[GetCollapsible|BaseListGroup.Collapsible]](): boolean|Возвращает значение, определяющее, разрешено ли сворачивание группы.|
|[[SetCollapsible|BaseListGroup.Collapsible]](boolean value)|Устанавливает значение, определяющее, разрешено ли сворачивание группы. |
| | |
|[[GetCollapsed|BaseListGroup.Collapsed]](): boolean|Возвращает значение, определяющее, свернута ли группа.|
|[[SetCollapsed|BaseListGroup.Collapsed]](boolean value)|Устанавливает значение, определяющее, свернута ли группа.|
| | |
| |Функция выборки значения из элемента списка.* @name ValueSelectorFunc
* @function
* @param {[[Context]]} context Контекст представления.
* @param {[[BaseMessage]]} argument Аргументы функции. Свойство Value содержит элемент списка.
* @returns {any}

|
| |Функция выборки отображаемого значения из элемента списка.* @name DisplaySelectorFunc
* @function
* @param {[[Context]]} context Контекст представления.
* @param {[[BaseMessage]]} argument Аргументы функции. Свойство Value содержит элемент списка (первый в группе).
* @returns {string}

|
| |Функция формирования визуального элемента для элемента списка.* @name ItemTemplateFunc
* @function
* @param {[[Context]]} context Контекст представления.
* @param {[[BaseMessage]]} argument Аргументы функции. Свойство Value содержит элемент списка (первый в группе).
* @returns {[[Element]]}

|

   

#### Events

|Name|Description|
|----|-----------|
|OnExpanded([[Context]] context, [[BaseMessage]] argument)|Возвращает или устанавливает обработчик события разворачивания группы.|
|OnCollapsed([[Context]] context, [[BaseMessage]] argument)|Возвращает или устанавливает обработчик события сворачивания группы.|

   

#### Schema

```
{
  "id": "BaseListGroup",
  "description": "Шаблон для создания групп коллекции данных",
  "type": "object",
  "properties": {
    "ValueSelector": {
      "description": "Функция выборки значения из элемента списка для группировки данных",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "ValueProperty": {
      "description": "Свойство элемента списка, которое хранит значение для группировки данных",
      "type": "string"
    },
    "DisplaySelector": {
      "description": "Функция выборки значения из элемента списка для отображения в заголовке группы",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "DisplayProperty": {
      "description": "Свойство элемента списка, которое хранит значение для отображения в заголовке группы",
      "type": "string"
    },
    "ItemFormat": {
      "description": "Формат отображения заголовка группы",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DisplayFormat"
    },
    "ItemTemplate": {
      "description": "Визуальный шаблон для отображения заголовка группы",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/VisualElement"
    },
    "SortDirection": {
      "description": "Направление операции сортировки групп",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/SortDirection",
      "default": "None"
    },
    "Collapsible": {
      "description": "Разрешено ли сворачивание группы",
      "type": "boolean",
      "default": false
    },
    "Collapsed": {
      "description": "Свернута ли группа",
      "type": "boolean",
      "default": false
    },
    "OnExpanded": {
      "description": "Обработчик события разворачивания группы",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "OnCollapsed": {
      "description": "Обработчик события сворачивания группы",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    }
  },
  "additionalProperties": false
}
```

 

 

