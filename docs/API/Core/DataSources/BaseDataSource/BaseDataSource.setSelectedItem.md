---
layout: doc
title: "BaseDataSource.setSelectedItem()"
position: 20
---

Устанавливает выделенный элемент.

# Description

В каждый момент времени пользователь может работать только с одним элементом - выделенным элементом.
Зачастую это элемент, на котором установлен фокус ввода. Например, редактируемый элемент, выбранный
элемент в списке и т.д. Источник данных хранит информацию о выделенном элементе, благодаря чему
имеется возможность определять элемент данных, с которым работает пользователь. Изменение выделенного
элемента приводит к возникновению события [`onSelectedItemChanged`](../BaseDataSource.onSelectedItemChanged/).

# Syntax

```js
BaseDataSource.setSelectedItem(item, success, error)
```

## Parameters

|Name|Description|
|----|-----------|
|item|Элемент источника данных|
|success|(Необязательный) [Обработчик события](../../../Script/) о том, что выделенный элемент изменился. В данный обработчик приходят 2 параметра: [context](../../../Context/) и args. args.source содержит ссылку на [источник данных](../) |
|error|(Необязательный) [Обработчик события](../../../Script/) о том, что при изменении выделенного элемента произошла ошибка. В данный обработчик приходят 2 параметра: [context](../../../Context/) и args. args.error содержит сообщение об ошибке|

## Returns

Метод ничего не возвращает.

# Examples

```js
var items = BaseDataSource.getItems();
BaseDataSource.setSelectedItem(items[0]);
```

# See Also

* [`getSelectedItem()`](../BaseDataSource.getSelectedItem/)
* [`onSelectedItemChanged`](../BaseDataSource.onSelectedItemChanged/)
