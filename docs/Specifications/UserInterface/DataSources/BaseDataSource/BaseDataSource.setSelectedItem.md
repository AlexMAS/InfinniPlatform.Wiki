---
layout: doc
title: "BaseDataSource.setSelectedItem()"
position: 23
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
BaseDataSource.setSelectedItem(item)
```

## Parameters

`item`

Элемент источника данных.

# Examples

```js
var items = BaseDataSource.getItems();
BaseDataSource.setSelectedItem(items[0]);
var selectedItem = BaseDataSource.getSelectedItem(); // selectedItem === items[0]
```
