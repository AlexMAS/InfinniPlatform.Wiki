---
layout: default
title: Active Directory
position: 1
categories: 
tags: 
---

В качестве провайдера аутентификации через Active Directory используется [Active Directory Federation Services (ADFS)](http://technet.microsoft.com/en-us/windowsserver/dd448613). Грубо говоря, ADFS является [фасадом](https://en.wikipedia.org/wiki/Facade_pattern) для Active Directory (однако [обещают](http://technet.microsoft.com/en-us/library/adfs2-help-attribute-stores(v=ws.10).aspx), что для любого [LDAP](https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol)-хранилища), который предоставляет сторонним системам доступ к механизму авторизации, а также поддерживает [технологию единого входа](https://en.wikipedia.org/wiki/Single_sign-on) (single-sign-on, SSO). Ниже приведена подробная инструкция по установке и настройке ADFS.

   



 

 

