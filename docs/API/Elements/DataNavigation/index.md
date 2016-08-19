---
layout: doc
title: "DataNavigation"
position: 0
---

Панель навигации по данным.

# Extends

[`Element`](../../Core/Elements/Element)

# Syntax

```js
new DataNavigation(parent)
```

## Parameters

Name|Type|Description
----|----------|---------
parent|[`Element`](../../Core/Elements/Element)|Родительский [элемент](../../Core/Elements/Element)

# Methods

Name|Description
----|---------
[`getDataSource`](DataNavigation.getDataSource/)|Возвращает [источник данных](../../Core/DataSources/BaseDataSource/).
[`setDataSource`](DataNavigation.setDataSource/)|Устанавливает [источник данных](../../Core/DataSources/BaseDataSource/).
[`getAvailablePageSizes`](DataNavigation.getAvailablePageSizes/)|Возвращает [коллекцию](../../Core/Collection/) доступных размеров страниц.
[`getPageNumber`](DataNavigation.getPageNumber)|Возвращает номер текущей страницы.
[`setPageNumber`](DataNavigation.setPageNumber)|Устанавливает номер текущей страницы.
[`getPageSize`](DataNavigation.getPageSize)|Возвращает размер страницы.
[`setPageSize`](DataNavigation.setPageSize)|Устанавливает размер страницы.
[`getPageCount`](DataNavigation.getPageCount)|Возвращает количество страниц.
[`setPageCount`](DataNavigation.setPageCount)|Устанавливает количество страниц.
[`getIsDataReady`](DataNavigation.getIsDataReady)|Возвращает значение о том, готовы данные или нет.
[`setIsDataReady`](DataNavigation.setIsDataReady)|Устанавливает значение о том, готовы данные или нет.

# Events

[`onPageSizeChanged`](DataNavigation.onPageSizeChanged)|[Обработчик события](../../Core/Script/) о том, что размер страницы изменился.
[`onPageNumberChanged`](DataNavigation.onPageNumberChanged)|[Обработчик события](../../Core/Script/) о том, что номер страницы изменился.

