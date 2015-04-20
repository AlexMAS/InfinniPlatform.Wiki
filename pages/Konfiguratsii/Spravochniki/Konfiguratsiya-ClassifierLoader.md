---
layout: default
title: Конфигурация ClassifierLoader
position: 
categories: 
tags: 
---

Конфигурация позволяет загружать содержимое справочников из различных источников в хранилище справочников (в ходе загрузки данные помещаются в ClassifierStorage).

В рамках конфигурации реализована загрузка справочников из следующих источников:

* Сервис НСИ Росминздрава ([http://nsi.rosminzdrav.ru/wsdl/SOAP-server.v2.php](http://nsi.rosminzdrav.ru/wsdl/SOAP-server.v2.php))
* Справочники в формате DBF
* Справочники в формате Microsoft Excel

Зарегистрированные сервисы конфигурации:

* Сервис ApplyEvents позволяет импортировать один справочник. При запросе необходимо указывать источник данных для импорта через параметр ImportSource. Справочник будет успешно импортирован, только если в хранилище справочников нет более свежей версии справочника.    
Параметры:

|Имя параметра|Назначение|Обязательность|Пример значения|
|-------------|----------|--------------|---------------|
|ImportSource| Источник данных для импорта |Да|"Federal", "Excel" или "Dbf|
|ClassifierIds|Список уникальных идентификаторов справочников (коллекция строк)|Да (если параметру ImportSource установлено значение "Federal")|[  
 "oid_1_2_643_5_1_13_2_1_1_145",  
 "oid_1_2_643_5_1_13_2_1_1_654"]|
|Overwrite|Флаг, позволяющий перезаписать данные справочника, в том случае, если загружаемая версия справочника была импортирована ранее.|Нет (значение по умолчанию - false)|true|
|ClassifierContent|Содержимое dbf или xls файла в формате Base64String|Да (если параметру ImportSource установлено значение "Excel", "Xml" или "Dbf")| |
|ClassifierMetadata|Содержимое xml файла с метаданными справочника в формате Base64String|Да  (если параметру ImportSource установлено значение "Excel", "Xml" или "Dbf")| |
|ClassifierCodePage|Номер кодовой страницы для содержимого dbf файла. Заполнение параметра необходимодля "старых" dbf файлов из ФОМС, закодированных, например, с использованием кодовой страницы 866.|Нет (по умолчанию используется кодовая страница 1251)|866|
|RootTag|Наименование xml тега, содержащего полезные данные об одной записи справочника|Нет. По умолчанию используется тег "zap", наиболее часто встречающийся в xml справочниках Минздрава. Параметр указывается, только если ImportSource установлено значение "Xml")|"insCompany"|

  
Примечание: использование параметра Overwrite позволяет произвести повторную загрузку справочника в случае, если в ходе загрузки произошли сбой. Например, если в ходе загрузки справочника oid_1_2_643_5_1_13_2_1_1_56 версии 1.1 перестал отвечать SOAP сервис и загрузка прервалась, мы можем повторить загрузку через некоторое время. В этом случае нужно обязательно указать Overwrite  true в запросе, поскольку в противном случае загрузка производиться не будет (так как версия справочника 1.1 уже имеется).

 

Пример метаданных справочника в формате xml (метаданные передаются при импорте справочников из Excel, Xml или DBF файлов):

 <?xml version="1.0" encoding="UTF-8"?>

<classifier>  
   <properties>  
      <CodeSystem>oid_1_2_643_5_1_13_2_1_1_56</CodeSystem>  
      <CodeSystemVersion>1.0</CodeSystemVersion>  
      <CodeSystemName>Анатомо-терапевтическо-химическая классификация</CodeSystemName>  
      <CodeRef>code</CodeRef>  
      <IdRef>recid</IdRef>  
      <DisplayNameRef>name</DisplayNameRef>  
      <ParentRef>high</ParentRef>  
      <Description>Международная система классификации лекарственных средств по их основному терапевтическому применению</Description>  
   </properties>  
   <entries>   
      <entry name="recid" caption="Уникальный идентификатор" type="int" description=""/>  
      <entry name="code" caption="Код записи" type="string" description=""/>  
      <entry name="name" caption="Название лекарственного средства" type="string" description=""/>  
      <entry name="latname" caption="Латинское название лекарственного средства" type="string" description=""/>  
      <entry name="num" caption="NUM" type="string" description=""/>  
      <entry name="high" caption="УИ родительской записи" type="int" description=""/>  
   </entries>  
</classifier>

  




* Сервис Search позволяет получить список федеральных справочников, доступных на сервисе. Формат отправки запроса к сервису:

GET

http://<ServerName>:<PortName>/ClassifierLoader/StandardApi/classifiers/search/?query= {"FilterObject":null,"PageNumber":0,"PageSize":1000,"SearchType":1,"Version":null}

В качестве ответа на запрос приходит JSON массив с информацией об доступных для импорта справочниках Росминздрава (федеральные справочники). Пример возвращаемого значения:

[{  
        "Oid": "oid_1_2_643_5_1_13_2_1_1_587",  
        "Description": "",  
        "Id": "587",  
        "Name": "Государственный реестр лекарственных средств",  
        "Code": "GRL365"  
},  
{  
       "Oid": "oid_1_2_643_5_1_13_2_1_1_644",  
       "Description": "",  
       "Id": "644",  
       "Name": "Действующие вещества лекарственных препаратов",  
       "Code": "DVL105"  
}]



 

**Примеры запросов для загрузки справочников из различных источников**Загрузка из федерального сервиса Росминздрава:  
POST

[http://10.10.1.223:9999/ClassifierLoader/StandardApi/classifiers/Publish](http://10.10.1.223:9999/ClassifierLoader/StandardApi/classifiers/Publish) 

Тело запроса:

{  
   "id": null,  
   "changesObject":

          {  
               "ClassifierIds": [  
                    "oid_1_2_643_5_1_13_2_1_1_654",  
                     "oid_1_2_643_5_1_13_2_1_1_587"],  
                "ImportSource": "Federal",  
                "Overwrite": true  
          }

}

Загрузка из локального Excel файла:  
POST

[http://10.10.1.223:9999/ClassifierLoader/StandardApi/classifiers/Publish](http://10.10.1.223:9999/ClassifierLoader/StandardApi/classifiers/Publish) 

Тело запроса:

{

   "id": null,  
   "changesObject":

          {  
                "ClassifierMetadata": "PD94bWwgdmVyc2l...",  
                "ClassifierContent": "0M8R4KGxGuEAAAAA...",  
                "ImportSource": "Excel"  
          }

   ]  
}

Загрузка из локального DBF файла:  
POST

[http://10.10.1.223:9999/ClassifierLoader/StandardApi/classifiers/Publish](http://10.10.1.223:9999/ClassifierLoader/StandardApi/classifiers/Publish) 

Тело запроса:

{

   "id": null,  
   "changesObject":

          {  
                "ClassifierMetadata": "PD94bWwgdmVyc2l...",  
                "ClassifierContent": "0M8R4KGxGuEAAAAA...",  
                "ImportSource": "Dbf"  
          }

   ]  
}

  
Таким образом, при загрузке из различных источников меняется только тело запроса (URL запроса остается неизменным).

