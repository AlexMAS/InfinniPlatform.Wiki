---
layout: doc
title: "StackPanel.metadata"
position: 0
---

Метаданные типа [`StackPanel`](../).

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|ViewMode|`String`|–|[Режим отображения](../../../Core/viewMode/). Может принимать значения: 'Base', 'FormGroup'.|
|Orientation|[`StackPanelOrientation`](../StackPanelOrientation/)|'Vertical'|Ориентация стека элементов|

# Examples

```js
//infinni-ui-demo
{
  "Items": [
  //infinni-ui-display-begin
{
  "StackPanel": {
    "ViewMode": "Base",
    "Orientation": "Horizontal",
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
},
{
  "StackPanel": {
    "ViewMode": "FormGroup",
    "Orientation": "Horizontal",
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