---
layout: doc
title: "Element.metadata"
position: 0
---

Метаданные описывающие настройки [`Element`](../).

# Properties

|Name|Type|Default|Description|
|----|----|:--:|-----------|
|Name|`String`| null |Имя элемента (строка). Желательно делать его уникальным внутри представления.|
|Text|`String`(&hArr;)(&#402;)| '' |Текст элемента. В разных потомках Element, поле text используется по разному. Например, во View это заголовок представления, а в ImageBox это текст кнопки, инициирующей выбор загружаемого изображения.|
|Focusable|`Boolean`(&hArr;)| true |Значение, определяющее, может ли элемент получить фокус.|
|Enabled|`Boolean`(&hArr;)| true |Значение, определяющее, значение, возможен ли доступ к элементу.|
|Visible|`Boolean`(&hArr;)| true |Значение, определяющее видимость элемента.|
|HorizontalAlignment|[`HorizontalAlignment`](../ElementHorizontalAlignment)(&hArr;)| 'Stretch' |Горизонтальное выравнивание элемента.|
|TextHorizontalAlignment|[`TextHorizontalAlignment`](../TextHorizontalAlignment)(&hArr;)| 'Left' |Горизонтальное выравнивание внутри элемента.|
|Style|`String`(&hArr;)| '' |Имя кастомного стиля (на деле это одноименный класс, стили которого можно задать самому в подключаемых на страницу стилях)|
|TextStyle|[`TextStyle`](../../../Style/TextStyle/)(&hArr;)| '' |Стиль текста элемента|
|Foreground|[`Color`](/docs/API/Core/Style/ColorStyle/)(&hArr;)| '' |Цвет текста.|
|Background|[`Color`](/docs/API/Core/Style/ColorStyle/)(&hArr;)| '' |Цвет фона.|
|ToolTip|`String`(&#402;), [`Element`](..)| null |Всплывающая над элементом подсказка.|
|Tag|*| null |Произвольное значение, которое можно привязать к элементу.|
|OnLoaded|[`Script`](../../../Script/)| null |Устанавливает обработчик готовности элемента.|
|onGotFocus|[`Script`](../../../Script/)| null |Устанавливает обработчик получения фокуса элементом.|
|OnLostFocus|[`Script`](../../../Script/)| null |Устанавливает обработчик потери фокуса у элемента.|
|OnClick|[`Script`](../../../Script/)| null |Устанавливает обработчик клика мышью по элементу.|
|OnDoubleClick|[`Script`](../../../Script/)| null |Устанавливает обработчик двойного клика мышью по элементу.|
|OnMouseDown|[`Script`](../../../Script/)| null |Устанавливает обработчик нажатия кнопки мыши над элементом (обычный клик срабатывает после отпускания кнопки мыши).|
|OnMouseUp|[`Script`](../../../Script/)| null |Устанавливает обработчик поднятия кнопки мыши над элементом (обычный клик срабатывает позже).|
|OnMouseWheel|[`Script`](../../../Script/)| null |Устанавливает обработчик прокрутки скролла над элементом.|
|OnMouseEnter|[`Script`](../../../Script/)| null |Устанавливает обработчик появления курсора над элементом.|
|onMouseLeave|[`Script`](../../../Script/)| null |Устанавливает обработчик выхода курсора из области элемента.|
|OnMouseMove|[`Script`](../../../Script/)| null |Устанавливает обработчик движения курсора в области элемента.|
|OnKeyDown|[`Script`](../../../Script/)| null |Устанавливает обработчик нажатия клавиши клавиатуры, в момент когда фокус находится на текущем элементе.|
|OnKeyUp|[`Script`](../../../Script/)| null |Устанавливает обработчик поднятия клавиши клавиатуры, в момент когда фокус находится на текущем элементе.|
|OnPropertyChanged|[`Script`](../../../Script/)| null |Устанавливает обработчик изменения одного из свойств элемента (value, visible и др.).|

(&hArr;) Свойство может быть задано, как [`DataBinding`](../../../DataBinding/DataBinding.metadata/).

(&#402;) Свойство может быть задано, как [`JSExpression`](../../../JSExpression).

# Exampes

Создать экземпляр Element нельзя (это абстрактный класс), однако можно например создать экземпляр кнопки, которая наследуется от Element.

```js
//infinni-ui-demo
{
    "DataSources": [
    ],
    "Items": [{
            "GridPanel": {
                "Items": [
                    {
                        "Cell": {
                            "ColumnSpan": 4,
                            "Items": [
                                {
                                    //infinni-ui-display-begin
"Button": {
    "Name": "button",
    "Text": "Button",
    "OnClick": "{ alert(args.source.getName()); }"
}
                                    //infinni-ui-display-end
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}

```
