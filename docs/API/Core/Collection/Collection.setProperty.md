---
layout: doc
title: "Collection.setProperty"
position: 3
---

Устанавливает значение атрибута для заданного элемента коллекции. Установка значений атрибута не изменяет сам элемент коллекции. 

# Syntax

```js
collection.setProperty(index, propertyName, propertyValue);
```

## Parameters

|Name|Type|Description|
|----|----|-----------|
|`index`|`Integer`|Порядковый индекс элемента коллекции|
|`propertyName`|`String`|Имя атрибута|
|`value`|&#42;|Значение атрибута|

## Returns

Нет

# Examples

```js
collection.setProperty(0, 'originalIndex', 0); 
var index = collection.getProperty(0, 'originalIndex');
```

# See Also

* [`getProperty`](../Collection.getProperty/)
