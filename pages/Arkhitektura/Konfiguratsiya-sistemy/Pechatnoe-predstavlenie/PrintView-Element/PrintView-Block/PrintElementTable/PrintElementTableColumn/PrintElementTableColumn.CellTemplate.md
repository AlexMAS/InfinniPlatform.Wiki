---
layout: default
title: PrintElementTableColumn.CellTemplate
position: 2
categories: 
tags: 
---

Заголовок столбца.

   

#### Type

[[PrintElementTableCell]]

   

#### Exmaple

[[PrintElementTableColumn.CellTemplate.pdf]]

```
{
  "Blocks": [
    {
      "Table": {
        "Source": "$",
        "ShowHeader": true,
        "Columns": [
          {
            "Header": {
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Bold": {
                        "Inlines": [
                          {
                            "Run": {
                              "Text": "Фамилия"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "CellTemplate": {
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Run": {
                        "Source": "LastName"
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "Header": {
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Bold": {
                        "Inlines": [
                          {
                            "Run": {
                              "Text": "Имя"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "CellTemplate": {
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Run": {
                        "Source": "FirstName"
                      }
                    }
                  ]
                }
              }
            }
          },
          {
            "Header": {
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Bold": {
                        "Inlines": [
                          {
                            "Run": {
                              "Text": "Отчество"
                            }
                          }
                        ]
                      }
                    }
                  ]
                }
              }
            },
            "CellTemplate": {
              "Block": {
                "Paragraph": {
                  "Inlines": [
                    {
                      "Run": {
                        "Source": "MiddleName"
                      }
                    }
                  ]
                }
              }
            }
          }
        ]
      }
    }
  ]
}
```

 

 

