---
layout: doc
title: "RouterService"
position: 1011
---

RouterService позволяет настроить маршрутизацию для Single Page Application

# Description

RouterService предоставляет возможность настройки маршрутизации на стороне клиента, а также связывания этих действий с событиями. Для браузеров, которые не поддерживают History API, RouterService проделает то же самое, используя фрагментарную структуру URL.

Во время загрузки страницы, после того, как ваше приложение откроет HomePage view и будут созданы все роуты описанные в [InfinniUI.config.Routes](../InfinniUI/InfinniUI.config), автоматически будет запущен роутер используя настройки History API из [InfinniUI.config.HistoryAPI](../InfinniUI/InfinniUI.config). RouterService представляет собой обертку над [Backbone.Router](http://backbonejs.org/#Router).

## Parameters

Нет.

# Methods

|Name|Description|
|----|---------|
|[`getLinkByName()`](RouterService.getLinkByName/)|Возвращает путь соответсвующий переданому имени.|
|[`startRouter()`](RouterService.startRouter/)|Запускает роутинг.|
|[`setContext()`](RouterService.setContext/)|Устанавливает контекст, который будет передаваться в скрипты, вызываемые RouterService.|
|[`setParams()`](RouterService.setParams/)|Устанавливает параметры, который будут передаваться в скрипты, вызываемые RouterService.|
|[`addParams()`](RouterService.addParams/)|Добавляет параметры, которые нужно передавать в скрипты, вызываемые RouterService.|