---
layout: default
title: Примеры серверного кода
position: 4
categories: 
tags: 
---

Ниже приведен пример серверного кода для хостинга подсистемы аутентификации.

    

Подсистема аутентификации представлена модулем хостинга [OWIN](http://owin.org/), который реализуется классом "InfinniPlatform.Authentication.Modules.AuthenticationOwinHostingModule". Внешние провайдеры аутентификации также представлены модулями OWIN и передаются в конструктор вышеуказанного класса. Таким образом, код, который осуществляет хостинг подсистемы аутентификации, может выглядеть следующим образом.

   

```
OwinHostingService hostingService;
...
hostingService.RegisterModule(new AuthenticationOwinHostingModule());
```

```
OwinHostingService hostingService;
...
hostingService.RegisterModule(new AuthenticationOwinHostingModule(new OwinHostingModule[] {
	new AuthenticationGoogleOwinHostingModule("<<clientId>>", "<<clientSecret>>"),
	new AuthenticationTwitterOwinHostingModule("<<clientId>>", "<<clientSecret>>")
}));
```

 

 

