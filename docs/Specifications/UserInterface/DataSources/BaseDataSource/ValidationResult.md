---
layout: doc
title: "ValidationResult"
position: 1002
---

Результат проверки объекта.

# Description

Результатом работы любой функции проверки элемента источника данных должен быть объект указанного
ниже формата. Свойство `isValid` содержит логическое значение, указывающее на признак успешности
проверки. Если `isValid` равен `true`, считается, что объект прошел проверку; если `isValid` равен
`false` - объект не прошел проверку. В случае, если объект не прошел проверку, массив `items`
необходимо заполнить результатами проверки объекта - информацией об ошибках. Каждый элемент этого
массива должен содержать путь к свойству объекта `property` и сообщение об ошибке `message`.
Путь к свойству объекта `property` может не указываться, если сообщение об ошибке `message` касается
всего объекта целиком.

# Properties

`isValid`

Признак успешности проверки.

`items`

Список результатов проверки свойств объекта.

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

# See Also

* [`getErrorValidator()`](../BaseDataSource.getErrorValidator/)
* [`setErrorValidator()`](../BaseDataSource.setErrorValidator/)
* [`getWarningValidator()`](../BaseDataSource.getWarningValidator/)
* [`setWarningValidator()`](../BaseDataSource.setWarningValidator/)
* [`validateOnErrors()`](../BaseDataSource.validateOnErrors/)
* [`validateOnWarnings()`](../BaseDataSource.validateOnWarnings/)
