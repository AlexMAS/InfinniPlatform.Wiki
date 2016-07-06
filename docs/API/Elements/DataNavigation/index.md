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
new DataNavigation([parent])
```

## Parameters

Name|Type|Description
----|----------|---------
parent|[`Element`](../../Core/Elements/Element)|Необязательный. Родительский [элемент](../../Core/Elements/Element)

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

