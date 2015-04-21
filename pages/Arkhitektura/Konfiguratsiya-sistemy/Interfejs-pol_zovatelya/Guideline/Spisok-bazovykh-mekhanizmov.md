---
layout: default
title: "Список базовых механизмов"
position: 8
categories: 
tags: 
---

Ниже перечислены основные механизмы, которые должны быть реализованы перед началом разработаны прикладных конфигураций.

   

831completeКомпозитная архитектура механизма [[интерпретации метаданных|Интерпретация метаданных]].832completeБазовый API для визуального элемента представления ([[Element]]).833completeБазовый API для визуального представления ([[View]]) и его элементов.834completeБазовый API для контекста визуального представления ([[Context]]).835completeБазовый API для глобального контекста приложения ([[GlobalContext]]).836completeИнтерпретация прикладных скриптов ([[LinkScript]]) визуального представления.837completeРабота с параметрами ([[Parameter]]) визуального представления.838completeБазовый API для работы с источниками данных ([[BaseDataSource]]).839completeИсточник данных представления для документов ([[DocumentDataSource]]).840completeМеханизм привязки данных ([[DataBinding]]): [[ObjectBinding]], [[PropertyBinding]], [[ParameterBinding]].841incompleteИнтерпретация формата отображения данных ([[DisplayFormat]]).857incompleteИнтерпретация маски ввода данных ([[EditMask]]).842incompleteМеханизм ссылок на визуальное представление ([[LinkView]]): [[ExistsView]], [[AutoView]], [[InlineView]], [[ChildView]].843completeОсновные действия по работе с документами: [[UpdateAction]], [[AddAction]], [[EditAction]], [[DeleteAction]], [[SaveAction]].844completeОсновные действия по работе с коллекциями: [[AddItemAction]], [[EditItemAction]], [[DeleteItemAction]], [[AcceptAction]].845completeОсновные действия по работе с представлением: [[OpenViewAction]], [[CancelAction]]. 846incompleteКонтейнеры элементов представления ([[LayoutPanel]]).847incompleteОсновные элементы представления для вызова действий ([[ActionElement]]): [[ActionBar]], [[MenuBar]], [[Button]].848incompleteОсновные элементы данных ([[DataElement]]): [[Label]], [[TextBox]], [[NumericBox]], [[CheckBox]], [[ToggleButton]], [[DatePicker]], [[ComboBox]], [[ListBox]], [[TreeView]], [[DataGrid]].849completeОсновные элементы для навигации и фильтрации данных: [[SearchPanel]], [[FilterPanel]], [[DataNavigation]].850completeБазовый API шины сообщений ([[MessageBus]]).851completeПроверка данных ([[ValidationOperator]]).852incompleteМеханизм отображения ошибок проверки данных.853incompleteМеханизм взаимодействия между визуальными элементами и источником данных через шину сообщений ([[DataSourceMessage]], [[MessageType]]).854complete[[Панель состояния (Status Bar)|Панель состояния (Status Bar)]].855incomplete[[Панель действий (Action Bar)|Панель действий (Action Bar)]].856incomplete[[Панель глобальной навигации (Global Navigation Bar)|Панель глобальной навигации (Global Navigation Bar)]].858incomplete**Браузер** должен зависеть только от FrontEnd API (InfinniUI) и не зависеть от BackEnd API (InfinniPlatform). 

 

