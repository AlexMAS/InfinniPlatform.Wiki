---
layout: doc
title: "ServerAction.metadata"
position: 0
---

Метаданные типа [`ServerAction`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|Origin|`String`<sup>*</sup>|Базовая часть url запроса|
|Path|`String`<sup>*</sup>|Уточняющая часть url запроса|
|Method|`String`|(Необязательное) Метод запроса. Допустимые значения: `GET`, `POST`|
|ContentType|`String`|(Необязательное) Тип данных|
|Data|`Object`<sup>*</sup>|(Необязательное) Данные запроса|
|Params|`Object`|(Необязательное) Параметры запроса|

<sup>*</sup> Шаблонизируемая величина (см. пояснения в описании [ServerAction](../)).

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