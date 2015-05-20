---
layout: doc
title: "Font.Size"
position: 1
categories: 
tags: 
---

Размер шрифта.

   

В качестве единицы измерения размера шрифта может быть использовано любое значение из перечисления [[SizeUnit]].

   

#### Type

number

    

#### Example

[[Font.Size.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Size": 10,
                "SizeUnit": "Px"
              },
              "Text": "10px"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Size": 10,
                "SizeUnit": "Pt"
              },
              "Text": "10pt"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Size": 10,
                "SizeUnit": "Mm"
              },
              "Text": "10mm"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Size": 1,
                "SizeUnit": "Cm"
              },
              "Text": "1cm"
            }
          }
        ]
      }
    },
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Size": 1,
                "SizeUnit": "In"
              },
              "Text": "1in"
            }
          }
        ]
      }
    }
  ],
  "PageSize": {
    "Width": 250,
    "Height": 300,
    "SizeUnit": "Px"
  }
}
```

  


  


