---
layout: default
title: Генерация сертификатов
position: 3
categories: 
tags: 
---

Для генерации self-signed certificate можно воспользоваться утилитой makecert.exe:

    

```
makecert -r -pe -n "CN=www.yourserver.com" -b 01/01/2000 -e 01/01/2036 -eku 1.3.6.1.5.5.7.3.1 -ss my -sr localMachine -sky exchange -sp "Microsoft RSA SChannel Cryptographic Provider" -sy 12
```

 

 

