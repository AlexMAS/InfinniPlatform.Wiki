---
layout: default
title: "PrintElement.Visibility"
position: 6
categories: 
tags: 
---

Видимость элемента печатного представления.

   

#### Type

[[PrintElementVisibility]]

   

#### Example

[[PrintElement.Visibility.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "Visibility": "Never",
        "Inlines": [
          {
            "Run": {
              "Text": "Never"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Visibility": "Always",
        "Inlines": [
          {
            "Run": {
              "Text": "Always"
            }
          }
        ]
      }
    }
  ]
}
```

  


  


