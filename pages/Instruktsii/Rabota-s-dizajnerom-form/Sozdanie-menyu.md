---
layout: default
title: Создание меню
position: 
categories: 
tags: 
---

Configurations -> Edit -> Contents -> Menu

**Вкладка ****General - **общие сведения о меню

|Название поля|Чем заполнять?|Ограничения|
|Name|Название меню|Язык: английскийУникально в рамках конфигурации|
|Caption|Заголовок, отображается в перечне конфигураций| |
|Description|Описание| |

 

**Вкладка ****Items -******элементы меню

Меню может быть иерархическим.

|Название поля|Чем заполнять?|Ограничения|
|Text|Название пункта меню.Отображается на UI|Уникально в рамках конфигурации.|
|Image|Картинка, которая будет отображаться рядом с пунктом меню| |
|Action|Действие, происходящее при нажатии на пункт меню.Пример кода для журнала:```
{
 "OpenViewAction": {
 "View": {
 "AutoView": {
 "ConfigId": "Demography",
 "DocumentId": "Patient",
 "ViewType": "ListView",
 "OpenMode": "Application"
 }
 }
 }
 }
```

 Пример кода для справочника:```
{
 "OpenViewAction": {
 "View": {
 "AutoView": {
 "ConfigId": "ClassifierStorage",
 "DocumentId": "UseStatus",
 "Parameters": {
 "ClassifierOid": "UseStatus"
 },
 "ViewType": "ListView",
 "OpenMode": "Application"
 }
 }
 }
 }
```

|Для редактирования нажать Edit Для сохранения - ******Apply -> ****Save** |

