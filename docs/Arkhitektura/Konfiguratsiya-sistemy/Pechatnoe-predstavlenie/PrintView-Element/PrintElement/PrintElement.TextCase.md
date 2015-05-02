---
layout: default
title: "PrintElement.TextCase"
position: 5
categories: 
tags: 
---

Регистр символов текста.

   

#### Type

[[PrintElementTextCase]]

  

#### Example

[[PrintElement.TextCase.pdf]]

```
{
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Font": {
                "Weight": "Bold"
              },
              "Text": "Normal"
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
              "Text": "Какой-то текст → "
            }
          },
          {
            "Run": {
              "TextCase": "Normal",
              "Text": "Какой-то текст"
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
                "Weight": "Bold"
              },
              "Text": "SentenceCase"
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
              "Text": "текст некоторого предложения → "
            }
          },
          {
            "Run": {
              "TextCase": "SentenceCase",
              "Text": "текст некоторого предложения"
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
                "Weight": "Bold"
              },
              "Text": "Lowercase"
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
              "Text": "КАКОЙ-ТО ТЕКСТ → "
            }
          },
          {
            "Run": {
              "TextCase": "Lowercase",
              "Text": "КАКОЙ-ТО ТЕКСТ"
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
                "Weight": "Bold"
              },
              "Text": "Uppercase"
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
              "Text": "какой-то текст → "
            }
          },
          {
            "Run": {
              "TextCase": "Uppercase",
              "Text": "какой-то текст"
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
                "Weight": "Bold"
              },
              "Text": "ToggleCase"
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
              "Text": "какой-то ТЕКСТ → "
            }
          },
          {
            "Run": {
              "TextCase": "ToggleCase",
              "Text": "какой-то ТЕКСТ"
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
              "Text": "КАКОЙ-ТО текст → "
            }
          },
          {
            "Run": {
              "TextCase": "ToggleCase",
              "Text": "КАКОЙ-ТО текст"
            }
          }
        ]
      }
    }
  ]
}
```

  


 

