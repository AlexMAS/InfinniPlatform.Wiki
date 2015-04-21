---
layout: default
title: Импорт документов
position: 1
categories: 
tags: 
---

Импорт документов из сторонних МИС осуществляется по запросу к  сервису [http://ic:9900/RestfulApi/StandardApi/configuration/SetDocument](http://ic:9900/RestfulApi/StandardApi/configuration/SetDocument)

При импорте клинических документов осуществляется прозрачное добавление/обновление документов Пациент, Сотрудник, Мед. организация. Структура запросов на импорт документов Пациент, Сотрудник, Мед. организация аналогичен структуре запроса на импорт документа.

**Тело запроса (документ "Пациент"):**

 

```
{ "id", null },
                    {
                        "changesObject", new
                            {
                                Configuration = "Ehr",
                                Metadata = "Patient",
                                Document = {"id":null,"changesObject":{"Configuration":"Ehr","Metadata":"Patient","Document":{"LastName":"ПЕВНЕВ","FirstName":"СЕРГЕЙ","MiddleName":"ГЕРМАНОВИЧ","Sex":{"Id":"1","DisplayName":"Мужской"},"Snils":{"Value":"12345678964"},"Inn":{"Value":"000000000000"},"BirthTime":"1990-04-08T18:00:00Z","SocialStatus":{"Id":"5","DisplayName":"Неработающий"},"LPU":[{"Code":"86","DateofBinding":null,"EndofBinding":null,"Announce":null}],"ContactInformation":[],"ResidenceType":{"Id":"1","DisplayName":"Город"},"IdentityCards":[{"Type":5,"TypeTranslation":{"Id":"14","DisplayName":"Паспорт гражданина РФ"},"Series":"75 09","Number":"705981","IssueDate":"2014-10-09T18:00:00Z","Issuer":"УФМС"}],"Privilege":[]}},"replace":false}
                            }
                    },
                    { "replace", false }
```

 

Configuration – конфигурация, по умолчанию Ehr (ИЭМК)

Metadata - идентификатор документа,  может принимать одно из значений:

* Patient
* Organization
* Header
* Practitioner

Document – содержание документа

** **

**Тело ответа на запрос:**

 

```
{
  "IsValid": false,
  "ValidationMessage": {
    "ValidationWarnings": {
      "IsValid": true,
      "Message": []
    },
    "ValidationErrors": {
      "IsValid": false,
      "Message": [
        {
          "Message": "Такой пациент уже есть"
        }
      ]
    }
  }
}
```

