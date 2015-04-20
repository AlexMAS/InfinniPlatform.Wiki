---
layout: default
title: BaseListElement.GetItem
position: 10
categories: 
tags: 
---

Возвращает выбранный элемент списка. 

Метод GetItem() работает симметрично методу [[SetItem|BaseListElement.SetItem]](). Ниже приводятся примеры, поясняющие логику работы метода.

   

Если пользователь выбрал второй элемент в списке ("Петя").

```
{
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Code": 100, "Name": "Вася" },
        { "Code": 200, "Name": "Петя" },
        { "Code": 300, "Name": "Коля" }
      ]
    }
  }
}
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false метод GetItem() вернет выбранный элемент (**не клон**):

```
GetItem() === { Code: 200, Name: 'Петя' }
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true метод GetItem() вернет массив из одного - выбранного - элемента:

```
GetItem() === [ { Code: 200, Name: 'Петя' } ]
```

   

Если пользователь не выбрал ни один из элементов.

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false метод GetItem() вернет `null`:

```
GetItem() === null
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true метод GetItem() вернет пустой массив:

```
GetItem() === [ ]
```

 

 

