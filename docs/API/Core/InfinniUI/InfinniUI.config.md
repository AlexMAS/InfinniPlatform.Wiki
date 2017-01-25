---
layout: doc
title: "InfinniUI.config"
position: 1
---

Параметры конфигурации приложения

# Properties

|Name|Type|Description|
|----|----|-----------|
|`serverUrl`|`String`|Адрес сервера.|
|`configName`|`String`|Название конфигурации.|
|`homePage`|`String`|Путь для получения домашней страницы.|
|`enableAutoHeightService`|`Boolean`|Флаг, определяющий запуск AutoHeightService (по умолчанию сервис не запущен).|
|`enableGetCurrentUser`|`Boolean`|Отключение отправки запроса на получение текущего пользователя.|
|`HistoryAPI`|`Object`|Параметры History API для запуска роутинга. Принимает такие же параметры как и [Backbone.history.start()](http://backbonejs.org/#History-start)|
|`Routes`|`Array`|[Массив объектов конфигурации роутинга приложения.](../InfinniUI.config.Routes)|

# Example

```js
window.InfinniUI.config.serverUrl = 'http://localhost:9900';
window.InfinniUI.config.configName = 'Хабинет';
window.InfinniUI.config.homePage = 'content/metadata/Views/common/homePage.json';
window.InfinniUI.config.enableAutoHeightService = true;
window.InfinniUI.config.enableGetCurrentUser = true;
window.InfinniUI.config.HistoryAPI = {
  pushState: true
};
window.InfinniUI.config.Routes = [
  {
    Name: "HomePageRoute",
    Path: "/",
    Action: "{ routeCallback(context, args) }"
  },
  {
    Name: "UserPageRoute",
    Path: "/user/<% userId %>",
    Action: "{ routeCallback3(context, args) }"
  }
];
```

# See Also

* [`InfinniUI.config.Routes`](../InfinniUI.config.Routes)
