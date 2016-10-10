---
layout: doc
title: "Label.metadata"
position: 0
---

Метаданные типа [`Label`](../).

# Properties

|Name|Type|Default|Description|
|----|----|:--:|-----------|
|DisplayFormat|`DisplayFormatMetadata`|–|Форматирование значения для отображения|
|TextTrimming|`Boolean`|true|Значение, определяющее, усекается ли текст при переполнении|
|TextWrapping|`Boolean`|true|Значение, определяющее, переносится ли текст при переполнении|
|EscapeHtml|`Boolean`|true|Значение, определяющее, экранируется ли HTML-разметка|

# Examples

```json
{
    "DisplayFormat": "{FirstName} {LastName}",
    "Value": {
        "Source": "dataSource1",
        "Property": "$.Person"
    }
}
```

```json
{
    "Text": "<b>Полужирный</b> <i>курсив</i>",
    "EscapeHtml": false
}
```
