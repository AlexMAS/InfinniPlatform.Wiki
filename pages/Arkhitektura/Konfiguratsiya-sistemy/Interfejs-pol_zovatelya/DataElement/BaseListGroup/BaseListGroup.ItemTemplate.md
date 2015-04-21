---
layout: default
title: BaseListGroup.ItemTemplate
position: 5
categories: 
tags: 
---

Визуальный шаблон для отображения заголовка группы.

   

Элементы списка могут быть сгруппированы по значению, которое может быть малопонятно пользователю, если его отображать в заголовке группы. Настройка ItemTemplate определяет декларативную функцию формирования визуального элемента для отображения его в заголовке группы. Например, пользователь открывает список входящих сообщений. При этом в списке он хочет видеть сообщения, сгруппированные по категории, которая должна быть выведена крупным шрифтом. В этом случае атрибут ItemTemplate должен содержать соответствующий шаблон отображения заголовка группы.

   

#### Examples

```
{
  "GroupTemplate": {
    "ValueProperty": "Category.Id",
    "ItemTemplate": {
      "Label": {
        "Value": {
          "TemplateBinding": {
            "Property": "Category.Name"
          }
        },
        "TextStyle": "Headline"
      }
    }
  },
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Category": { "Id": 1, "Name": "Важные" }, "Title": "Message 1" },
        { "Category": { "Id": 2, "Name": "Соцсети" }, "Title": "Message 2" },
        { "Category": { "Id": 3, "Name": "Оповещения" }, "Title": "Message 3" }
      ]
    }
  }
}
```

 

 

