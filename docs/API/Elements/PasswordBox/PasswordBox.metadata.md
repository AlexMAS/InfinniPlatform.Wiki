---
layout: doc
title: "PasswordBox.metadata"
position: 0
---

Метаданные типа [`PasswordBox`](../).

# Schema

Name|Type|Default|Description
----|----|-------|-----------
LabelText|`String`||Текст метки
LabelFloating|`Boolean`|`false`|Является ли метка плавающей
Autocomplete|`Boolean`|`true`|Автоподстановка сохраненных в браузере паролей

# Examples

```json
{
  "Label": "Password",
  "LabelFloating": true,
  "Value": {
    "Source": "dataSource1",
    "Property": "$.Password"
  }
}
```
