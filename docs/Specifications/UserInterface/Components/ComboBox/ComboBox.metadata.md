---
layout: doc
title: "ComboBox.metadata"
position: 0
---

Метаданные типа [`ComboBox`](../).

# Schema

{% include github.html path="Components/ComboBox/ComboBox.json" lang="json" %}

# Examples

```json
{
  "LabelText": "Responsible",
  "LabelFloating": true,
  "Autocomplete": true,
  "Value": {
    "Source": "mainDataSource",
    "Property": "$.Responsible"
  },
  "Items": {
    "Source": "peopleDataSource"
  }
}
```
