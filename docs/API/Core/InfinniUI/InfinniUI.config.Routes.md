---
layout: doc
title: "InfinniUI.config.Routes"
position: 2
---

Массив конфигураций маршрутов приложения. Каждый маршрут описывается объектом с обязательными параметрами Name, Path, Action.

# Syntax

```js
window.InfinniUI.config.Routes = [
  {
    Name: routeName,
    Path: path,
    Action: action
  }
];
```

# Properties

|Name|Type|Description|
|----|----|-----------|
|`routeName`|`String`|Уникальное имя пути.|
|`path`|`String`|Путь. Путь должен начинаться со слеша "/". Возможно содержание параметров. Имя параметров может состоять только из букв и цифр, без других символов.|
|`action`|`Script`|Функция которая будет вызваны при переходе на указанный путь|

# Example

```js
window.InfinniUI.config.Routes = [
  {
    Name: "HomePageRoute",
    Path: "/",
    Action: "{ routeCallback(context, args) }"
  },
  {
    Name: "UserPageRoute",
    Path: "/user/<% userId %>/<% pageNumber %>?query1=<% query1 %>&query2=<% query2 %>",
    Action: "{ routeCallback2(context, args) }"
  }
];

function routerCallback(context, args) {
  console.log(args.name); // Передается routeName
  console.log(args.params); // Передается массив значений параметров указанных в path, последним элементом массива является null. Если параметров нет, передается [null]
  console.log(args.routerParams); // Передается объект с параметрами роутера
}

function routerCallback2(context, args) {
  console.log(args.name); // "UserPageRoute"
  console.log(args.params); // Например, при url "http://example.com/user/00001/1?query1=notebook&query2=second" придет массив значений ["00001", "1", "notebook", "second", null]
  console.log(args.routerParams);
}
```

# See Also

* [`InfinniUI.config`](../InfinniUI.config)
