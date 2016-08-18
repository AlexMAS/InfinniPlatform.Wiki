---
layout: doc
title: "NotificationSubscriptions"
position: 1011
---

Основу NotificationSubscriptions составляет signalR - это набор серверных и клиентских библиотек, облегчающих двухстороннее взаимодействие реального времени между сервером и клиентом..

# Description

Не только клиент может инициировать контакт с сервером, как в случае веб-разработки, но и сервер может связываться с клиентом. При этом используются отнюдь не просто HTTP-ответы. На самом деле это вызовы методов с сервера на клиенте по аналогии с технологией оповещения (push technology). Клиент может даже связываться даже с другими клиентами через серверный компонент SignalR. Все это возможно потому, что SignalR создает постоянное соединение между сервером и клиентом.

## Parameters

Нет.

# Methods

|Name|Description|
|----|---------|
|[`subscribe`](NotificationSubscriptions.subscribe/)|Добавляет подписку на событие|
|[`unsubscribe`](NotificationSubscriptions.unsubscribe/)|Удаляет подписку на событие|
|[`startConnection`](NotificationSubscriptions.startConnection/)|Устанавливает соединение с сервером и добавляет слушателей по заданым ключам|
|[`stopConnection`](NotificationSubscriptions.stopConnection/)|Разрывает соединение с сервером|
