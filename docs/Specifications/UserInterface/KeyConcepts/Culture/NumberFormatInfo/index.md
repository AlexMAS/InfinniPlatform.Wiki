---
layout: doc
title: "NumberFormatInfo"
position: 101
---

Сведения о формате представления числовых значений. Описание настроек форматирования для числовых
значений приведено в разделе [NumberFormatting](NumberFormatting/).

# Properties

## `numberDecimalDigits`

Количество цифр в дробной части для числовых значений.

```js
// ru-RU:
2
// en-US:
2
```

## `numberDecimalSeparator`

Разделитель между целой и дробной частью для числовых значений.

```js
// ru-RU:
","
// en-US:
"."
```

## `numberGroupSize`

Количество цифр в группе для числовых значений.

```js
// ru-RU:
3
// en-US:
3
```

## `numberGroupSeparator`

Разделитель между группами для числовых значений.

```js
// ru-RU:
" "
// en-US:
","
```

## `numberNegativePattern`

Настройки формата представления отрицательных числовых значений.

```js
// ru-RU:
"-n"
// en-US:
"-n"
```

## `numberPositivePattern`

Настройки формата представления положительных числовых значений.

```js
// ru-RU:
"n"
// en-US:
"n"
```

## `percentDecimalDigits`

Количество цифр в дробной части для значений процентов.

```js
// ru-RU:
2
// en-US:
2
```

## `percentDecimalSeparator`

Разделитель между целой и дробной частью для значений процентов.

```js
// ru-RU:
","
// en-US:
"."
```

## `percentGroupSize`

Количество цифр в группе для значений процентов.

```js
// ru-RU:
3
// en-US:
3
```

## `percentGroupSeparator`

Разделитель между группами для значений процентов.

```js
// ru-RU:
" "
// en-US:
","
```

## `percentSymbol`

Обозначение знака процента.

```js
// ru-RU:
"%"
// en-US:
"%"
```

## `percentNegativePattern`

Настройки формата представления отрицательных значений процентов.

```js
// ru-RU:
"-p%"
// en-US:
"-p %"
```

## `percentPositivePattern`

Настройки формата представления положительных значений процентов.

```js
// ru-RU:
"p%"
// en-US:
"p %"
```

## `currencyDecimalDigits`

Количество цифр в дробной части для значений денежных единиц.

```js
// ru-RU:
2
// en-US:
2
```

## `currencyDecimalSeparator`

Разделитель между целой и дробной частью для значений денежных единиц.

```js
// ru-RU:
","
// en-US:
"."
```

## `currencyGroupSize`

Количество цифр в группе для значений денежных единиц.

```js
// ru-RU:
3
// en-US:
3
```

## `currencyGroupSeparator`

Разделитель между группами для значений денежных единиц.

```js
// ru-RU:
" "
// en-US:
","
```

## `currencySymbol`

Обозначение денежной единицы.

```js
// ru-RU:
"р."
// en-US:
"$"
```

## `currencyNegativePattern`

Настройки формата представления отрицательных значений денежных единиц.

```js
// ru-RU:
"-c$"
// en-US:
"($c)"
```

## `currencyPositivePattern`

Настройки формата представления положительных значений денежных единиц.

```js
// ru-RU:
"c$"
// en-US:
"$c"
```

## `negativeSign`

Обозначения знака отрицательного числа.

```js
// ru-RU:
"-"
// en-US:
"-"
```

## `positiveSign`

Обозначения знака положительного числа.

```js
// ru-RU:
"+"
// en-US:
"+"
```

## `negativeInfinitySymbol`

Обозначения минус бесконечности.

```js
// ru-RU:
"-бесконечность"
// en-US:
"-Infinity"
```

## `positiveInfinitySymbol`

Обозначения плюс бесконечности.

```js
// ru-RU:
"бесконечность"
// en-US:
"Infinity"
```

## `naNSymbol`

Обозначение IEEE NaN ("not a number").

```js
// ru-RU:
"NaN"
// en-US:
"NaN"
```

# Methods

## [`format()`](NumberFormatInfo.format/)

Осуществляет форматирование числового значения по указанному [шаблону](NumberFormatting/).
