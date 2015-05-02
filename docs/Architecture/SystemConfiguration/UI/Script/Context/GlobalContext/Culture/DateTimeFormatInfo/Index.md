---
layout: default
title: "DateTimeFormatInfo"
position: 
categories: 
tags: 
---

Сведения о формате представления даты и времени.

Описание настроек форматирования для даты и времени приведено в разделе [[DateTimeFormating]].

 

|Name|Description|Example|
|----|-----------|-------|
|MonthNames: array<string>|Список наименований месяцев.|* ru-RU: [ "Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь" ]
* en-US: [ "January","February","March","April","May","June","July","August","September","October","November","December" ]

|
|AbbreviatedMonthNames: array<string>|Список сокращенных наименований месяцев.|* ru-RU: [ "янв","фев","мар","апр","май","июн","июл","авг","сен","окт","ноя","дек" ]
* en-US: [ "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec" ]

|
| | | |
|DayNames: array<string>|Список наименований дней недели.|* ru-RU: [ "воскресенье","понедельник","вторник","среда","четверг","пятница","суббота" ]
* en-US: [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]

|
|AbbreviatedDayNames: array<string>|Список сокращенных наименований дней недели.|* ru-RU: [ "Вс","Пн","Вт","Ср","Чт","Пт","Сб" ]
* en-US: [ "Sun","Mon","Tue","Wed","Thu","Fri","Sat" ]

|
| | | |
|DateSeparator: string|Разделитель компонентов даты (год, месяц, день).|* ru-RU: "."
* en-US: "/"

|
|TimeSeparator: string|Разделитель компонентов времени (час, минута, секунда).|* ru-RU: ":"
* en-US: ":"

|
| | | |
|AmDesignator: string|Указатель часов до полудня (АМ — "ante meridiem").|* ru-RU: ""
* en-US: "AM"

|
|PmDesignator: string|Указатель часов после полудня (PМ — "post meridiem").|* ru-RU: ""
* en-US: "PM"

|
| | | |
|FullDateTimePattern: string|Настройки формата полного представления даты/времени.|* ru-RU: "d MMMM yyyy 'г.' H:mm:ss"
* en-US: "dddd, MMMM dd, yyyy h:mm:ss tt"

|
|ShortDatePattern: string|Настройки формата краткого представления даты.|* ru-RU: "dd.MM.yyyy"
* en-US: "M/d/yyyy"

|
|LongDatePattern: string|Настройки формата полного представления даты.|* ru-RU: "d MMMM yyyy 'г.'"
* en-US: "dddd, MMMM dd, yyyy"

|
|ShortTimePattern: string|Настройки формата краткого представления времени.|* ru-RU: "H:mm"
* en-US: "h:mm tt"

|
|LongTimePattern: string|Настройки формата полного представления времени.|* ru-RU: "H:mm:ss"
* en-US: "h:mm:ss tt"

|
|YearMonthPattern: string|Настройки формата представления год/месяц.|* ru-RU: "MMMM yyyy"
* en-US: "MMMM, yyyy"

|
|MonthDayPattern: string|Настройки формата представления месяц/день.|* ru-RU: "MMMM dd"
* en-US: "MMMM dd"

|
|SortableDateTimePattern: string|Настройки представления в формате ISO 8601.|* ru-RU: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"
* en-US: "yyyy'-'MM'-'dd'T'HH':'mm':'ss"

|
|UniversalSortableDateTimePattern: string|Настройки представления в универсальном формате.|* ru-RU: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"
* en-US: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'"

|
| | | |
|FirstDayOfWeek: [[DayOfWeek]]|Первый день недели.|* ru-RU: [[DayOfWeek]].Monday
* en-US: [[DayOfWeek]].Sunday

|

 

 

