---
layout: doc
title: "ValidationResult.metadata"
position: 0
---

Метаданные типа [`ValidationResult`](../).

# Schema

```json
{
  "id": "ValidationResult",
  "description": "Результат проверки объекта",
  "type": "object",
  "properties": {
    "IsValid": {
      "description": "Признак успешности проверки",
      "type": "boolean",
      "required": true
    },
    "Items": {
      "description": "Список результатов проверки свойств объекта",
      "type": "array",
      "required": false,
      "items": {
        "type": "object",
        "properties": {
          "Property": {
            "description": "Путь к свойству с ошибкой",
            "type": "string",
            "required": false
          },
          "Message": {
            "description": "Сообщение об ошибке",
            "type": "string",
            "required": true
          }
        }
      }
    }
  },
  "additionalProperties": false
}
```

# Examples

```json
{
  "IsValid": false,
  "Items": [
    {
      "Property": "FirstName",
      "Message": "First name should contains Latin symbols only"
    }
  ]
}
```
