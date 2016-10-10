---
layout: doc
title: "ComboBox.metadata"
position: 0
---

Метаданные типа [`ComboBox`](../).

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|LabelText|`String`|–|Текст метки|
|LabelFloating|`Boolean`|false|Значение, определяющее, является ли метка плавающей|
|Autocomplete|`Boolean`|false|Значение, определяющее, разрешено ли автозавершение ввода|
|AutocompleteProperty|`String`|–|Свойство, по которому будет выполняться автозавершение ввода. Если не указывать AutocompleteProperty, то автозавершение будет выполняться на основе полнотекстового поиска|
|ValueTemplate|[`Element`](/docs/API/Core/Elements/Element/Element.metadata/)|–|Функция шаблонизации выбранного элемента|
|ValueFormat|[`DisplayFormat`](../../../Core/DisplayFormat/)|–|Формат отображения выбранного элемента|
|ShowClear|`Boolean`|true|Значение, которое определяет наличие кнопки, очищающей выбранное значение|

# Examples

```json
{
  "ComboBox": {
    "LabelText": "Type",
    "LabelFloating": true,
    "Autocomplete": true,
    "AutocompleteProperty": "Description",
    "ItemFormat": "{Description}",
    "ValueFormat": "{Description}",
    "ShowClear": false,
    "Value": {
      "Source": "MainDataSource",
      "Property": "$.my_type"
    },
    "Items": {
      "Source": "Types",
      "Property": ""
    }
  }
}
```
