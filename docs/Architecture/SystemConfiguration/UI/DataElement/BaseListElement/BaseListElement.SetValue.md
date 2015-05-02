---
layout: default
title: "BaseListElement.SetValue"
position: 9
categories: 
tags: 
---

Устанавливает выбранное значение. 

Метод SetValue() работает симметрично методу [[GetValue|BaseListElement.GetValue]](). 

Результат работы метода SetValue() напрямую зависит от значений атрибутов [[ValueSelector|BaseListElement.ValueSelector]] и [[ValueProperty|BaseListElement.ValueProperty]]. Ниже приводятся примеры, поясняющие логику этой зависимости.

   

ValueSelector и ValueProperty не указаны или равны `null`. 

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

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false, если вызвать метод SetValue() и передать ему второй элемент в списке ("Петя"), этот  элемент будет помечен как выбранный:

```
SetValue({ Code: 200, Name: 'Петя' })
GetValue() === { Code: 200, Name: 'Петя' }
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true, если вызвать метод SetValue() и передать ему массив, состоящий из первого ("Вася") и третьего ("Коля") элементов, эти элементы будут помечены как выбранные:

```
SetValue([ { Code: 100, Name: 'Вася' }, { Code: 300, Name: 'Коля' } ])
GetValue() === [ { Code: 100, Name: 'Вася' }, { Code: 300, Name: 'Коля' } ]
```

   

ValueSelector содержит ссылку на функцию выборки значения.

```
"Scripts": [
  {
    "Name": "PhoneNumberSelector",
    "Body": "argument.Value.replace(/[^0-9]/g, '')"
  }
]
   
...
   
{
  "ValueSelector": "PhoneNumberSelector",
  "Items": {
    "ObjectBinding": {
      "Value": [
        { "Code": 100, "Name": "Вася", "Phone": "+1 (234) 567-890" },
        { "Code": 200, "Name": "Петя", "Phone": "+1 (234) 567-891" },
        { "Code": 300, "Name": "Коля", "Phone": "+1 (234) 567-892" }
      ]
    }
  }
}
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false, если вызвать метод SetValue() и передать ему `'1234567891'`, второй элемент в списке ("Петя") будет помечен как выбранный:

```
SetValue('1234567891')
GetValue() === '1234567891'
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true, если вызвать метод SetValue() и передать ему массив `['1234567890','1234567892']`, первый ("Вася") и третий ("Коля") элементы будут помечены как выбранные:

```
SetValue([ '1234567890', '12345678912' ])
GetValue() === [ '1234567890', '12345678912' ]
```

   

ValueProperty содержит наименование свойства элемента списка.

```
{
  "ValueProperty": "Code",
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

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false, если вызвать метод SetValue() и передать ему `200`, второй элемент в списке ("Петя") будет помечен как выбранный:

```
SetValue(200)
GetValue() === 200
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true, если вызвать метод SetValue() и передать ему массив `[100,300]`, первый ("Вася") и третий ("Коля") элементы будут помечены как выбранные:

```
SetValue([ 100, 300 ])
GetValue() === [ 100, 300 ]
```

   

ValueProperty содержит шаблон формирования выбранного значения из элемента списка.

```
{
  "ValueProperty": {
    "Id": "Code",
    "DisplayName": "Name"
  },
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

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false, если вызвать метод SetValue() и передать ему шаблонный объект, соответствующий второму элементу в списке ("Петя"), этот элемент будет помечен как выбранный:

```
SetValue({ Id: 200, DisplayName: 'Петя' })
GetValue() === { Id: 200, DisplayName: 'Петя' }
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true, если вызвать метод SetValue() и передать ему массив из шаблоных объектов, соответствующих первому ("Вася") и третьему ("Коля") элементам списка, они будут помечены как выбранные:

```
SetValue([ { Id: 100, DisplayName: 'Вася' }, { Id: 300, DisplayName: 'Коля' } ])
GetValue() === [ { Id: 100, DisplayName: 'Вася' }, { Id: 300, DisplayName: 'Коля' } ]
```

   

Вне зависимости от значений ValueSelector и ValueProperty.

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false, если вызвать метод SetValue() и передать ему `null`, со всех элементов будет снята пометка выбора:

```
SetValue(null)
GetValue() === null
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true, если вызвать метод SetValue() и передать ему `null` или пустой массив, со всех элементов будет снята пометка выбора:

```
SetValue([ ])
GetValue() === [ ]
```

 

 

