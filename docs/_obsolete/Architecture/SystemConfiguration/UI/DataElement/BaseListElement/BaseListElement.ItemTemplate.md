---
layout: doc
title: "BaseListElement.ItemTemplate"
position: 6
categories: 
tags: 
---

Визуальный шаблон для отображения элемента списка.

   

Элементы, отображаемые в списках, как правило, представлены сложными объектами, которые кроме понятных человеку атрибутов, могут содержать служебную информацию (идентификаторы и т.п.). Всякий раз, когда пользователь работает со списком, ему, как правило, не нужно видеть все атрибуты элементов, поскольку только несколько из них по каким-то причинам являются для него значимыми. Настройка ItemTemplate определяет декларативную функцию формирования визуальных элементов для отображения их в списке. Например, пользователь открывает список контактов, чтобы найти и выбрать абонента, которому он хочет позвонить. При этом в списке он хочет видеть фотографию и имя контакта. В этом случае атрибут ItemTemplate должен содержать соответствующий шаблон отображения элементов списка.

   

#### Examples

```
{
  "ValueProperty": "Phone",
  "ItemTemplate": {
    "StackPanel": {
      "Orientation": "Horizontal",
      "Items": [
        {
          "ImageBox": {
            "Value": {
              "PropertyBinding": {
                "DataSource": "MainDataSource",
                "Property": "$.Photo"
              }
            }
          }
        },
        {
          "Label": {
            "DisplayFormat": {
              "ObjectFormat": {
                "Format": "{LastName}, {FirstName}"
              }
            },
            "Value": {
              "PropertyBinding": {
                "DataSource": "MainDataSource",
                "Property": "$"
              }
            }
          }
        }
      ]
    }
  },
  "Items": {
    "PropertyBinding": {
      "DataSource": "MainDataSource"
    }
  }
}
```

 

 

