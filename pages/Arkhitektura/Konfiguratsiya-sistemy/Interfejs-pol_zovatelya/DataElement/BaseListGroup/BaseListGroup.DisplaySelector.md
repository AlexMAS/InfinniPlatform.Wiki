---
layout: default
title: BaseListGroup.DisplaySelector
position: 2
categories: 
tags: 
---

Функция выборки значения из элемента списка для отображения в заголовке группы.

Данная настройка игнорируется, если задано значение для [[DisplayProperty|BaseListGroup.DisplayProperty]].

   

Элементы списка могут быть сгруппированы по значению, которое может быть малопонятно пользователю, если его отображать в заголовке группы. Настройка DisplaySelector определяет императивную функцию извлечения значимой части данных из элементов списка, которая будет отображена в загловке группы. Например, пользователь открывает список входящих сообщений. При этом в списке он хочет видеть сообщения, сгруппированные по дате: сегодня, вчера, месяц назад, очень давно. С помощью DisplaySelector можно определить функцию, которая будет осуществлять необходимое форматирование исходных данных.

   

#### Examples

```
{
  "Scripts": [
    {
      "Name": "GroupValueSelector",
      "Body": "var now = new Date();
               var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
               var diffDays = (argument.Value.Date - today) / (24 * 36000 * 1000);
               if (diffDays < 1) return 0;
               if (diffDays < 2) return 1;
               if (diffDays < 30) return 2;
               return 3;"
    },
    {
      "Name": "GroupDisplaySelector",
      "Body": "var now = new Date();
               var today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
               var diffDays = (argument.Value.Date - today) / (24 * 36000 * 1000);
               if (diffDays < 1) return 'Сегодня';
               if (diffDays < 2) return 'Вчера';
               if (diffDays < 30) return 'Месяц назад';
               return 'Очень давно';"
    }
  ]
}
   
...
   
{
  "GroupTemplate": {
    "ValueSelector": "GroupValueSelector",
    "DisplaySelector": "GroupDisplaySelector"
  },
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Date": "2015-01-02T03:04:05", "Title": "Message 1" },
        { "Date": "2015-06-07T08:09:10", "Title": "Message 2" },
        { "Date": "2015-11-12T13:14:15", "Title": "Message 3" }
      ]
    }
  }
}
```

 

 

