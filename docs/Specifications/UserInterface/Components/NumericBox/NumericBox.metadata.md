---
layout: doc
title: "NumericBox.metadata"
position: 0
---

Метаданные типа [`NumericBox`](../).

# Schema

{% include github.html path="Components/NumericBox/NumericBox.json" lang="json" %}

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
