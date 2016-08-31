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
|`disableLayoutManager`|`Boolean`|Отключение LayoutManager.|
|`disableGetCurrentUser`|`Boolean`|Отключение отправки запроса на получение текущего пользователя.|
|`disableSignInExternalForm`|`Boolean`|Отключение отправки запроса на получение SignInExternalForm.|
|`HistoryAPI`|`Object`|Параметры History API для запуска роутинга. Принимает такие же параметры как и Backbone.history.start()|
|`Routes`|`Array`|[Массив объектов конфигурации роутинга приложения.](../InfinniUI.config.Routes)|

# Example

```js
window.InfinniUI.config.serverUrl = 'http://localhost:9900';
window.InfinniUI.config.configName = 'Хабинет';
window.InfinniUI.config.homePage = 'content/metadata/Views/common/homePage.json';
window.InfinniUI.config.disableLayoutManager = true;
window.InfinniUI.config.disableGetCurrentUser = false;
window.InfinniUI.config.disableSignInExternalForm = false;
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
