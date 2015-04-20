---
layout: default
title: Особенности сборки BackEnd-части
position: 
categories: 
tags: 
---

### Ошибки компиляции

Ошибка 1

*Cannot import the following key file: MultiCareSDK.pfx. The key file may be password protected. To correct this, try to import the certificate again or manually install the certificate to the Strong Name CSP with the following key container name: VS_KEY_4A69B2C7E3FAF525 MultiCare.SDK*

Проект подписан сертификатом, а на машине, на которой осуществляется сборка, нет соответствующего сертификата. Для установки сертификата нужно в режиме локального администратора запустить Command Promt:

*Пуск / Все программы* / *Microsoft Visual Studio 2012 / Visual Studio Tools / Command Promt*

После этого выполнить команду (значения атрибутов команды подставить из сообщения об ошибке):

*cd <Directory *InfinniPlatform.API*>*

*sn -i InfinniPlatform.API.pfx VS_KEY_4A69B2C7E3FAF525*

Если всё верно, то появиться сообщение с просьбой ввести пароль. Пароль: Infinnity.

Затем в свойствах проекта InfinniPlatform.API, вкладка Signing, снова выберите *InfinniPlatform.API.pfx. *Пароль тот же: Infinnity.

