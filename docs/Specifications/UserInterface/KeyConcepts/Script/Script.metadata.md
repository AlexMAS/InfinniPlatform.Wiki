---
layout: doc
title: "Script.metadata"
position: 0
---

Метаданные прикладного скрипта.

# Description

На уровне метаданных для описания прикладного скрипта указывается его наименование (Name) и тело
функции (Body). Наименование прикладного скрипта в рамках представления, естественно, должно быть
уникальным.

# Schema

```js
{
  "id": "Script",
  "description": "Прикладной скрипт, выполняемый на стороне клиента",
  "type": "object",
  "properties": {
    "Name": {
      "description": "Наименование функции",
      "type": "string",
      "required": true
    },
    "Body": {
      "description": "Тело функции",
      "type": "string"
    }
  },
  "additionalProperties": false
}
```

# Examples

```js
{
  "Name": "OnButtonClick",
  "Body": "alert('Button clicked!');"
}
```
