---
layout: doc
title: "TabPanel.metadata"
position: 0
---

Метаданные типа [`TabPanel`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|HeaderLocation|[`TabHeaderLocation`](../TabHeaderLocation/)|(Необязательное) Расположение закладок|
|OnSelectedItemChanged|[Script](../../../Core/Script/)|(Необязательное) Обработчик события о том, что выделенный элемент изменился|

# Examples

```js
//infinni-ui-demo
{
  "Items": [
  //infinni-ui-display-begin
{
  "TabPanel": {
    "HeaderLocation": "Left",
    "Items": [
      {
        "TabPage": {
          "Text": "Page1",
          "Items": [
            {
              "Label": {
                "Value": "Content of Page1"
              }
            }
          ]
        }
      },
      {
        "TabPage": {
          "Text": "Page2",
          "Items": [
            {
              "Label": {
                "Value": "Content of Page2"
              }
            }
          ]
        }
      }
    ]
  }
}
    //infinni-ui-display-end
  ]
}
```
