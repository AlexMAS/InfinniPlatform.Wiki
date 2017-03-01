---
layout: doc
title: "GlobalContext"
position: 1003
---

Глобальный контекст приложения. Контекст предоставляет доступ (API) к совместно используемым методам и свойствам приложения.

Объект глобального контекста доступен через InfinniUI.global

# Properties

|Name|Type|Description|
|----|----|-----------|
|`containers`|`Object`|Список доступных контейнеров для открытия представлений в режиме `OpenMode="Container"`.|
|`localizations`|[`Localizations`](../Localizations/)|Языковые и региональные настройки, для разных локалей.|
|`localized`|`Object`|Языковые и региональные настройки текущей локали.|
|`factory`|[`ApplicationBuilder`](../Builders/)|Общий [билдер](../Builders/) приложения.|
|`logger`|[`Logger`](../Logger/)|[Сервис регистрации сообщений](../Logger/).|
|`messageBus`|[`MessageBus`](../MessageBus/)|[Шина сообщений](../MessageBus/) приложения.|
|`session`|[`Session`](../Session/)|Провайдер для работы [сессией пользователя](../Session/).|
|`notificationSubsription`|[`NotificationSubscriptions`](../NotificationSubscriptions/)|Сервис, позволяющий подписаться на уведомления от сервера.|
|`routerService`|[`RouterService`](../Routing/RouterService/)|Сервис, позволяющий организовать маршрутизацию.|

# Methods

|Name|Description|
|----|-----------|
|[`executeAction`](GlobalContext.executeAction/)|Запускает выполнение указанного [действия](../Actions/).|
