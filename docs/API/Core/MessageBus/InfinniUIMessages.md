---
layout: doc
title: "MessageBus.InfinniUIMessages"
position: 5
---

Для работы с платформенными сообщениями используется InfinniUI.global.messageBus.


# MessageTypes

|Name|Description|messageBody|
|----|-----------|----|
|onViewBuildError|Ошибка при создании [view](../../Elements/View/)|{error: `string`, metadata: {[`путь до метаданных`](../../Elements/View/LinkView/LinkView.metadata/AutoView/)}}|
|onViewCreated|Создана [view](../../Elements/View/)|{openMode: [`openMode`](../../Elements/View/LinkView/OpenMode/), view: [`view`](../../Elements/View/)}|
|onNotifyUser|Оповещение пользователя|{messageText: `string`, messageType: `string`}|
|onDataLoading|Отправлен запрос|–|
|onDataLoaded|Полечен результат запроса|{success: `boolean`}|


# Examples

```js
InfinniUI.global.messageBus.subscribe('onViewCreated', function (context, args) {
	var view = args.value.view;
	alert('Open ' + view.getName());
});
```

# See Also

* [`send()`](../MessageBus.send/)
* [`subscribe()`](../MessageBus.subscribe/)