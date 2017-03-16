---
layout: doc
title: "Сonfig"
position: 1
---

Параметры конфигурации приложения.

Объект доступен через `InfinniUI.config`

# Properties

|Name|Type|Default|Description|
|----|----|-------|-----------|
|`serverUrl`|`String`||Адрес сервера.|
|`configName`|`String`||Название конфигурации.|
|`lang`|`String`|`en-US`|Текущая локаль.|
|`homePage`|`String`||Путь для получения домашней страницы.|
|`enableAutoHeightService`|`Boolean`|false|Флаг, определяющий запуск сервиса, регулирующего высоту элементов. Если сервис не запущен, [ScrollPanel](/docs/API/Elements/ScrollPanel/) не прокручивается.|
|`enableGetCurrentUser`|`Boolean`|false|Отключение отправки запроса на получение текущего пользователя.|
|`HistoryAPI`|`Object`||Параметры History API для запуска роутинга. Принимает такие же параметры как и [Backbone.history.start()](http://backbonejs.org/#History-start)|
|`Routes`|`Array`||[Массив объектов конфигурации роутинга приложения.](../Routing/Routes/)|

# Example

```js
window.InfinniUI.config.serverUrl = 'http://localhost:9900';
window.InfinniUI.config.configName = 'Хабинет';
window.InfinniUI.config.lang = 'en-US';
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
    Action: "{ routeCallback2(context, args) }"
  }
];
```

# See Also

* [`Routing`](../Routing)
* [`Localizations`](../Localizations)
