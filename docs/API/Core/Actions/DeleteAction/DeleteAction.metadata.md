---
layout: doc
title: "DeleteAction.metadata"
position: 0
---

Метаданные типа [`DeleteAction`](../).

# Properties

|Name|Type|Default|Description|
|----|----|----|-----------|
|DestinationValue.Source<sup>*</sup>|`String`| |Название источника данных, из которого производится удаление|
|DestinationValue.Property<sup>*</sup>|`String`| |Путь до документа в источнике данных, который будет удалятся|
|Accept|`Boolean`|true|Значение, определяющее, нужно ли перед удалением спросить согласие пользователя на удаление|
|OnSuccess|[`Script`](../../../Script/)| |Устанавливает обработчик успешного завершения действия|
|OnError|[`Script`](../../../Script/)| |Устанавливает обработчик завершения действия с ошибкой|
|AcceptMessage|`String`| |Устанавливает произвольный текст для сообщения во всплывающем окне|
|AcceptMessageType|`String`|default|Устанавливает тип всплывающего окна. Доступные варианты: error, warning|

<sup>*</sup> Обязательное свойство.

# Examples

```json
{
  "DeleteAction": {
    "AcceptMessage": "Do you really want to delete it?",
    "AcceptMessageType": "error",
    "DestinationValue": {
      "Source": "DataSource1",
      "Property": "$"
    },
    "Accept": false,
    "OnSuccess": "{ alert('onSuccess'); }",
    "OnError": "{ alert('onError'); }"
  }
}
```

```json
{
  "DeleteAction": {
    "AcceptMessage": "Do you seriously want to delete it?",
    "AcceptMessageType": "warning",
    "DestinationValue": {
      "Source": "DataSource1",
      "Property": "$.Hospitalizations.0"
    },
    "Accept": false
  }
}
```
