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
|[AcceptAction](AcceptAction/)|Устанавливает результат работы [представления](../Elements/View/) в значение [DialogResult.accepted](../Elements/View/DialogResult/)|
|[CancelAction](CancelAction/)|Устанавливает результат работы [представления](../Elements/View/) в значение [DialogResult.canceled](../Elements/View/DialogResult/)|
|[AddAction](AddAction/)|Создает новый элемент в [источнике данных](../DataSources)|
|[EditAction](EditAction/)|Редактирует элемент в [источнике данных](../DataSources)|
|[DeleteAction](DeleteAction/)|Удаляет элемент из [источника данных](../DataSources)|
|[UpdateAction](UpdateAction/)|Обновляет список элементов [источника данных](../DataSources)|
|[SaveAction](SaveAction/)|Сохраняет изменения для текущего элемента в [источнике данных](../DataSources)|
|[SelectAction](SelectAction/)|???|
|[ServerAction](ServerAction/)|???|
|[PrintReportAction](PrintReportAction/)|???|
|[PrintViewAction](PrintViewAction/)|???|