---
layout: doc
title: "RouteToAction.metadata"
position: 0
---

Метаданные типа [`RouteToAction`](../).

# Properties

|Name|Type|Description|
|----|----|-----------|
|Name<sup>*</sup>|`String`|Уникальное имя маршрута определенное в [InfinniUI.config.Routes](../../../InfinniUI/InfinniUI.config.Routes)|
|Params|`Object`|Массив с параметрами маршрута, которые будут переданы в callback. Где Name - имя параметра, а Value - значение параметра. Значение параметра можно задать как через `String`, так и через [`DataBinding`](../../../DataBinding)|
|Query|`Object`|Массив с параметрами запроса, которые будут переданы в callback. Где Name - имя параметра запроса, а Value - значение параметра запроса. Значение параметра можно задать как через `String`, так и через [`DataBinding`](../../../DataBinding)|

<sup>*</sup> Обязательное свойство.

# Examples

```json
"RouteToAction": {
  "Name": "routeName",
  "Params": [
    {
      "Name": "user",
      "Value": {
        "Source": "ds2",
        "Property": "$.user"
      }
    },
    {
      "Name": "pageNumber",
      "Value": "lastPage"
    }
  ],
  "Query": [
    {
      "Name": "queryId",
      "Value": {
        "Source": "ds2",
        "Property": "$.queryId"
      }
    },
    {
      "Name": "userAge",
      "Value": "teenager"
    }
  ]
}
```

# See Also

* [`RouterService`](../../../RouterService/)
