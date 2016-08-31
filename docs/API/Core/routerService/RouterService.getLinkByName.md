---
layout: doc
title: "RouterService.getLinkByName"
position: 1
---

Возвращает полный путь соответствующий переданому имени.

# Syntax

```js
RouterService.getLinkByName(RouteName)
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|RouteName|`String`|Имя маршрута заданного в конфигурации

## Returns

Возвращает полный путь соответствующий переданому имени.

# Examples

```js
RouterService.getLinkByName("HomePageRoute");
```

# See Also

* [`startRouter()`](../RouterService.startRouter/)
