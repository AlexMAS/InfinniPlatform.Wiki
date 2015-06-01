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

{% include github.html path="InfinniPlatform.Api/MetadataSchema/UI/View/Parameter.resjson" lang="json" %}

# Examples

```json
{
  "Name": "Param1",
  "Value": "Value1"
}
```
