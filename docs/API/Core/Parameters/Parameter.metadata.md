---
layout: doc
title: "Parameter.metadata"
position: 0
---

Метаданные типа [`Parameter`](../).

# Schema

|Name|Type|Default|Description|
|----|----|-------|-----------|
|`Name`|`String`||Наименование параметра|
|`Value`|`String`&#124;[`DataBinding`](../../../Core/DataBinding/DataBinding.metadata/)||Значение параметра|
|`DefaultValue`|&#42;||Значение по умолчанию|
|`OnPropertyChanged`|[Script](../../../Core/Script/)||Обработчик события о том, что значение было изменено|

# Examples

```json
{
  "Name": "Description",
  "Value": {
      "Source": "dataSource1",
      "Property": "$.Description"
  },
  "DefaultValue": "No description",
  "OnPropertyChanged": "OnPropertyChangedScript"
}
```
