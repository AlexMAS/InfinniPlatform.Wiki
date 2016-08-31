---
layout: doc
title: "Link.metadata"
position: 0
---

Метаданные типа [`Link`](../).

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|Href|`String`&#124;`Object`|"javascript:;"|Адрес документа, на который должна переводить ссылка.|
|Target|`String`|"self"|Режим загрузки документа.<br> Может принимать следующие значения: <br> &#9679; blank - загружает страницу в новое окно браузера,<br> &#9679; self - загружает страницу в текущее окно,<br> &#9679; parent - загружает страницу во фрейм-родитель (если фреймов нет, то работает как self),<br> &#9679; top - отменяет все фреймы и загружает страницу в полном окне браузера (если фреймов нет, то работает как self).|

# Examples

```js
//infinni-ui-demo
//infinni-ui-display-begin
{
  "Items": [
    {
      "Link": {
        "Text": "link",
        "Href": "http://docs.infinnity.ru/",
        "Target": "blank"
      }
    },
    {
      "Link": {
        "Text": "link",
        "Href": {
          "Name": "routeName",
          "Params": [
            {
              "Name": "paramName",
              "Value": "value"
            },
            {
              "Name": "paramName",
              "Value": {
                "Source": "dataSource1",
                "Property": "$.paramValue"
              }
            }
          ],
          "Query": [
            {
              "Name": "queryName",
              "Value": "value"
            },
            {
              "Name": "queryName",
              "Value": {
                "Source": "dataSource1",
                "Property": "$.queryValue"
              }
            }
          ]
        },
        "Target": "blank"
      }
    }
  ]
}
//infinni-ui-display-end
```
