---
layout: doc
title: "ComboBox.getAutocompleteValue"
position: 11
---

Возвращает значение, для поиска в выпадающем списке значений. 

# Description

Возвращает текст, который введен пользователем в строке быстрого поиска значений в выпадающем списке.
Для отображения подходящих значений, необходимо привязать значение ComboBox.autocompleteValue к фильтру источника данных выпадающего списка. 

# Syntax

```js
comboBox.getAutocompleteValue()
```

## Parameters

Нет

## Returns

Возвращает текст, который введен пользователем в строке быстрого поиска значений в выпадающем списке.

# Examples

```js
text = comboBox.getAutocompleteValue();
```

Item's DataSource metadata:

```json
{
    "DataSource": {
        "DocumentDataSource": {
            "Filter": "text(Title, <%lookup%>)",
            "FilterParams": {
                "lookup": {
                    "Source": "MyComboBox1",
                    "Property": "autocompeleteValue"
                }
            }
        }        
    }
}
```

ComboBox Metadata:

```json

{
    "ComboBox": {
        "Name": "MyComboBox1",
        "Autocomplete": true,
        "Items": {
            "Source": "ds1",
            "Property": ""
        },
        "ItemProperty": "Title"
    }
}
```

# See Also

* [`setAutocompleteValue()`](../ComboBox.setAutocompleteValue/)
* [`getAutocomplete()`](../ComboBox.getAutocomplete/)
* [`setAutocomplete()`](../ComboBox.setAutocomplete/)