---
layout: doc
title: "View"
position: 1
---

Визуальное представление.

# Description

Визуальное представление - программный объект, который может быть отображен на экране и представляет
собой контейнер взаимосвязанных друг с другом визуальных и невизуальных элементов. Визуальное
представление расширяет [базовый тип визуальных элементов](../Element/), таким образом, одно
представление может являться частью другого.

# Extends

## [`Element`](../Element/)

# Syntax

```js
new View(view)
```

## Parameters

`view`

Родительское [представление]().

# Methods

## [`getContext()`](View.getContext/)

Возвращает [контекст представления](../ViewContext/).

## [`getMessageBus()`](View.getMessageBus/)

Возвращает [шину сообщений](../MessageBus/) представления.

## [`getScripts()`](View.getScripts/)

Возвращает ассоциативный список [скриптов представления](../Script/).

## [`addScript()`](View.addScript/)

Добавляет [скрипт](../Script/) в представление.

## [`removeScript()`](View.removeScript/)

Удаляет [скрипт](../Script/) из представления.

## [`getParameters()`](View.getParameters/)

Возвращает ассоциативный список [параметров представления](../Parameter/).

## [`addParameter()`](View.addParameter/)

Добавляет [параметр](../Parameter/) в представление.

## [`removeParameter()`](View.removeParameter/)

Удаляет [параметр](../Parameter/) из представления.

## [`getDataSources()`](View.getDataSources/)

Возвращает ассоциативный список [источников данных представления](../../DataSources/BaseDataSource/).

## [`addDataSource()`](View.addDataSource/)

Добавляет [источник данных](../../DataSources/BaseDataSource/) в представление.

## [`removeDataSource()`](View.removeDataSource/)

Удаляет [источник данных](../../DataSources/BaseDataSource/) из представления.

## [`getIcon()`](View.getIcon/)

Возвращает изображение заголовка представления.

## [`setIcon()`](View.setIcon/)

Устанавливает изображение заголовка представления.

## [`getLayoutPanel()`](View.getLayoutPanel/)

Возвращает [контейнер элементов представления](../../LayoutPanels/).

## [`setLayoutPanel()`](View.setLayoutPanel/)

Устанавливает [контейнер элементов представления](../../LayoutPanels/).

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

Устанавливает [обработчик события](../Script/) о том, что представление открыто.

## [`onClosing`](View.onClosing/)

Устанавливает [обработчик события](../Script/) о том, что представление закрывается.

## [`onClosed`](View.onClosed/)

Устанавливает [обработчик события](../Script/) о том, что представление закрыто.
