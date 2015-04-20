---
layout: default
title: PrintElementBlock.TextAlignment
position: 
categories: 
tags: 
---

Горизонтальное выравнивание текста элемента.

   

#### Type

[[PrintElementTextAlignment]]  


   

#### Example

[[PrintElementBlock.TextAlignment.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "TextAlignment": "Left",
        "Border": {
          "Thickness": {
            "Left": 1,
            "Top": 1,
            "Right": 1,
            "Bottom": 1,
            "SizeUnit": "Px"
          },
          "Color": "Black"
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Left left left left left left left left left left left left left left left left."
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "TextAlignment": "Center",
        "Border": {
          "Thickness": {
            "Left": 1,
            "Right": 1,
            "Bottom": 1,
            "SizeUnit": "Px"
          },
          "Color": "Black"
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Center center center center center center center center."
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "TextAlignment": "Right",
        "Border": {
          "Thickness": {
            "Left": 1,
            "Right": 1,
            "Bottom": 1,
            "SizeUnit": "Px"
          },
          "Color": "Black"
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Right right right right right right right right right right right right."
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "TextAlignment": "Justify",
        "Border": {
          "Thickness": {
            "Left": 1,
            "Right": 1,
            "Bottom": 1,
            "SizeUnit": "Px"
          },
          "Color": "Black"
        },
        "Inlines": [
          {
            "Run": {
              "Text": "Justify justify justify justify justify justify justify justify justify."
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 350,
    "Height": 250,
    "SizeUnit": "Px"
  }
}
```

  


  


