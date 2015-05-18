---
layout: doc
title: "BaseListGroup.ItemFormat"
position: 4
categories: 
tags: 
---

Формат отображения заголовка группы.

Данная настройка игнорируется, если задано значение для [[ItemTemplate|BaseListGroup.ItemTemplate]].

   

Элементы списка могут быть сгруппированы по значению, которое может быть малопонятно пользователю, если его отображать в заголовке группы. Настройка ItemFormat определяет декларативную функцию извлечения и [[форматирования|DisplayFormat]] значимой части данных из элементов списка, которая будет отображена в заголовке группы. Например, пользователь открывает список задач. При этом в списке он хочет видеть задачи, сгруппированные только по дате исполнения. В этом случае атрибут ItemFormat должен содержать соответствующие настройки форматирования даты.

   

#### Examples

```
{
  "Scripts": [
    {
      "Name": "GroupValueSelector",
      "Body": "return argument.Value.Date.setHours(0, 0, 0);"
    }
  ]
}
   
...
   
{
  "GroupTemplate": {
    "ValueSelector": "GroupValueSelector",
    "ItemFormat": {
      "ObjectFormat": {
        "Format": "{Date:d}"
      }
    }
  },
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Date": "2015-01-02T03:04:05", "Title": "Task 1" },
        { "Date": "2015-06-07T08:09:10", "Title": "Task 2" },
        { "Date": "2015-11-12T13:14:15", "Title": "Task 3" }
      ]
    }
  }
}
```

 

 

