---
layout: doc
title: "Element"
position: 0
tags: [ element ]
---

Базовый тип для всех визуальных элементов InfinniUI.

# Description

Все визуальные элементы (далее просто "элементы"), представленные в InfinniUI, являются потомками Element.
В Element реализованы базовые API, которые в итоге будут предоставлять все элементы InfinniUI.

# Syntax

```js
new Element([parent], [viewMode]);
```

## Parameters

`parent`

Необязательный. Родительский [элемент]().

`viewMode`

Необязательный. Строка со значением [режима отображения](../../viewMode).

# Usage
Создать экземпляр Element нельзя, однако можно например создать экземпляр кнопки, которая наследуется от Element. Сделаем это, а так же зададим кнопке текст.

```js
//js-demo
var button = new Button();
var $button = button.render();

button.setText("ButtonText")

$elementForExample.append($button);
```

# Properties

## [`name`](Element.name/)

Содержит имя элемента. Свойство строчного типа.

# Methods

## [`getView()`](Element.getView/)

Возвращает родительское [представление](../View/).

## [`getParent()`](Element.getParent/)

Возвращает родительский [элемент]().

## [`setParent(parent)`](Element.setParent/)

Устанавливает родительский [элемент]().

## [`getChildElements()`](Element.getChildElements/)

Возвращает список дочерних [элементов]().

## [`getProperty()`](Element.getProperty/)

Возвращает значение указанного свойства элемента. Например 'text', 'visible' 'value', и др.

## [`setProperty()`](Element.setProperty/)

Устанавливает значение указанного свойства элемента.

## [`getName()`](Element.getName/)

Возвращает имя элемента.

## [`setName(name)`](Element.setName/)

Устанавливает имя элемента.

## [`getText()`](Element.getText/)

Возвращает текст элемента (в разных потомках Element, поле text используется по разному. Например, во View это
заголовок представления, а в ImageBox это текст кнопки, инициирующей выбор загружаемого изображения).

## [`setText(text)`](Element.setText/)

Устанавливает текст элемента.

## [`getFocusable()`](Element.getFocusable/)

Возвращает значение, определяющее, может ли элемент получить фокус.

## [`setFocusable(isFocusable)`](Element.setFocusable/)

Устанавливает значение, определяющее, может ли элемент получить фокус.

## [`getFocused()`](Element.getFocused/)

Возвращает значение, определяющее, установлен ли на элементе фокус.

## [`setFocused(isFocused)`](Element.setFocused/)

Устанавливает/снимает фокус с элемента (в зависимости от передаваемого значения).

## [`getEnabled()`](Element.getEnabled/)

Возвращает значение, определяющее, возможен ли доступ к элементу.

## [`setEnabled(isEnabled)`](Element.setEnabled/)

Устанавливает значение, определяющее, возможен ли доступ к элементу.

## [`getVisible()`](Element.getVisible/)

Возвращает значение, определяющее, отображается ли элемент в интерфейсе.

## [`setVisible(isVisible)`](Element.setVisible/)

Устанавливает значение, определяющее, отображается ли элемент в интерфейсе.

## [`getHorizontalAlignment()`](Element.getHorizontalAlignment/)

Возвращает [горизонтальное выравнивание](ElementHorizontalAlignment/) в родительском элементе. Возможные значения: 'left', 'right', 'center', 'stretch'.

## [`setHorizontalAlignment(horizontalAlignment)`](Element.setHorizontalAlignment/)

Устанавливает [горизонтальное выравнивание](ElementHorizontalAlignment/) в родительском элементе.

## [`getTextHorizontalAlignment()`](Element.getTextHorizontalAlignment/)

Возвращает [горизонтальное выравнивание текста](TextHorizontalAlignment/) в элементе.

## [`setTextHorizontalAlignment()`](Element.setTextHorizontalAlignment/)

Устанавливает [горизонтальное выравнивание текста](TextHorizontalAlignment/) в элементе.

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

# Events

## [`onLoaded`](Element.onLoaded/)

Устанавливает [обработчик события](../Script/) о том, что элемент был загружен. Обычно этот обработчик срабатывает при завершении

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

## [`onKeyDown`](Element.onKeyDown/)

Устанавливает [обработчик события](../Script/) о том, что на элементе нажали клавишу клавиатуры.

## [`onKeyUp`](Element.onKeyUp/)

Устанавливает [обработчик события](../Script/) о том, что на элементе отпустили клавишу клавиатуры.

## [`onPropertyChanged`](Element.onPropertyChanged/)

Устанавливает [обработчик события](../Script/) о том, что одно из свойств элемента изменилось.
