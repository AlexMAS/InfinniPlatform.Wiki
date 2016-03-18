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

|Name|Type|Description|
|----|----------|---------|
|parent|[`Element`]()|(необязательный) Родительский [элемент]()|
|viewMode|`String`|(необязательный) Строка со значением [режима отображения](../../viewMode)|

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

|Name|Type|Description|
|----|----|-----------|
|[name](Element.name/)|`String`|Содержит имя элемента|

# Methods

|Name|Description|
|----|---------|
|[getView](Element.getView/)|Возвращает родительское [представление](../View/)|
|[getParent](Element.getParent/)|Возвращает родительский [элемент]()|
|[setParent](Element.setParent/)|Устанавливает родительский [элемент]()|
|[getChildElements](Element.getChildElements/)|Возвращает список дочерних [элементов](). Речь идет о непосредственных потомках, дочерние дочерних элементов в этот список не входят. В отличии от следующих методов|
|[findAllChildrenByType](Element.findAllChildrenByType/)|Возвращает список потомков (дочерних, их дочерних и т. д.) [элементов]() с заданным типом (Button, Label и др.).|
|[findAllChildrenByName](Element.findAllChildrenByName/)|Возвращает список потомков (дочерних, их дочерних и т. д.) [элементов]() с заданным именем.|
|[addChild](Element.addChild/)|Добавляет заданный элемент в качестве дочернего|
|[removeChild](Element.removeChild/)|Удаляет заданный элемент из списка дочерних|
|[getProperty](Element.getProperty/)|Возвращает значение указанного свойства элемента. Например 'text', 'visible' 'value', и др.|
|[setProperty](Element.setProperty/)|Устанавливает значение указанного свойства элемента|
|[getName](Element.getName/)|Возвращает имя элемента|
|[setName](Element.setName/)|Устанавливает имя элемента|
|[getText](Element.getText/)|Возвращает текст элемента (в разных потомках Element, поле text используется по разному. Например, во View это заголовок представления, а в ImageBox это текст кнопки, инициирующей выбор загружаемого изображения)|
|[setText](Element.setText/)|Устанавливает текст элемента|
|[getFocusable](Element.getFocusable/)|Возвращает значение, определяющее, может ли элемент получить фокус|
|[setFocusable](Element.setFocusable/)|Устанавливает значение, определяющее, может ли элемент получить фокус|
|[getFocused](Element.getFocused/)|Возвращает значение, определяющее, установлен ли на элементе фокус|
|[setFocused](Element.setFocused/)|Устанавливает/снимает фокус с элемента (в зависимости от передаваемого значения)|
|[getTag](Element.getTag/)|Возвращает специальное значение, хранящяеся в элементе. Тег можно использовать для привязки произвольных значений к элементу|
|[setTag](Element.setTag/)|Устанавливает специальное значение. Оно может быть любого типа. Тег можно использовать для привязки произвольных значений к элементу|
|[getEnabled](Element.getEnabled/)|Возвращает значение, определяющее, возможен ли доступ к элементу|
|[setEnabled](Element.setEnabled/)|Устанавливает значение, определяющее, возможен ли доступ к элементу|
|[getVisible](Element.getVisible/)|Возвращает значение, определяющее, отображается ли элемент в интерфейсе|
|[setVisible](Element.setVisible/)|Устанавливает значение, определяющее, отображается ли элемент в интерфейсе|
|[getHorizontalAlignment](Element.getHorizontalAlignment/)|Возвращает [горизонтальное выравнивание](ElementHorizontalAlignment/) в родительском элементе|
|[setHorizontalAlignment](Element.setHorizontalAlignment/)|Устанавливает [горизонтальное выравнивание](ElementHorizontalAlignment/) в родительском элементе|
|[getTextHorizontalAlignment](Element.getTextHorizontalAlignment/)|Возвращает [горизонтальное выравнивание текста](TextHorizontalAlignment/) в элементе|
|[setTextHorizontalAlignment](Element.setTextHorizontalAlignment/)|Устанавливает [горизонтальное выравнивание текста](TextHorizontalAlignment/) в элементе|
|[getToolTip](Element.getToolTip/)|Возвращает устанавленное всплывающее сообщение элемента|
|[setToolTip](Element.setToolTip/)|Устанавливает всплывающее сообщение для элемента|
|[getValidationState](Element.getValidationState/)|Возвращает валидационный статус элемента
|[setValidationState](Element.setValidationState/)|Устанавливает заданный валидационный статус и валидационное сообщение сообщение
|[getTextStyle](Element.getTextStyle/)|Возвращает [стиль текста](/docs/Specifications/UserInterface/KeyConcepts/Style/TextStyle/) элемента
|[setTextStyle](Element.setTextStyle/)|Устанавливает [стиль текста](/docs/Specifications/UserInterface/KeyConcepts/Style/TextStyle/) элемента
|[getForeground](Element.getForeground/)|Возвращает [цвет](/docs/Specifications/UserInterface/KeyConcepts/Style/ColorStyle/) текста элемента
|[setForeground](Element.setForeground/)|Устанавливает [цвет](/docs/Specifications/UserInterface/KeyConcepts/Style/ColorStyle/) текста элемента
|[getBackground](Element.getBackground/)|Возвращает [цвет](/docs/Specifications/UserInterface/KeyConcepts/Style/ColorStyle/) фона элемента
|[setBackground](Element.setBackground/)|Устанавливает [цвет](/docs/Specifications/UserInterface/KeyConcepts/Style/ColorStyle/) фона элемента
|[getTexture](Element.getTexture/)|Возвращает текстуру элемента
|[setTexture](Element.setTexture/)|Устанавливает текстуру элемента
|[getStyle](Element.getStyle/)|Возвращает кастомный стиль элемента (на деле это класс, стили которых могут быть заданы в подключаемых на страницу стилях)|
|[setStyle](Element.setStyle/)|Устанавливает элементу кастомный стиль (на деле устанавливает ему одноименный класс, стили которых можно задать самому в подключаемых на страницу стилях). Этот способ кастомизации внешнего вида череват разными последствиями, поскольку примененные к классу css-правила могут противоречить правилам задуманным InfinniUI, в следствии чего верстка может "поехать" неожиданным образом. Следует применять эту возможность как можно реже и как можно аккуратнее|
|[render](Element.render/)|Создает DOM-представления элемента|
|[remove](Element.remove/)|Удаляет элемент и его DOM-представление|
|[isLoaded](Element.isLoaded/)|Проверяет, готов ли элемент. Возвращает соответствующее значение|


# Events

|Name|Description|
|----|---------|
|[onLoaded](Element.onLoaded/)|Устанавливает [обработчик события](../Script/) о том, что элемент был загружен. Обычно этот обработчик срабатывает при завершении|
|[onGotFocus](Element.onGotFocus/)|Устанавливает [обработчик события](../Script/) о том, что элемент получил фокус ввода|
|[onLostFocus](Element.onLostFocus/)|Устанавливает [обработчик события](../Script/) о том, что элемент потерял фокус ввода|
|[onMouseDoubleClick](Element.onMouseDoubleClick/)|Устанавливает [обработчик события](../Script/) о том, что по элементу сделали двойной клик мыши|
|[onBeforeClick](Element.onBeforeClick/)|Устанавливает [обработчик события](../Script/) клика мыши, который будет срабатывать при захвате события на элементе|
|[onClick](Element.onClick/)|Устанавливает [обработчик события](../Script/) клика мыши|
|[onMouseDown](Element.onMouseDown/)|Устанавливает [обработчик события](../Script/) о том, что на элементе произвели двойное нажатие кнопкой мыши|
|[onMouseUp](Element.onMouseUp/)|Устанавливает [обработчик события](../Script/) о том, что на элементе отпустили кнопку мыши|
|[onMouseWheel](Element.onMouseWheel/)|Устанавливает [обработчик события](../Script/) о том, что на элементе прокрутили колесо мыши|
|[onMouseEnter](Element.onMouseEnter/)|Устанавливает [обработчик события](../Script/) о том, что указатель мыши вошел в границы элемента|
|[onMouseLeave](Element.onMouseLeave/)|Устанавливает [обработчик события](../Script/) о том, что указатель мыши покинул границы элемента|
|[onMouseMove](Element.onMouseMove/)|Устанавливает [обработчик события](../Script/) о том, что указатель мыши двигался внутри элемента|
|[onKeyDown](Element.onKeyDown/)|Устанавливает [обработчик события](../Script/) о том, что на элементе нажали клавишу клавиатуры|
|[onKeyUp](Element.onKeyUp/)|Устанавливает [обработчик события](../Script/) о том, что на элементе отпустили клавишу клавиатуры|
|[onPropertyChanged](Element.onPropertyChanged/)|Устанавливает [обработчик события](../Script/) о том, что одно из свойств элемента изменилось|
