---
layout: doc
title: "BaseListElement.GetValue"
position: 8
categories: 
tags: 
---

Возаращает выбранное значение. 

Метод GetValue() работает симметрично методу [[SetValue|BaseListElement.SetValue]](). 

Результат работы метода GetValue() напрямую зависит от значений атрибутов [[ValueSelector|BaseListElement.ValueSelector]] и [[ValueProperty|BaseListElement.ValueProperty]]. Ниже приводятся примеры, поясняющие логику этой зависимости.

  

ValueSelector и ValueProperty не указаны или равны `null`, если пользователь выбрал второй элемент в списке ("Петя").

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

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false метод GetValue() вернет выбранный элемент (**не клон**):

```
GetValue() === { Code: 200, Name: 'Петя' }
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true метод GetValue() вернет массив из одного - выбранного - элемента:

```
GetValue() === [ { Code: 200, Name: 'Петя' } ]
```

  

ValueSelector содержит ссылку на функцию выборки значения, если пользователь выбрал второй элемент в списке ("Петя").

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

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false метод GetValue() вернет результат работы указанной функции для выбранного элемента:

```
GetValue() === '1234567891'
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true метод GetValue() вернет массив из одного элемента - результата работы указанной функции для выбранного элемента:

```
GetValue() === [ '1234567891' ]
```

   

ValueProperty содержит наименование свойства элемента списка, если пользователь выбрал второй элемент в списке ("Петя").

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

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false метод GetValue() вернет значение указанного свойства выбранного элемента:

```
GetValue() === 200
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true метод GetValue() вернет массив из одного элемента - значения указанного свойства выбранного элемента:

```
GetValue() === [ 200 ]
```

   

ValueProperty содержит шаблон формирования выбранного значения из элемента списка, если пользователь выбрал второй элемент в списке ("Петя").

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

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false метод GetValue() вернет объект, созданный по шаблону на основе данных выбранного элемента:

```
GetValue() === { Id: 200, DisplayName: 'Петя' }
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true метод GetValue() вернет массив из одного элемента - объекта, созданного по шаблону на основе данных выбранного элемента:

```
GetValue() === [ { Id: 200, DisplayName: 'Петя' } ]
```

   

Вне зависимости от значений ValueSelector и ValueProperty, если пользователь не выбрал ни один из элементов.

В случае [[MultiSelect|BaseListElement.MultiSelect]]=false метод GetValue() вернет `null`:

```
GetValue() === null
```

В случае [[MultiSelect|BaseListElement.MultiSelect]]=true метод GetValue() вернет пустой массив:

```
GetValue() === [ ]
```

 

 

