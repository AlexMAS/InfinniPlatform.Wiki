---
layout: doc
title: "DateTimeFormatInfo"
position: 0
---

Сведения о формате представления даты и времени. Описание настроек форматирования для даты и времени
приведено в разделе [DateTimeFormating](DateTimeFormating/).

## Properties

### `monthNames`

Возвращает список наименований месяцев.

```js
// ru-RU:
[ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль",
  "Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ]
// en-US:
[ "January","February","March","April","May","June","July",
  "August","September","October","November","December" ]
```

### `abbreviatedMonthNames`

Возвращает список сокращенных наименований месяцев.

```js
// ru-RU:
[ "янв","фев","мар","апр","май","июн","июл",
  "авг","сен","окт","ноя","дек" ]
// en-US:
[ "Jan","Feb","Mar","Apr","May","Jun","Jul",
  "Aug","Sep","Oct","Nov","Dec" ]
```

### `dayNames`

Возвращает список наименований дней недели.

```js
// ru-RU:
[ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ]
// en-US:
[ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]
```

### `abbreviatedDayNames`

Возвращает список сокращенных наименований дней недели.

```js
// ru-RU:
[ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ]
// en-US:
[ "Sun","Mon","Tue","Wed","Thu","Fri","Sat" ]
```

### `dateSeparator`

Возвращает разделитель компонентов даты (год, месяц, день).

```js
// ru-RU:
"."
// en-US:
"/"
```

### `timeSeparator`

Возвращает разделитель компонентов времени (час, минута, секунда).

```js
// ru-RU:
":"
// en-US:
":"
```

### `amDesignator`

Возвращает указатель часов до полудня (АМ - "ante meridiem").

```js
// ru-RU:
""
// en-US:
"AM"
```

### `pmDesignator`

Возвращает указатель часов после полудня (PМ - "post meridiem").

```js
// ru-RU:
""
// en-US:
"PM"
```

### `fullDateTimePattern`

Возвращает настройки формата полного представления даты/времени.

```js
// ru-RU:
"d MMMM yyyy 'г.' H:mm:ss"
// en-US:
"dddd, MMMM dd, yyyy h:mm:ss tt"
```

### `shortDatePattern`

Возвращает настройки формата краткого представления даты.

```js
// ru-RU:
"dd.MM.yyyy"
// en-US:
"M/d/yyyy"
```

### `longDatePattern`

Возвращает настройки формата полного представления даты.

```js
// ru-RU:
"d MMMM yyyy 'г.'"
// en-US:
"dddd, MMMM dd, yyyy"
```

### `shortTimePattern`

Возвращает настройки формата краткого представления времени.

```js
// ru-RU:
"H:mm"
// en-US:
"h:mm tt"
```

### `longTimePattern`

Возвращает настройки формата полного представления времени.

```js
// ru-RU:
"H:mm:ss"
// en-US:
"h:mm:ss tt"
```

### `yearMonthPattern`

Возвращает настройки формата представления год/месяц.

```js
// ru-RU:
"MMMM yyyy"
// en-US:
"MMMM, yyyy"
```

### `monthDayPattern`

Возвращает настройки формата представления месяц/день.

```js
// ru-RU:
"MMMM dd"
// en-US:
"MMMM dd"
```

### `sortableDateTimePattern`

Возвращает настройки представления в формате ISO 8601.

```js
// ru-RU:
"yyyy'-'MM'-'dd'T'HH':'mm':'ss"
// en-US:
"yyyy'-'MM'-'dd'T'HH':'mm':'ss"
```

### `universalSortableDateTimePattern`

Возвращает настройки представления в универсальном формате.

```js
// ru-RU:
"yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
// en-US:
"yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
```

### `firstDayOfWeek`

Возвращает первый [день недели](DayOfWeek/).

```js
// ru-RU:
DayOfWeek.monday
// en-US:
DayOfWeek.sunday
```
