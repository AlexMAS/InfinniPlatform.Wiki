---
layout: doc
title: "BaseListElement.SetItem"
position: 11
categories: 
tags: 
---

Устанавливает выбранный элемент списка. 

Метод SetItem() работает симметрично методу [[GetItem|BaseListElement.GetItem]](). Ниже приводятся примеры, поясняющие логику работы метода.

      

Например, задан следующий список элементов.

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

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false, если вызвать метод SetItem() и передать ему второй элемент в списке ("Петя"), этот  элемент будет помечен как выбранный:

```
SetItem({ Code: 200, Name: 'Петя' })
GetItem() === { Code: 200, Name: 'Петя' }
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true, если вызвать метод SetItem() и передать ему массив, состоящий из первого ("Вася") и третьего ("Коля") элементов, эти элементы будут помечены как выбранные:

```
SetItem([ { Code: 100, Name: 'Вася' }, { Code: 300, Name: 'Коля' } ])
GetItem() === [ { Code: 100, Name: 'Вася' }, { Code: 300, Name: 'Коля' } ]
```

   

Вне зависимости от содержимого списка.

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false, если вызвать метод SetItem() и передать ему `null`, со всех элементов будет снята пометка выбора:

```
SetItem(null)
GetItem() === null
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true, если вызвать метод SetItem() и передать ему `null` или пустой массив, со всех элементов будет снята пометка выбора:

```
SetItem([ ])
GetItem() === [ ]
```

 

 

