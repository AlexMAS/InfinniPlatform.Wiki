---
layout: doc
title: "ScrollPanel.metadata"
position: 0
---

Метаданные типа [`ScrollPanel`](../).

# Schema

|Name|Type|Description|
|----|----|-----------|
|HorizontalScroll|[`ScrollVisibility`](../ScrollVisibility/)|(Необязательное) Видимость полосы прокрутки по горизонтали|
|VerticalScroll|[`ScrollVisibility`](../ScrollVisibility/)|(Необязательное) Видимость полосы прокрутки по вертикали|

# Examples

```js
//infinni-ui-demo
{
  "Items": [
  //infinni-ui-display-begin
{
  "ScrollPanel": {
    "HorizontalScroll": "Hidden",
    "VerticalScroll": "Visible",
    "Items": [
      {
        "Label": {
          "Value": "One"
        }
      },
      {
        "Label": {
          "Value": "Two"
        }
      },
      {
        "Label": {
          "Value": "Three"
        }
      }
    ]
  }
}
    //infinni-ui-display-end
  ]
}
```