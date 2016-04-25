---
layout: doc
title: "BaseDataSource.onPropertyChanged"
position: 101
---

Устанавливает [обработчик события](../../../Script/) о том, что одно из свойств источника изменилось.

# Description

Методы [`getProperty()`](../BaseDataSource.getProperty/), [`setProperty()`](../BaseDataSource.setProperty/)
и событие [`onPropertyChanged`](../BaseDataSource.onPropertyChanged/) используются механизмом
[привязки данных](../../DataBinding/). Вместе с этим они предоставляют универсальный
унифицированный интерфейс для работы со свойствами источника данных.

# Syntax

```js
BaseDataSource.onPropertyChanged(property, callback, owner)
BaseDataSource.onPropertyChanged(callback, owner)
```
Второй вариант сигнатуры позволяет подписаться на изменение всех свойств.

## Parameters

|Name|Type|Description|
|----|----|-----------|
|property|`String`|Название свойства, изменения которого необходимо отслеживать|
|callback|[Script](../../../Script/)|Обработчик события о том, что одно из свойств источника изменилось. Параметр `args` данного обработчика содержит измененное свойство в поле property|
|owner| |(Необязательное) Родительский элемент, используется для автоматической отписки. Должен иметь поле или метод isRemoved. Если isRemoved возвращает истину, происходит автоматическая отписка|

# Examples

```js
BaseDataSource.onPropertyChanged(
  function(context, args) { alert('Property ' + args.property + ' is changed!'); }
);
```

# See Also

* [`getProperty()`](../BaseDataSource.getProperty/)
* [`setProperty()`](../BaseDataSource.setProperty/)
* [`DataBinding`](../../DataBinding/)
