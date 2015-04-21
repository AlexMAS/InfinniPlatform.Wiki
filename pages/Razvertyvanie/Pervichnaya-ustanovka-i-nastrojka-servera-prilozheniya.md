---
layout: default
title: Первичная установка и настройка сервера приложения
position: 
categories: 
tags: 
---



 

В начале необходимо взять последнюю версию собранной платформы с TeamCity ([http://tc.infinnity.lan/viewType.html?buildTypeId=bt3807](http://tc.infinnity.lan/viewType.html?buildTypeId=bt3807))

Создать папку InfinniPlatform и скопировать в нее полученные сборки.

# Предварительные системные требования

Перед развертыванием платформы на чистом сервере необходимо выполнить следующие действия:

## Убедиться, что машине установлен .Net Framework 4.5.

## Убедиться, что машине установлена виртуальная машина JAVA и настроена переменная среды JAVA_HOME.

## Установка elasticsearch (установочные скрипты [[Script.cmd]]   [[ElasticSearch.Install.ps1]] [[ElasticSearch.Uninstall.ps1]])

 

Если на сервере установлена старая версия ElasticSearch, необходимо её удалить, запустив скрипт ElasticSearch.Uninstall.ps1. При этом внутри скрипта в случае необходимости корректируем путь к папке с установленным ElasticSearch: $elasticPath = 'C:\Program Files\elasticsearch' .

Запуск скрипта для удаления старой версии: >Script  ElasticSearch.Uninstall.ps1

Обратите внимание, что если на сервере установлено ПО, использующее старую версию ElasticSearch, то оно не будет работать с новой версией. Соответственно, в этом случае развертывание платформы следует произвести на другом сервере.

Проверить версию можно следующим образом: выполнив из браузера запрос

[http://localhost:9200](http://localhost:9200) на машине, на которой установлен ElasticSearch.

Ответ должен содержать следующее:

```
{
	"status": 200,
	"name": "D-Man",
	"version": {
		"number": "1.1.1",
		"build_hash": "f1585f096d3f3985e73456debdc1a0745f512bbc",
		"build_timestamp": "2014-04-16T14:27:12Z",
		"build_snapshot": false,
		"lucene_version": "4.7"
	},
	"tagline": "You Know, for Search"
}
```

В возвращаемом ответе должен присутствовать номер версии number, содержащий значение "1.1.1"

* Скачать установочный архив Elasticsearch ([http://www.elasticsearch.org/downloads/1-1-1/](http://www.elasticsearch.org/downloads/1-1-1/))
* Распаковывать содержимое установочного архива в C:\Program Files\elasticsearch.
* Запустить скрипт >Script.cmd  ElasticSearch.Install.ps1      
(запускаем командник Script.cmd и в качестве входного параметра указываем имя PowerShell скрипта ElasticSearch.Install.ps1).  
Результат установки будет выведен в консоль. После успешного запуска скрипта Elasticsearch полностью готов к работе

  


Если на одной машине планируется установить несколько экземпляров ElasticSearch, необходимо обратить внимание на настройку следующих параметров:

* Перед запуском ElasticSearch.Install.ps1 в конфигурационном файле elasticsearch.yml выставляем значением transport.tcp.port и http.port отличные от тех, которые установлены для других экземпляров elasticsearch
* В файле установщика сервиса elasticsearch service.bat изменяем значение SERVICE_ID (в двух местах)
* В файле ElasticSearch.Install.ps1 указываем имя сервиса, установленное на предыдущем этапе. Имя сервиса встречается 5 раз в рамках файла.
* Далее запускаем скрипт >Script.cmd  ElasticSearch.Install.ps1    

## Установка cassandra

Для установки cassandra необходимо запустить установщик [datastax-community-64bit_2.0.9.msi](http://downloads.datastax.com/community/datastax-community-64bit_2.0.9.msi) Все настройки оставить по умолчанию и дождаться завершения.

# Установка и настройка конфигурации

 

## Предварительная настройка конфигурации

```
 <appSettings>
		<!-- InfinniPlatform.Core -->
		<add key="AppServerName" value="localhost" />
		<add key="AppServerPort" value="9900" />
		<add key="AppServerScheme" value="http"/>
		<add key="AppServerCertificate" value="490966d6df5b95b5456e7079a0bf969f43620534"/>
		<add key="AppServerProfileQuery" value="false"/>
		<add key="AssemblyVersionPath" value="Runtime\Versions"/>
		<!-- InfinniPlatform.Authentication -->
		<add key="AppServerAuthAdfsEnable" value="false"/>
		<add key="AppServerAuthAdfsServer" value="sso.infinnity.lan"/>
		<add key="AppServerAuthGoogleEnable" value="false"/>
		<add key="AppServerAuthGoogleClientId" value="788734480527-agq6r19nmhkt9eun6bhvauqv4b60l70r.apps.googleusercontent.com"/>
		<add key="AppServerAuthGoogleClientSecret" value="wHU9-lpEDuC8W1FcG4id_deX"/>
		<add key="AppServerAuthEsiaEnable" value="false"/>
		<add key="AppServerAuthEsiaServer" value="https://esiaia-test.rosminzdrav.ru"/>
		<add key="AppServerAuthEsiaClientId" value="5r6btr6t-acxz-jjor-3r8d-blu7d7u2qpvi"/>
		<add key="AppServerAuthEsiaClientSecret" value="36 50 c5 ba 44 48 26 c8 82 40 01 2c 66 23 1f b2 75 da 9f a0"/>
		<!-- InfinniPlatform.ElasticSearch -->
		<add key="ElasticSearchServerName" value="localhost" />
		<add key="ElasticSearchServerPort" value="9200" />
		<!-- InfinniPlatform.Cassandra -->
		<add key="CassandraDefaultKeyspace" value="InfinniPlatform" />
		<!-- InfinniPlatform.ServiceHost -->
		<add key="ConsoleMode" value="true" />
		<add key="ApplicationServiceName" value="InfinniPlatform" />
		<add key="ApplicationServiceDescription" value="InfinniPlatform Services" />
		<!-- InfinniConfiguration.* -->
		<add key="HelpPath" value="C:\Projects\Infinnity\InfinniPlatform\Demos\DMD\Assemblies\Help" />
		<add key="ConfigurationPath" value="TestData\Configurations" />
		<add key="AppServerCallback" value="demo.infinnity.ru" />
		<add key="AppPortCallback" value="8500" />
		<add key="RepositoryServiceAddress" value="http://ips-test.rosminzdrav.ru:8080/52f0d9db3c8c0" />
		<!--<add key="RepositoryServiceAddress" value="http://ips.rosminzdrav.ru/52f3408e550d7" />-->
		<add key="RegisterServiceAddress" value="http://ips-test.rosminzdrav.ru:8080/52f0d98990786" />
		<!--<add key="RegisterServiceAddress" value="http://ips.rosminzdrav.ru/52f3404010635" />-->
		<add key="PatientServiceAddress" value="https://ips-test.rosminzdrav.ru:444/52d76ffc06419" />
		<!--<add key="PatientServiceAddress" value="http://ips.rosminzdrav.ru/52dd1bfaca6c5/" />-->
		<add key="FederalIntegrationCertificateSerialNumber" value="01 cf 2c 6a b0 cd da 30 00 00 00 01 05 b8 03 8d"/>
		<add key="UseIEMKIndexing" value="true" />
		<add key="OrganizationOid" value="1.2.643.5.1.13.3.25.74.109" />
		<add key="ConfigurationList" value="InfinniPlatform.Update,InfinniPlatform.RestfulApi,InfinniPlatform.SystemConfig,InfinniPlatform.Metadata" />
		<add key="OrganizationName" value="Государственное бюджетное учреждение здравоохранения &quot;Челябинский областной медицинский информационно-аналитический центр &quot;" />
		<add key="ClientEntityId" value="658f7fff-3137-4441-b1bb-235a8e239bff" />
		<add key="HmaoServiceUrl" value="http://178.46.188.13:7003/NSIService/Nsi?WSDL" />
		<add key="RosminzdravUserId" value="c641c15e411af67d02c091467f3733b0" />
		<add key="RosminzdravServiceUrl" value="http://nsi.rosminzdrav.ru/wsdl/SOAP-server.v2.php" />
	</appSettings>
```

|Параметр|Значение|Описание|
|--------|--------|--------|
|AppServerName|localhost|Сервер, на котором выполняем развертывание. Значение по умолчанию - localhost, изменять не нужно.|
|AppPort|9900|Порт, на котором будет запущен сервер платформы.По умолчанию значение 9900, может быть изменено на любое необходимое другое, в зависимости от настроек машины, на которой выполняем развертывание.|
|AppServerScheme|http|Протокол работы с системой. Может иметь два возможных значения - http и https. По умолчанию значение http. В данный момент рекомендуется использовать http.|
|AppServerCertificate|490966d6df5b95b5456e7079a0bf969f43620534|Сертфикат сервера, значение по умолчанию изменять не следует.|
|AppServerProfileQuery|false|Включить профилирование операций сервера. По умолчанию выключено.|
|AssemblyVersionPath|Runtime\Versions|Путь для загрузки сборок. Менять не нужно.|
|LogConfigFile|Log.config|Наименование файла лога сервера|
|AppServerAuthAdfsEnable|false|Разрешение аутентификации с использованием adfs|
|AppServerAuthAdfsServer|sso.infinnity.lan|Адрес сервера аутентификации с использованием сервисов adfs|
|AppServerAuthGoogleEnable|false|Разрешение аутентификации с использованием сервисов Google|
|AppServerAuthGoogleClientId|788734480527-agq6r19nmhkt9eun6bhvauqv  
4b60l70r.apps.googleusercontent.com|Идентификатор клиента для обращения к сервисам аутентификации Google|
|AppServerAuthGoogleClientSecret|wHU9-lpEDuC8W1FcG4id_deX|Секретный ключ для доступа к сервисам аутентификации Google|
|CassandraDefaultKeyspace|InfinniPlatform|Настройка умолчательного пространства ключей Cassandra. Изменять дефолтное значение не нужно.|
|ElasticSearchServerName|localhost|Адрес сервера ElasticSearch. Если сервер приложения установлен на той же машине, что и ElasticSearch, то изменять не нужно. В противном случае необходимо указать IP сервера с установленным ElasticSearch.|
|ElasticSearchServerPort|9200|Порт сервера ElasticSearch.|
|ConsoleMode|true|Режим запуска сервера. Сервер может работать в двух режимах: режим консольного приложения и режим Windows-службы.При развертывании с целью временного тестирования сервер может быть развернут в режиме консольного приложения. В этом случае флаг ConsoleMode = true.Для полноценного развертывания в режиме Windows-службы (на проде) необходимо установить флаг ConsoleMode = false.|
|ConfigurationList|InfinniPlatform.Update,  
InfinniPlatform.RestfulApi,  
InfinniPlatform.SystemConfig,  
InfinniPlatform.Metadata|Список системных конфигураций, загружаемых при старте платформы. Изменять не нужно.|
|UseIEMKIndexing|false|Выполнять индексацию контента с использованием конвертера данных OpenEHR. Для ХМАО значение true, для остальных - false.|
|AppServerCallback|demo.infinnity.ru|Адрес сервера callback для интеграции с федеральными сервисами.|
|AppPortCallback|8800|Порт сервера callback для интеграции с федеральными сервисами.|
|ApplicationServiceName|InfinniPlatform|Наименование службы Windows в качестве которой будет установлен сервис платформы|
|ApplicationServiceDescription|InfinniPlatform Services|Описание службы Windows для сервисов платформы|

Остальные параметры, указанные в конфигурационном файле, принадлежат прикладным конфигурациям и в данный момент при развертывании не редактируются

Настройки логирования можно сделать  в файле Log.config. По умолчанию логируются только ошибки в файл ..\Logs\log.txt. 

## Запуск платформы

После распаковки архива идем в результирующую папку и выполняем следующую команду:

InfinniPlatform.ServiceHost.exe installВ результате должен установиться сервис платформы с именем ApplicationServiceName, указанным в InfinniPlatform.ServiceHost.exe.config

Далее необходимо осуществить запуск данной службы.

 

