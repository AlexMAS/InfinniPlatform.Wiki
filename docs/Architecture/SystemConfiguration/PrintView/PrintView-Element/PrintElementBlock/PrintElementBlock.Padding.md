---
layout: default
title: "PrintElementBlock.Padding"
position: 
categories: 
tags: 
---

Отступ от края элемента до содержимого элемента.  


    

#### Type

[[Thickness]]

   

#### Example

 [[PrintElementBlock.Padding.pdf]] 

```
{
  "Blocks": [
    {
      "Section": {
        "Padding": {
          "All": 0
        },
        "Margin": {
          "All": 0
        },
        "Blocks": [
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Default paragraph."
                  }
                }
              ],
              "Background": "White"
            }
          },
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Default paragraph."
                  }
                }
              ],
              "Background": "White"
            }
          },
          {
            "Paragraph": {
              "Margin": {
                "All": 50,
                "SizeUnit": "Px"
              },
              "Inlines": [
                {
                  "Run": {
                    "Text": "This paragraph has a magin of 50 pixels set, but no padding."
                  }
                }
              ],
              "Background": "LightBlue"
            }
          },
          {
            "Paragraph": {
              "Padding": {
                "All": 50,
                "SizeUnit": "Px"
              },
              "Inlines": [
                {
                  "Run": {
                    "Text": "This paragraph has padding of 50 pixels set, but no margin."
                  }
                }
              ],
              "Background": "LightCoral"
            }
          },
          {
            "Paragraph": {
              "Margin": {
                "All": 50,
                "SizeUnit": "Px"
              },
              "Padding": {
                "All": 50,
                "SizeUnit": "Px"
              },
              "Inlines": [
                {
                  "Run": {
                    "Text": "This paragraph has both padding and margin set to 50 pixels."
                  }
                }
              ],
              "Background": "LightGreen"
            }
          },
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Default paragraph."
                  }
                }
              ],
              "Background": "White"
            }
          },
          {
            "Paragraph": {
              "Inlines": [
                {
                  "Run": {
                    "Text": "Default paragraph."
                  }
                }
              ],
              "Background": "White"
            }
          }
        ],
        "Background": "Gray"
      }
    }
  ],
  "Background": "LightSlateGray"
}
```

 

 

