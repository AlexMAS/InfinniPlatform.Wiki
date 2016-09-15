---
layout: doc
title: "GlobalContext"
position: 1003
---

Глобальный контекст приложения. Контекст предоставляет доступ (API) к совместно используемым методам и свойствам приложения.

# Properties

|Name|Type|Description|
|----|----|-----------|
|`containers`|`Object`|Список доступных контейнеров для открытия представлений в режиме `OpenMode="Container"`.|
|`culture`|[`Culture`](../Culture/)|Языковые и региональные настройки.|
|`factory`|[`ApplicationBuilder`](../Builders/)|Общий [билдер](../Builders/) приложения.|
|`logger`|[`Logger`](../Logger/)|[Сервис регистрации сообщений](../Logger/).|
|`messageBus`|[`MessageBus`](../MessageBus/)|[Шина сообщений](../MessageBus/) приложения.|
|`session`|[`Session`](../Session/)|Провайдер для работы [сессией пользователя](../Session/).|
|`notificationSubsription`|[`NotificationSubscriptions`](../NotificationSubscriptions/)|Сервис, позволяющий подписаться на уведомления от сервера.|

# Methods

|Name|Description|
|----|-----------|
|[`executeAction`](GlobalContext.executeAction/)|Запускает выполнение указанного [действия](../Actions/).|