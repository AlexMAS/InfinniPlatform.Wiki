---
layout: doc
title: "Element"
position: 0
---

Базовый тип для визуальных элементов представления.

## Description

Визуальный элемент - программный объект, который может быть отображен на экране. Каждый визуальный
элемент предоставляет базовый API, который может расширяться в зависимости от специфики элемента.
Определенный для элементов API должен быть реализован в строгом соответствии со спецификацией и
является опорной точкой не только для написания прикладных скриптов, но и при реализации механизма
интерпретации метаданных.

Визуальные элементы могут быть простые, как например, [Button](../../Components/Button/), а могут
быть композитные, то есть содержать внутри себя другие визуальные элементы. Ярким примером композитного
элемента является [GridPanel](../../LayoutPanels/GridPanel/).

## Methods

[`getView()`](Element.getView/)

Возвращает родительское [представление](../View/).

[`getName()`](Element.getName/)

Возвращает наименование элемента.

[`setName()`](Element.setName/)

Устанавливает наименование элемента.

[`getText()`](Element.getText/)

Возвращает текст заголовка элемента.

[`setText()`](Element.setText/)

Устанавливает текст заголовка элемента.

[`getEnabled()`](Element.getEnabled/)

Возвращает значение, определяющее, возможен ли доступ к элементу.

[`setEnabled()`](Element.setEnabled/)

Устанавливает значение, определяющее, возможен ли доступ к элементу.

[`getVisible()`](Element.getVisible/)

Возвращает значение, определяющее, отображается ли элемент в интерфейсе.

[`setVisible()`](Element.setVisible/)

Устанавливает значение, определяющее, отображается ли элемент в интерфейсе.

[`getHorizontalAlignment()`](Element.getHorizontalAlignment/)

Возвращает [горизонтальное выравнивание в родительском элементе](ElementHorizontalAlignment/).

[`setHorizontalAlignment()`](Element.setHorizontalAlignment/)

Устанавливает [горизонтальное выравнивание в родительском элементе](ElementHorizontalAlignment/).

[`getVerticalAlignment()`](Element.getVerticalAlignment/)

Возвращает [вертикальное выравнивание в родительском элементе](ElementVerticalAlignment/).

[`setVerticalAlignment()`](Element.setVerticalAlignment/)

Устанавливает [вертикальное выравнивание в родительском элементе](ElementVerticalAlignment/).

[`getChildElements()`](Element.getChildElements/)

Возвращает список дочерних элементов.

## Events

[`onLoaded`](Element.onLoaded/)

Устанавливает обработчик события о том, что элемент загружен.

[`onGotFocus`](Element.onGotFocus/)

Устанавливает обработчик события о том, что элемент получил фокус ввода.

[`onLostFocus`](Element.onLostFocus/)

Устанавливает обработчик события о том, что элемент потерял фокус ввода.
