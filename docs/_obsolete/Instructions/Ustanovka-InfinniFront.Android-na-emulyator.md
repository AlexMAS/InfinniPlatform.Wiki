---
layout: doc
title: "Установка InfinniFront.Android на эмулятор"
position: 
categories: 
tags: 
---

Установить Java7 (jre или jdk)  [http://www.java.com/ru/](http://www.java.com/ru/)Загрузить android sdk [https://developer.android.com/sdk/index.html](https://developer.android.com/sdk/index.html)Распаковать архив и запустить  SDK Manager.exe, в разделе Android 4.4 выбрать SDK platform и ARM EABI v7a system image, нажать кнопку "install 2 packages"В SDK Manager-e в верхней панели выбрать Tools->Manage AVD's. нажать new, ввести имя устройства, в разделе Device желательно выбрать 10.1 WXGA (Tablet) (1280 x 800: mdpi), Target -> Android 4.4 нажать Ok.В списке устройств выбрать созданный эмулятор и нажать Start.В командной строке ввести  *путь до android sdk*\sdk\platform-tools\adb install *путь до apk файла*Запустить приложение из эмулятора.  
 

