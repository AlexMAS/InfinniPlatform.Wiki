---
layout: default
title: PrintView.ViewType
position: 0
categories: 
tags: 
---

Тип печатного представления.

   

#### Type

[[PrintViewType]]  


       

#### Example

[[PrintView.ViewType.pdf]]

```
{
  "Name": "PatientPrintView",
  "Caption": "Информация о пациенте",
  "ViewType": "ObjectView",
  "Source": "$",
  "Blocks": [
    {
      "Paragraph": {
        "Inlines": [
          {
            "Run": {
              "Text": "Пациент:"
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
              "Source": "LastName"
            }
          },
          {
            "Run": {
              "Text": " "
            }
          },
          {
            "Run": {
              "Source": "FirstName"
            }
          },
          {
            "Run": {
              "Text": " "
            }
          },
          {
            "Run": {
              "Source": "MiddleName"
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
              "Text": "Адреса:"
            }
          }
        ]
      }
    },
    {
      "List": {
        "Source": "Addresses",
        "MarkerStyle": "None",
        "ItemTemplate": {
          "Paragraph": {
            "Inlines": [
              {
                "Run": {
                  "SourceFormat": {
                    "ObjectFormat": {
                      "Format": "{Type.DisplayName}: {AddressLine}"
                    }
                  }
                }
              }
            ]
          }
        }
      }
    }
  ]
}
```

  


 

