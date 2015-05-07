---
layout: doc
title: "Создание nuget-пакета InfinniPlatform"
position: 
categories: 
tags: 
---

Для автоматического создания nuget-пакета платформы используется расширение [NuBuild](https://github.com/bspell1/NuBuild) для Visual Studio. С использованием данного расширения в InfinniPlatform solution добавлен проект InfinniPlatform.Deploy, задача которого состоит в создании nuget-пакета по файлу InfinniPlatform.nuspec. После сборки проекта InfinniPlatform.Deploy, nuget-пакет помещается в папку InfinniPlatform\Lib. 

Версию nuget-пакета необходимо задавать в файле InfinniPlatform.nuspec (тег version). Поскольку в настоящее время платформа нестабильна и обновления появляются достаточно часто, предложен механизм автоматического версионирования: значения major, minor и build берутся из файла InfinniPlatform.nuspec, значение поля revision - это количество часов с начала текущего года. Значение revision изменяется при сборке проекта InfinniPlatform.Api (для этого в проекте InfinniPlatform.Api создано Pre-build action, заключающееся в модификации файла InfinniPlatform.nuspec из проекта InfinniPlatform.Deploy).

После появления новой версии пакета платформы, обновиться на неё можно стандартным способом через менеджер пакетов (выбираем пункт меню "Manage NuGet Packages for Solution...", далее вкладка Updates -> Solution package source).

 

 

 

