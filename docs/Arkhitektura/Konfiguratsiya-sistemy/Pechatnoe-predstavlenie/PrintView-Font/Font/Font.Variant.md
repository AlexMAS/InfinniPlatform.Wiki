---
layout: default
title: "Font.Variant"
position: 5
categories: 
tags: 
---

Вертикальное выравнивание шрифта.

   

#### Type

[[FontVariant]]  


   

#### Example

[[Font.Variant.pdf]]  


```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "a"
            }
          },
          {
            "Run": {
              "Font": {
                "Variant": "Superscript"
              },
              "Text": "2"
            }
          },
          {
            "Run": {
              "Text": " + b"
            }
          },
          {
            "Run": {
              "Font": {
                "Variant": "Superscript"
              },
              "Text": "2"
            }
          },
          {
            "Run": {
              "Text": " = c"
            }
          },
          {
            "Run": {
              "Font": {
                "Variant": "Superscript"
              },
              "Text": "2"
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
              "Text": "H"
            }
          },
          {
            "Run": {
              "Font": {
                "Variant": "Subscript"
              },
              "Text": "2"
            }
          },
          {
            "Run": {
              "Text": "SO"
            }
          },
          {
            "Run": {
              "Font": {
                "Variant": "Subscript"
              },
              "Text": "4"
            }
          }
        ]
      }
    }
  ],
  "Font": {
    "Family": "Palatino Linotype"
  },
  "PageSize": {
    "Width": 200,
    "Height": 150,
    "SizeUnit": "Px"
  }
}
```

  


  


