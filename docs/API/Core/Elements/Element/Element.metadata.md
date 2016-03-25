---
layout: doc
title: "Element.metadata"
position: 0
---

Метаданные типа [`Element`](../).

# Schema

|Name|Type|Default|Description|
|----|----|:--:|-----------|
|Name|`String`| null |Имя элемента (строка). Желательно делать его уникальным внутри представления.|
|Text|`String`| '' |Текст элемента. В разных потомках Element, поле text используется по разному. Например, во View это заголовок представления, а в ImageBox это текст кнопки, инициирующей выбор загружаемого изображения.|
|Focusable|`Boolean`| true |Значение, определяющее, может ли элемент получить фокус.|
|Enabled|`Boolean`| true |Значение, определяющее, значение, возможен ли доступ к элементу.|
|Visible|`Boolean`| true |Значение, определяющее видимость элемента.|
|HorizontalAlignment|[`HorizontalAlignment`](../TextHorizontalAlignment)| 'Justify' |Горизонтальное выравнивание элемента.|
|TextHorizontalAlignment|[`HorizontalAlignment`](../TextHorizontalAlignment)| 'Left' |Горизонтальное выравнивание внутри элемента.|
|TextStyle|`String`| '' |Имя кастомного стиля (на деле это одноименный класс, стили которого можно задать самому в подключаемых на страницу стилях)|
|Foreground|[`Color`](/docs/Specifications/UserInterface/KeyConcepts/Style/ColorStyle/)| '' |Цвет текста.|
|Background|[`Color`](/docs/Specifications/UserInterface/KeyConcepts/Style/ColorStyle/)| '' |Цвет Фона.|
|ToolTip|`String`, [`Element`](..)| null |Всплывающая над элементом подсказка.|
|Tag|*| null |Произвольное значение, которое можно привязать к элементу.|
|OnLoaded|[`Script`](../../../Script/)| null |Устанавливает обработчик готовности элемента.|
|onGotFocus|[`Script`](../../../Script/)| null |Устанавливает обработчик получения фокуса элементом.|
|OnLostFocus|[`Script`](../../../Script/)| null |Устанавливает обработчик потери фокуса у элемента.|
|OnClick|[`Script`](../../../Script/)| null |Устанавливает обработчик клика мышью по элементу.|
|OnMouseDoubleClick|[`Script`](../../../Script/)| null |Устанавливает обработчик двойного клика мышью по элементу.|
|OnMouseDown|[`Script`](../../../Script/)| null |Устанавливает обработчик нажатия кнопки мыши над элементом (обычный клик срабатывает после отпускания кнопки мыши).|
|OnMouseUp|[`Script`](../../../Script/)| null |Устанавливает обработчик поднятия кнопки мыши над элементом (обычный клик срабатывает позже).|
|OnMouseWheel|[`Script`](../../../Script/)| null |Устанавливает обработчик прокрутки скролла над элементом.|
|OnMouseEnter|[`Script`](../../../Script/)| null |Устанавливает обработчик появления курсора над элементом.|
|OnMouseEnter|[`Script`](../../../Script/)| null |Устанавливает обработчик выхода курсора из области элемента.|
|OnMouseMove|[`Script`](../../../Script/)| null |Устанавливает обработчик движения курсора в области элемента.|
|OnKeyDown|[`Script`](../../../Script/)| null |Устанавливает обработчик нажатия клавиши клавиатуры, в момент когда фокус находится на текущем элементе.|
|OnKeyUp|[`Script`](../../../Script/)| null |Устанавливает обработчик поднятия клавиши клавиатуры, в момент когда фокус находится на текущем элементе.|
|OnPropertyChanged|[`Script`](../../../Script/)| null |Устанавливает обработчик изменения одного из свойств элемента (value, visible и др.).|

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
