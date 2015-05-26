---
layout: doc
title: "Parameter.metadata"
position: 0
---

Метаданные параметра представления.

# Description

На уровне метаданных для описания параметра достаточно указать его наименование (Name). Помимо этого,
можно указать значение по умолчанию (Value) и обработчик события на изменение значения параметра
(OnValueChanged).

# Schema

```js
{
  "id": "Parameter",
  "description": "Параметр представления",
  "type": "object",
  "properties": {
    "Name": {
      "description": "Наименование параметра",
      "type": "string"
    },
    "Value": {
      "description": "Значение параметра",
      "type": "any"
    },
    "OnValueChanged": {
      "description": "Обработчик события изменения значения",
      "$ref": "http://demo.infinnity.ru:8081/display/MC/LinkScript"
    }
  },
  "additionalProperties": false
}
```

# Examples

```js
{
  "Name": "Param1",
  "Value": "Value1"
}
```
