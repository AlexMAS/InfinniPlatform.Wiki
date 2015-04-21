---
layout: default
title: Редакторы .NET-сборок
position: 
categories: 
tags: 
---

#### Описание

[Reflexil](http://reflexil.net/) - это редактор .NET-сборок, выполненный в виде плагина для [.NET Reflector](http://www.red-gate.com/products/dotnet-development/reflector/) на базе [Mono.Cecil](http://www.mono-project.com/Cecil).

Удаление строгих имен сборок лучше осуществлять с помощью другого инструмента - [[StrongNameRemover|StrongNameRemover.zip]].

Изменять свойство "Platform Target" можно только с помощью утилиты [CorFlags](http://msdn.microsoft.com/en-us/library/ms164699%28VS.80%29.aspx) (доступна из "Command Promt").

 

#### Пример

Например сборка "Lib86.dll" имеет свойство "Platform Target", равное "x86". Используя утилиту [CorFlags](http://msdn.microsoft.com/en-us/library/ms164699%28VS.80%29.aspx) можно изменить значение этого свойства на "AnyCPU":

```
CorFlags Lib86.dll /32BIT-
```

 

#### Ссылки

Официальный сайт - [http://reflexil.net/](http://reflexil.net/)

Проект на GitHub - [https://github.com/sailro/Reflexil](https://github.com/sailro/Reflexil)

Статья с описанием функционала - [Assembly Manipulation and C# / VB.NET Code Injection (Sebastien Lebreton)](http://www.codeproject.com/Articles/20565/Assembly-Manipulation-and-C-VB-NET-Code-Injection) 

Утилита CorFlags - [http://msdn.microsoft.com/en-us/library/ms164699%28VS.80%29.aspx](http://msdn.microsoft.com/en-us/library/ms164699%28VS.80%29.aspx)

 

#### Файлы

[[Reflexil (binaries)|reflexil.1.6.AIO.bin.zip]]

[[Reflexil (source)|reflexil.1.6.src.zip]]

[[StrongNameRemover|StrongNameRemover.zip]]

 

 

