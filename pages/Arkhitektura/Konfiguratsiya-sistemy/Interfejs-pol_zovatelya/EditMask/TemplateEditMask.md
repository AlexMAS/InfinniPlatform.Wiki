---
layout: default
title: "TemplateEditMask"
position: 3
categories: 
tags: 
---

Маска ввода строки по шаблону.

Маска должна записываться в формате, который использует символы, определяющие правила ввода.

   

#### Метасимволы

Каждому метасимволу соответствует определенный диапазона символов. Конечный пользователь может вводить текст только в те позиции маски, в которых определены метасимволы. В результате пользователь, находясь определенной позиции маски ввода может ввести только те символы, которые входят в диапазон, соответствующий метасимволу этой позиции ввода. Ниже перечислены все доступные метасимволы.

|Символ|Описание|
|------|--------|
|c|Необязательный ввод любого символа.|
|C|Обязательный ввод любого символа.|
| | |
|l|Необязательный ввод буквы.|
|L|Обязательный ввод буквы.|
| | |
|a|Необязательный ввод буквы или цифры.|
|A|Обязательный ввод буквы или цифры.|
| | |
|#|Необязательный ввод цифры, знака "-" или "+".|
|9|Необязательный ввод цифры.|
|0|Обязательный ввод цифры.|

   

#### Спецсимволы

Спецсимволы представляют различные разделители, символы валют и т.п. Ниже перечислены все доступные спецсимволы.

|Символ|Описание|
|------|--------|
|/|Должен заменяться на [GlobalContext](http://demo.infinnity.ru:8081/display/MC/GlobalContext).[Culture](http://demo.infinnity.ru:8081/display/MC/Culture).[DateTimeFormatInfo](http://demo.infinnity.ru:8081/display/MC/DateTimeFormatInfo).DateSeparator.|
|:|Должен заменяться на [GlobalContext](http://demo.infinnity.ru:8081/display/MC/GlobalContext).[Culture](http://demo.infinnity.ru:8081/display/MC/Culture).[DateTimeFormatInfo](http://demo.infinnity.ru:8081/display/MC/DateTimeFormatInfo).TimeSeparator.|
|%|Должен заменяться на [GlobalContext](http://demo.infinnity.ru:8081/display/MC/GlobalContext).[Culture.](http://demo.infinnity.ru:8081/display/MC/Culture)[NumberFormatInfo](http://demo.infinnity.ru:8081/display/MC/NumberFormatInfo).PercentSymbol.|
|$|Должен заменяться на [GlobalContext](http://demo.infinnity.ru:8081/display/MC/GlobalContext).[Culture.](http://demo.infinnity.ru:8081/display/MC/Culture)[NumberFormatInfo](http://demo.infinnity.ru:8081/display/MC/NumberFormatInfo).CurrencySymbol.|

   

#### Литералы

Символы, которые не являются метасимволами и спецсимволами называются литералами. Литералы вставляются автоматически, как есть, без изменения. Конечный пользователь не может заменить литерал на иной символ. Во время ввода данных курсор перепрыгивает литералы и спецсимволы. Если метасимвол или спецсимвол требуется записать, как литерал, перед ним нужно поставить символ "\".

  

Если свойство "MaskSaveLiteral" равно true, редактируемое значение будет включать не только введенные пользователем символы, но и все спецсимволы и литералы, определенные в маске. Если свойство "MaskSaveLiteral" равно false, редактируемое значение будет включать только введенные пользователем символы. Например, указана маска: "(999)000-00-00", пользователь не стал вводить первые три цифры: "(___)456-78-90". Тогда в случае, если свойство "MaskSaveLiteral" равно true, редактор сохранит значение "()456-78-90"; а в случае, если свойство "MaskSaveLiteral" равно false, редактор сохранит значение "4567890".

   

```
{
	"id": "TemplateEditMask",
	"description": "Маска ввода строки по шаблону",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/BaseEditMask"
	},
	"properties": {
		"MaskSaveLiteral": {
			"description": "Сохранять литералы в редактируемом значении",
			"type": "boolean",
			"default": true
		},
		"MaskPlaceHolder": {
			"description": "Символ заполнителя для метасимволов",
			"type": "string",
			"default": "_"
		}
	}
}
```

   

```
{
	"Mask": "(000)000-00-00"
}
```

```
{
	"Mask": "(999)000-00-00",
	"MaskSaveLiteral": false
}
```

 

 

