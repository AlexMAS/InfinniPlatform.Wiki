---
layout: doc
title: "NumericBox.metadata"
position: 0
---

Метаданные типа [`NumericBox`](../).

# Schema

{% include github.html path="InfinniPlatform.Core/.schema/UI/Components/NumericBox/NumericBox.resjson" lang="json" %}

# Examples

```json
{
  "LabelText": "Age",
  "LabelFloating": true,
  "MinValue": 0,
  "Value": {
    "Source": "mainDataSource",
    "Property": "$.Age"
  }
}
```
