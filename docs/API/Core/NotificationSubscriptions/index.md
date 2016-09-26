---
layout: doc
title: "NotificationSubscriptions"
position: 1011
---

Сервис, позволяющий подписаться на уведомления от сервера. Основу NotificationSubscriptions составляет signalR - набор серверных и клиентских библиотек, облегчающих двухстороннее взаимодействие реального времени между сервером и клиентом.

# Description

Обычно, при работе с вэб-страницей, запрос и передача данных инициируется клиентом. Однако в некоторых случаях требуется актуализировать данные на странице без задержек. Для возможности оповещать клиентов об изменении данных используются так называемые push-уведомления. Один из способов организовать такие уведомления является библиотека SignalR. Сервис NotificationSubscriptions позволяет подписываться на уведомления внешних сервисов, реализованных на SignalR.

## Parameters

Нет.

# Methods

|Name|Description|
|----|---------|
|[`subscribe`](NotificationSubscriptions.subscribe/)|Добавляет подписку на событие|
|[`unsubscribe`](NotificationSubscriptions.unsubscribe/)|Удаляет подписку на событие|
|[`startConnection`](NotificationSubscriptions.startConnection/)|Устанавливает соединение с сервером и добавляет слушателей по заданым ключам|
|[`stopConnection`](NotificationSubscriptions.stopConnection/)|Разрывает соединение с сервером|
|[`reconnection`](NotificationSubscriptions.reconnection/)|Повторно устанавливает соединение с сервером с ранее указанными параметрами|
|[`isDisconnected`](NotificationSubscriptions.isDisconnected/)|Проверяет, разорвано ли соединение с сервером|
|[`on`](NotificationSubscriptions.on/)|Выполняет подписку на события signalR|
