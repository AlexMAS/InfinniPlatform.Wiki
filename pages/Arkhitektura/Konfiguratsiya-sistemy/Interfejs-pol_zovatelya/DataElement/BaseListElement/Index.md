---
layout: default
title: BaseListElement
position: 1
categories: 
tags: 
---

Базовый элемент представления для отображения коллекции данных.

       

#### Methods

|Name|Description|
|----|-----------|
|[[GetMultiSelect|BaseListElement.MultiSelect]](): boolean|Возвращает значение, определяющее, разрешен ли выбор нескольких элементов.|
|[[SetMultiSelect|BaseListElement.MultiSelect]](boolean value)|Устанавливает значение, определяющее, разрешен ли выбор нескольких элементов.|
| | |
|[[GetValueSelector|BaseListElement.ValueSelector]](): [ValueSelectorFunc](#valueselectorfunc)|Возвращает функцию выборки значения из элемента списка.|
|[[SetValueSelector|BaseListElement.ValueSelector]]([ValueSelectorFunc](#valueselectorfunc) value)|Устанавливает функцию выборки значения из элемента списка.|
| | |
|[[GetValueProperty|BaseListElement.ValueProperty]](): any|Возвращает свойство элемента списка, которое хранит выбранное значение, или шаблон формирования выбранного значения из элемента списка.|
|[[SetValueProperty|BaseListElement.ValueProperty]](any value)|Устанавливает свойство элемента списка, которое хранит выбранное значение, или шаблон формирования выбранного значения из элемента списка.|
| | |
|[[GetDisplaySelector|BaseListElement.DisplaySelector]](): [DisplaySelectorFunc](#displayselectorfunc)|Возращает функцию выборки отображаемого значения из элемента списка.|
|[[SetDisplaySelector|BaseListElement.DisplaySelector]]([DisplaySelectorFunc](#displayselectorfunc) value)|Устанавливает функцию выборки отображаемого значения из элемента списка.|
| | |
|[[GetDisplayProperty|BaseListElement.DisplayProperty]](): any|Возвращает свойство элемента списка, которое хранит отображаемое значение, или шаблон формирования отображаемого значения из элемента списка|
|[[SetDisplayProperty|BaseListElement.DisplayProperty]](any value)|Устанавливает свойство элемента списка, которое хранит отображаемое значение, или шаблон формирования отображаемого значения из элемента списка|
| | |
|[[GetItemFormat|BaseListElement.ItemFormat]](): [[BaseFormat]]|Возвращает формат отображения элемента списка.|
|[[SetItemFormat|BaseListElement.ItemFormat]]([[BaseFormat]] value)|Устанавливает формат отображения элемента списка.|
| | |
|[[GetItemTemplate|BaseListElement.ItemTemplate]](): [ItemTemplateFunc](#itemtemplatefunc)|Возвращает визуальный шаблон для отображения элемента списка.|
|[[SetItemTemplate|BaseListElement.ItemTemplate]]([ItemTemplateFunc](#itemtemplatefunc) value)|Устанавливает визуальный шаблон для отображения элемента списка.|
| | |
|[[GetGroupTemplate|BaseListElement.GroupTemplate]](): [[BaseListGroup]]|Возвращает шаблон для создания групп элементов списка.|
|[[SetGroupTemplate|BaseListElement.GroupTemplate]]([[BaseListGroup]] value)|Устанавливает шаблон для создания групп элементов списка.|
| | |
|[[GetValue|BaseListElement.GetValue]](): any|Возвращает выбранное значение.|
|[[SetValue|BaseListElement.SetValue]](any value)|Устанавливает выбранное значение.|
| | |
|[[GetItem|BaseListElement.GetItem]](): any|Возвращает выбранный элемент списка.|
|[[SetItem|BaseListElement.SetItem]](any value)|Устанавливает выбранный элемент списка.|
| | |
|[[GetFocusedValue|BaseListElement.GetFocusedValue]](): any|Возаращет значение, на которое установлен фокус ввода.|
|[[SetFocusedValue|BaseListElement.SetFocusedValue]](any value)|Устанавливает значение, на которое нужно установить фокус ввода.|
| | |
|[[GetFocusedItem|BaseListElement.GetFocusedItem]](): any|Возаращет элемент списка, на который установлен фокус ввода.|
|[[SetFocusedItem|BaseListElement.SetFocusedItem]](any value)|Устанавливает элемент списка, на который нужно установить фокус ввода.|
| | |
|[[GetFocusedElement|BaseListElement.GetFocusedElement]](): [[Element]]|Возвращает визуальный элемент, отображающий элемент списка, на котором установлен фокус ввода.|
|[[SetFocusedElement|BaseListElement.SetFocusedElement]]([[Element]] value)|Устанавливает визуальный элемент, отображающий элемент списка, на который нужно установить фокус ввода.|
| | |
|[[AddItem|BaseListElement.AddItem]](any item)|Добавляет элемент в список.|
|[[RemoveItem|BaseListElement.RemoveItem]](any item)|Удаляет элемент из списка.|
|[[GetItems|BaseListElement.GetItems]](): array<any>|Возвращает список элементов.|
|[[SetItems|BaseListElement.SetItems]](array<any> items)|Устанавливает список элементов.|
| | |
|[[RefreshItem|BaseListElement.RefreshItem]](any item)|Обновляет визуальное состояние элемента списка.|
|[[RefreshItems|BaseListElement.RefreshItems]]()|Обновляет визуальное состояние списка элементов.|
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
* @param {[[BaseMessage]]} argument Аргументы функции. Свойство Value содержит элемент списка.
* @returns {string}

|
| |Функция формирования визуального элемента для элемента списка.* @name ItemTemplateFunc
* @function
* @param {[[Context]]} context Контекст представления.
* @param {[[BaseMessage]]} argument Аргументы функции. Свойство Value содержит элемент списка.
* @returns {[[Element]]}

|

    

#### Events

|Name|Description|
|----|-----------|
|OnFocusedItemChanged([[Context]] context, [[BaseDataSource]]argument)|Возвращает или устанавливает обработчик события изменения фокуса ввода в списке.|
|OnDoubleClick([[Context]] context, [[BaseDataSource]]argument)|Возвращает или устанавливает обработчик события двойного клика по элементу списка.|
|OnValueChanged([[Context]] context, [[DataSourceMessage]] argument)|Возвращает или устанавливает обработчик события изменения значения.|

    

#### Schema

```
{
  "id": "BaseListElement",
  "description": "Базовый элемент представления для отображения коллекции данных",
  "type": "object",
  "extends": {
    "$ref": "http://demo.infinnity.ru:8081/display/MC/Element"
  },
  "properties": {
    "MultiSelect": {
      "description": "Разрешен ли выбор нескольких значений",
      "type": "boolean",
      "default": false
    },
    "ValueSelector": {
      "description": "Функция выборки значения из элемента списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "ValueProperty": {
      "description": "Свойство элемента списка, которое хранит выбранное значение, или шаблон формирования выбранного значения из элемента списка",
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      ]
    },
    "DisplaySelector": {
      "description": "Функция выборки отображаемого значения из элемента списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "DisplayProperty": {
      "description": "Свойство элемента списка, которое хранит отображаемое значение, или шаблон формирования отображаемого значения из элемента списка",
      "oneOf": [
        {
          "type": "string"
        },
        {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        }
      ]
    },
    "ItemFormat": {
      "description": "Формат отображения элемента списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DisplayFormat"
    },
    "ItemTemplate": {
      "description": "Визуальный шаблон для отображения элемента списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/VisualElement"
    },
    "GroupTemplate": {
      "description": "Шаблон для создания групп элементов списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/BaseListGroup"
    },
    "Value": {
      "description": "Привязка данных для выбранного значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
    },
    "Items": {
      "description": "Привязка данных для элементов списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/DataBinding"
    },
    "OnFocusedItemChanged": {
      "description": "Обработчик события изменения фокуса ввода в списке",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "OnDoubleClick": {
      "description": "Обработчик события двойного клика по элементу списка",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    },
    "OnValueChanged": {
      "description": "Обработчик события изменения значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    }
  },
  "additionalProperties": false
}
```

   

#### Links

[[ComboBox]]

[[ListBox]]

[[RadioGroup]]

[[DataGrid]]

[[TreeView]]

 

 

