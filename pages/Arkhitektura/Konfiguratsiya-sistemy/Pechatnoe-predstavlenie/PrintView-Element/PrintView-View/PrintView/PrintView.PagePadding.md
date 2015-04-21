---
layout: default
title: "PrintView.PagePadding"
position: 2
categories: 
tags: 
---

Отступ от края страницы до содержимого страницы.

    

По умолчанию отступ от края страницы до её содержимого равен 1 см (со всех сторон).

   

#### Type

[[Thickness]]

   

#### Example

[[PrintView.PagePadding.pdf]]  


```
{
  "PagePadding": {
    "Left": 1,
    "Top": 2,
    "Right": 3,
    "Bottom": 4,
    "SizeUnit": "Cm"
  },
  "Background": "Gray",
  "Blocks": [
    {
      "Paragraph": {
        "Background": "White",
        "Inlines": [
          {
            "Run": {
              "Text": "PagePadding: Left: 1cm, Top: 2cm, Right: 3cm, Bottom: 4cm"
            }
          }
        ]
      }
    }
  ]
}
```

  


 

