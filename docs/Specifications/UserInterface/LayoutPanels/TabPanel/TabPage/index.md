---
layout: doc
title: "TabPage"
position: 1000
---

Страница панели закладок [`TabPanel`](../).

# Extends

[`Element`](../../../KeyConcepts/Element/)

# Syntax

```js
new TabPage(view)
```

## Parameters

`view`

Родительское [представление](../../../KeyConcepts/View/) элемента.

# Methods

## [`getTabPanel()`](TabPage.getTabPanel/)

Возвращает родительскую [панель закладок](../).

## [`setTabPanel()`](TabPage.setTabPanel/)

Устанавливает родительскую [панель закладок](../).

## [`getIcon()`](TabPage.getIcon/)

Возвращает изображение заголовка страницы.

## [`setIcon()`](TabPage.setIcon/)

Устанавливает изображение заголовка страницы.

## [`getCanClose()`](TabPage.getCanClose/)

Возвращает значение, определяющее, разрешено ли закрытие страницы.

## [`setCanClose()`](TabPage.setCanClose/)

Устанавливает значение, определяющее, разрешено ли закрытие страницы.

## [`getLayoutPanel()`](TabPage.getLayoutPanel/)

Возвращает [контейнер элементов](../../) страницы.

## [`setLayoutPanel()`](TabPage.setLayoutPanel/)

Устанавливает [контейнер элементов](../../) страницы.

## [`close()`](TabPage.close/)

Закрывает страницу.

# Events

## [`onClosing`](TabPage.onClosing/)

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что страница закрывается.

## [`onClosed`](TabPage.onClosed/)

Устанавливает [обработчик события](../../../KeyConcepts/Script/) о том, что страница была закрыта.

# See Also

* [`TabPanel`](../)
