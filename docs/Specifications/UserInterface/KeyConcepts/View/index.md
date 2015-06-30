---
layout: doc
title: "View"
position: 1002
---

Визуальное представление.

# Description

Визуальное представление - программный объект, который может быть отображен на экране и представляет
собой контейнер взаимосвязанных друг с другом визуальных и невизуальных элементов. Визуальное
представление расширяет [базовый тип контейнера элементов](../Container/), таким образом, одно
представление может являться частью другого.

Способ расположения элементов внутри представления зависит от их настроек выравнивания -
[`Element.getHorizontalAlignment()`](../Element/Element.getHorizontalAlignment/)
и [`Element.getVerticalAlignment()`](../Element/Element.getVerticalAlignment/).

# Extends

## [`Container`](../Container/)

# Syntax

```js
new View([parent])
```

## Parameters

`parent`

Необязательный. Родительский [элемент](../Element/).

# Methods

## [`getIcon()`](View.getIcon/)

Возвращает изображение заголовка представления.

## [`setIcon()`](View.setIcon/)

Устанавливает изображение заголовка представления.

## [`getContext()`](View.getContext/)

Возвращает [контекст представления](../ViewContext/).

## [`getScripts()`](View.getScripts/)

Возвращает [коллекцию](../Collection/) [скриптов представления](../Script/).

## [`getParameters()`](View.getParameters/)

Возвращает [коллекцию](../Collection/) [параметров представления](../Parameter/).

## [`getDataSources()`](View.getDataSources/)

Возвращает [коллекцию](../Collection/) [источников данных представления](../../DataSources/BaseDataSource/).

## [`getDialogResult()`](View.getDialogResult/)

Возвращает [результат работы представления](DialogResult/).

## [`setDialogResult()`](View.setDialogResult/)

Устанавливает [результат работы представления](DialogResult/).

## [`open()`](View.open/)

Открывает представление.

## [`close()`](View.close/)

Закрывает представление.

# Events

## [`onOpening`](View.onOpening/)

Устанавливает [обработчик события](../Script/) о том, что представление открывается.

## [`onOpened`](View.onOpened/)

Устанавливает [обработчик события](../Script/) о том, что представление было открыто.

## [`onClosing`](View.onClosing/)

Устанавливает [обработчик события](../Script/) о том, что представление закрывается.

## [`onClosed`](View.onClosed/)

Устанавливает [обработчик события](../Script/) о том, что представление было закрыто.
