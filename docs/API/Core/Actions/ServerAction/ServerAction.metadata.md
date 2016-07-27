---
layout: doc
title: "ServerAction.metadata"
position: 0
---

Метаданные типа [`ServerAction`](../).

# Properties

|Name|Type|Default|Description|
|----|----|:-----:|-----------|
|Origin|`String`<sup>1</sup>| |Базовая часть url запроса|
|Path<sup>*</sup>|`String`<sup>1</sup>| |Уточняющая часть url запроса|
|Method|`String`|'GET'|Метод запроса|
|ContentType|`String`|'application/x-www-form-urlencoded; charset=utf-8'|Тип данных|
|Data|`Object`<sup>1</sup>| |Данные запроса|
|Params|`Object`| |Параметры запроса|

<sup>*</sup> Обязательное свойство.   
<sup>1</sup> [Шаблонизируемая величина](../#parameters-templating).

# Examples

```json
{
  "ServerAction": {
    "Method": "Get",
    "Origin": "http://localhost:<%port%>",
    "Path": "/documents/<%document%>",
    "Data": {
      "filter": "eq(_id,'<%_id%>')"
    },
    "Params": {
      "port": "9900",
      "document": "GetCompanyProfile988Response",
      "_id": "73eba46a-0c6f-42d3-8a7b-2962f0fbf06d"
    }
  }
}
```