---
layout: doc
title: "Actions"
position: 0
---

Для реализации типичных действий в Infinni UI используются Actions. Все действия реализуют [базовый API](BaseAction/).

На данный момент в Infinni UI реализованы следующие действия:

|Name|Description|
|----|-----------|
|[OpenAction](OpenAction/)|Открывает [представление](../Elements/View/)|
|[AcceptAction](AcceptAction/)|Устанавливает в качестве результата работы [представления](../Elements/View/) значение [DialogResult.accepted](../Elements/View/DialogResult/)|
|[CancelAction](CancelAction/)|Устанавливает в качестве результата работы [представления](../Elements/View/) значение [DialogResult.canceled](../Elements/View/DialogResult/)|
|[AddAction](AddAction/)|Создает новый элемент в [источнике данных](../DataSources)|
|[EditAction](EditAction/)|Редактирует элемент из [источника данных](../DataSources)|
|[DeleteAction](DeleteAction/)|Удаляет элемент из [источника данных](../DataSources)|
|[UpdateAction](UpdateAction/)|Обновляет список элементов [источника данных](../DataSources)|
|[SaveAction](SaveAction/)|Сохраняет изменения для текущего элемента в [источнике данных](../DataSources)|
|[SelectAction](SelectAction/)|Заполняет поле элемента в [источнике данных](../DataSources) данными из другого элемента [источника данных](../DataSources)|
|[ServerAction](ServerAction/)|Отправляет http запрос|
|[RouteToAction](RouteToAction/)|Переходит по заданному маршруту|
