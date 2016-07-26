---
layout: doc
title: "ComboBox.metadata"
position: 0
---

Метаданные типа [`ComboBox`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|LabelText|`String`| |(Необязательное) Текст метки|
|LabelFloating|`Boolean`|false|(Необязательное) Значение, определяющее, является ли метка плавающей|
|Autocomplete|`Boolean`|false|(Необязательное) Значение, определяющее, разрешено ли автозавершение ввода|
|AutocompleteProperty|`String`| |(Необязательное) Свойство, по которому будет выполняться автозавершение ввода. Если не указывать AutocompleteProperty, то автозавершение будет выполняться на основе полнотекстового поиска|
|ValueTemplate|[`Element`](/docs/API/Core/Elements/Element/Element.metadata/)| |(Необязательное) Функция шаблонизации выбранного элемента|
|ValueFormat|[`DisplayFormat`](../../../Core/DisplayFormat/)| |(Необязательное) Формат отображения выбранного элемента|
|ShowClear|`Boolean`|true|(Необязательное) Значение, которое определяет наличие кнопки, очищающей выбранное значение|

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
