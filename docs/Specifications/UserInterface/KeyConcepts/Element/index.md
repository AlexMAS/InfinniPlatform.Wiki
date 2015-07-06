---
layout: doc
title: "Element"
position: 1000
tags: [ element ]
---

Базовый тип для визуальных элементов представления.

# Description

Визуальный элемент - программный объект, который может быть отображен на экране. Каждый визуальный
элемент предоставляет базовый API, который может расширяться в зависимости от специфики элемента.
Определенный для элементов API должен быть реализован в строгом соответствии со спецификацией и
является опорной точкой не только для написания прикладных скриптов, но и при реализации механизма
интерпретации метаданных.

# Syntax

```js
new Element([parent])
```

## Parameters

`parent`

Необязательный. Родительский [элемент]().

# Properties

## [`name`](Element.name/)

Возвращает наименование элемента.

# Methods

## [`getView()`](Element.getView/)

Возвращает родительское [представление](../View/).

## [`getParent()`](Element.getParent/)

Возвращает родительский [элемент]().

## [`setParent()`](Element.setParent/)

Устанавливает родительский [элемент]().

## [`getName()`](Element.getName/)

Возвращает наименование элемента.

## [`setName()`](Element.setName/)

Устанавливает наименование элемента.

## [`getText()`](Element.getText/)

Возвращает текст заголовка элемента.

## [`setText()`](Element.setText/)

Устанавливает текст заголовка элемента.

## [`getFocusable()`](Element.getFocusable/)

Возвращает значение, определяющее, возможно ли установить фокус ввода на элемент.

## [`setFocusable()`](Element.setFocusable/)

Устанавливает значение, определяющее, возможно ли установить фокус ввода на элемент.

## [`getFocused()`](Element.getFocused/)

Возвращает значение, определяющее, установлен ли фокус ввода на элемент.

## [`setFocused()`](Element.setFocused/)

Устанавливает значение, определяющее, установлен ли фокус ввода на элемент.

## [`getEnabled()`](Element.getEnabled/)

Возвращает значение, определяющее, возможен ли доступ к элементу.

## [`setEnabled()`](Element.setEnabled/)

Устанавливает значение, определяющее, возможен ли доступ к элементу.

## [`getVisible()`](Element.getVisible/)

Возвращает значение, определяющее, отображается ли элемент в интерфейсе.

## [`setVisible()`](Element.setVisible/)

Устанавливает значение, определяющее, отображается ли элемент в интерфейсе.

## [`getHorizontalAlignment()`](Element.getHorizontalAlignment/)

Возвращает [горизонтальное выравнивание](ElementHorizontalAlignment/) в родительском элементе.

## [`setHorizontalAlignment()`](Element.setHorizontalAlignment/)

Устанавливает [горизонтальное выравнивание](ElementHorizontalAlignment/) в родительском элементе.

## [`getVerticalAlignment()`](Element.getVerticalAlignment/)

Возвращает [вертикальное выравнивание](ElementVerticalAlignment/) в родительском элементе.

## [`setVerticalAlignment()`](Element.setVerticalAlignment/)

Устанавливает [вертикальное выравнивание](ElementVerticalAlignment/) в родительском элементе.

## [`getTextHorizontalAlignment()`](Element.getTextHorizontalAlignment/)

Возвращает [горизонтальное выравнивание текста](TextHorizontalAlignment/) в элементе.

## [`setTextHorizontalAlignment()`](Element.setTextHorizontalAlignment/)

Устанавливает [горизонтальное выравнивание текста](TextHorizontalAlignment/) в элементе.

## [`getTextVerticalAlignment()`](Element.getTextVerticalAlignment/)

Возвращает [вертикальное выравнивание текста](TextVerticalAlignment/) в элементе.

## [`setTextVerticalAlignment()`](Element.setTextVerticalAlignment/)

Устанавливает [вертикальное выравнивание текста](TextVerticalAlignment/) в элементе.

## [`getTextStyle()`](Element.getTextStyle/)

Возвращает [стиль текста](../Style/TextStyle/) элемента.

## [`setTextStyle()`](Element.setTextStyle/)

Устанавливает [стиль текста](../Style/TextStyle/) элемента.

## [`getForeground()`](Element.getForeground/)

Возвращает [цвет](../Style/ColorStyle/) текста элемента.

## [`setForeground()`](Element.setForeground/)

Устанавливает [цвет](../Style/ColorStyle/) текста элемента.

## [`getBackground()`](Element.getBackground/)

Возвращает [цвет](../Style/ColorStyle/) фона элемента.

## [`setBackground()`](Element.setBackground/)

Устанавливает [цвет](../Style/ColorStyle/) фона элемента.

## [`getTexture()`](Element.getTexture/)

Возвращает текстуру элемента.

## [`setTexture()`](Element.setTexture/)

Устанавливает текстуру элемента.

## [`getChildElements()`](Element.getChildElements/)

Возвращает список дочерних [элементов]().

## [`getProperty()`](Element.getProperty/)

Возвращает значение указанного свойства элемента.

## [`setProperty()`](Element.setProperty/)

Устанавливает значение указанного свойства элемента.

# Events

## [`onLoaded`](Element.onLoaded/)

Устанавливает [обработчик события](../Script/) о том, что элемент был загружен.

## [`onGotFocus`](Element.onGotFocus/)

Устанавливает [обработчик события](../Script/) о том, что элемент получил фокус ввода.

## [`onLostFocus`](Element.onLostFocus/)

Устанавливает [обработчик события](../Script/) о том, что элемент потерял фокус ввода.

## [`onMouseDoubleClick`](Element.onMouseDoubleClick/)

Устанавливает [обработчик события](../Script/) о том, что по элементу сделали двойной клик мыши.

## [`onMouseDown`](Element.onMouseDown/)

Устанавливает [обработчик события](../Script/) о том, что на элементе нажали кнопку мыши.

## [`onMouseUp`](Element.onMouseUp/)

Устанавливает [обработчик события](../Script/) о том, что на элементе отпустили кнопку мыши.

## [`onMouseWheel`](Element.onMouseWheel/)

Устанавливает [обработчик события](../Script/) о том, что на элементе прокрутили колесо мыши.

## [`onMouseEnter`](Element.onMouseEnter/)

Устанавливает [обработчик события](../Script/) о том, что указатель мыши вошел в границы элемента.

## [`onMouseLeave`](Element.onMouseLeave/)

Устанавливает [обработчик события](../Script/) о том, что указатель мыши покинул границы элемента.

## [`onMouseMove`](Element.onMouseMove/)

Устанавливает [обработчик события](../Script/) о том, что указатель мыши двигался внутри элемента.

## [`onPropertyChanged`](Element.onPropertyChanged/)

Устанавливает [обработчик события](../Script/) о том, что одно из свойств элемента изменилось.
