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

{% include github.html path="InfinniPlatform.Core/.schema/UI/Script/Script.resjson" lang="json" %}

# Examples

```json
{
  "Name": "onButtonClick",
  "Body": "alert('Button is clicked!');"
}
```
