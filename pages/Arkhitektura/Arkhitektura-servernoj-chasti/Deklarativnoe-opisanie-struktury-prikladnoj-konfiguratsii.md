---
layout: default
title: "Декларативное описание структуры прикладной конфигурации"
position: 
categories: 
tags: 
---

На данный момент в платформе существует 2 возможных пути декларирования прикладных конфигураций

Декларирование конфигурации в виде JSON-файла, анализируемого сервером платформы при старте сервера платформы.Декларирование конфигурации в коде класса C#, название которого заканчивается на *Installer. На данный момент основным и строго рекомендуемым способом создания прикладной конфигурации является способ 1, поскольку позволяет быстрое и легкое изменение конфигурации через редактирование файла определенной структуры JSON.

Способ 2 используется только для декларации системных конфигураций, к редактированию которых запрещен доступ end-users платформы. Такие установщики конфигураций могут редактироваться и настраиваться в коде C# только разработчиками InfinniPlatform, поскольку данные конфигурации реализуют общий и доступный всем пользователям платформы функционал.

Поскольку JSON-конфигурация удобна для редактирования, частично уже реализован прототип дизайнера платформы. Планируется, что дизайнер конфигурации в самое ближайшее время (ближайший месяц) будет позволять редактирование следующих аспектов конфигурации:

* Список меню конфигурации
* Список моделей (документов) конфигурации
* Список представлений конфигурации
* Список сценариев (прикладных скриптов) конфигурации
* Список бизнес-процессов конфигурации
* Список сервисов конфигурации

На текущий момент прототип дизайнера прикладной конфигурации позволяет редактировать 

* Список сценариев (прикладных скриптов) конфигурации
* Список бизнес-процессов конфигурации
* Список сервисов конфигурации

Ниже приведен пример одной из существующих конфигураций в виде JSON (конфигурация [["Интегрированная Электронная Медицинская Карта"|MultiCare: Public]])

```
{
 "Id": "10a466dc-060a-42ce-b5a8-23fd1da70d09",
 "TimeStamp": "2014-04-04T17:15:05.9020162+06:00",
 "Values": {
  "Documents": [
   {
    "Id": "53317eae-8c25-4647-b8b7-aa1e05ea79cb",
    "Name": "Patient",
    "Caption": "Patient",
    "Description": "Пациент"
   },
   {
    "Id": "c020edd8-a402-4ec8-917c-ffd2674d43bf",
    "Name": "MedicalWorker",
    "Caption": "MedicalWorker",
    "Description": "Медработник"
   },
   {
    "Id": "aead8dd6-7663-43b3-9265-3bb3f7e1b012",
    "Name": "Organization",
    "Caption": "Организация",
    "Description": "Организация"
   },
   {
    "Id": "dfe3d4e6-7111-4f43-abcd-98a4ff816f72",
    "Name": "Document",
    "Caption": "Документ",
    "Description": "Документ"
   },
   {
    "Id": "9a8bf681-e277-41eb-924c-f5943dbbe6b2",
    "Name": "DocumentContent",
    "Caption": "Контент документов",
    "Description": "Контент документов"
   },
   {
    "Id": "8b59aeba-75eb-4c7f-a811-e27983503479",
    "Name": "DocumentAttachment",
    "Caption": "Аттачменты документа",
    "Description": "Аттачменты документа"
   },
   {
    "Id": "2d415fd8-288a-4a53-8ebf-57dfa7e6edc2",
    "Name": "System",
    "Caption": "Настройки системы",
    "Description": "Настройки системы"
   }
  ],
  "Classifiers": [],
  "ComplexTypes": [],
  "Processes": [],
  "Scenarios": [],
  "Exchanges": [],
  "Menu": [],
  "Views": [],
  "Reports": [],
  "Assemblies": [
   {
    "AssemblyName": "InfinniConfiguration.Integration"
   }
  ],
  "Id": "10a466dc-060a-42ce-b5a8-23fd1da70d09",
  "Name": "Integration",
  "Caption": "Конфигурация ИЭМК",
  "Description": "Конфигурация ИЭМК",
  "Version": "version_systemconfig",
  "Status": "Published",
  "TimeStamp": "2014-04-04T11:15:05.5544338Z"
 }
}
```

Структура метаданных, указанных в примере, соответствует структуре, описанной в разделе [["Структура метаданных конфигурации"|Метаданные конфигурации]].

Для каждой модели из раздела Documents также существует дополнительное более подробное описание в отдельном индексе метаданных. Пример см. ниже

```
{
 "Id": "53317eae-8c25-4647-b8b7-aa1e05ea79cb",
 "TimeStamp": "2014-04-08T10:38:20.0756978+06:00",
 "Values": {
  "Id": "53317eae-8c25-4647-b8b7-aa1e05ea79cb",
  "Name": "Patient",
  "Caption": "Patient",
  "Description": "Пациент",
  "Versioning": 2,
  "Services": [
   {
    "Id": "2269ec48-36b0-4f8d-aa5c-070f9be208d3",
    "Name": "Publish",
    "Type": {
     "Name": "applyevents",
     "WorkflowExtensionPoints": [
      {
       "Name": "FilterEvents",
       "ContextType": 4,
       "Caption": "Document filter events context"
      },
      {
       "Name": "Move",
       "ContextType": 2,
       "Caption": "Document move context"
      },
      {
       "Name": "GetResult",
       "ContextType": 8,
       "Caption": "Document move result context"
      }
     ]
    },
    "Caption": "Публикация пациента",
    "ExtensionPoints": [
     {
      "TypeName": {
       "Name": "FilterEvents",
       "ContextType": 4,
       "Caption": "Document filter events context"
      },
      "ScenarioId": "publishfilterevents"
     },
     {
      "TypeName": {
       "Name": "Move",
       "ContextType": 2,
       "Caption": "Document move context"
      },
      "ScenarioId": "Publish"
     },
     {
      "TypeName": {
       "Name": "GetResult",
       "ContextType": 8,
       "Caption": "Document move result context"
      },
      "ScenarioId": "PublishResult"
     }
    ]
   },
   {
    "Id": "db149335-a013-48a3-9dcc-afabcade1fc4",
    "Name": "Search",
    "Type": {
     "Name": "search",
     "WorkflowExtensionPoints": [
      {
       "Name": "ValidateFilter",
       "ContextType": 16,
       "Caption": "Document search context"
      },
      {
       "Name": "SearchModel",
       "ContextType": 16,
       "Caption": "Document search context"
      }
     ]
    },
    "Caption": "Поиск пациента",
    "ExtensionPoints": [
     {
      "TypeName": {
       "Name": "ValidateFilter",
       "ContextType": 16,
       "Caption": "Document search context"
      },
      "ScenarioId": "ValidateFilter"
     },
     {
      "TypeName": {
       "Name": "SearchModel",
       "ContextType": 16,
       "Caption": "Document search context"
      },
      "ScenarioId": "SearchModel"
     }
    ]
   },
   {
    "Id": "6001fca5-dbac-43c8-b28a-c515871e49a8",
    "Name": "savepatient",
    "Type": {
     "Name": "applyevents",
     "WorkflowExtensionPoints": [
      {
       "Name": "FilterEvents",
       "ContextType": 4,
       "Caption": "Document filter events context"
      },
      {
       "Name": "Move",
       "ContextType": 2,
       "Caption": "Document move context"
      },
      {
       "Name": "GetResult",
       "ContextType": 8,
       "Caption": "Document move result context"
      }
     ]
    },
    "Caption": "сохранение",
    "ExtensionPoints": [
     {
      "TypeName": {
       "Name": "Move",
       "ContextType": 2,
       "Caption": "Document move context"
      },
      "ScenarioId": "Publish"
     }
    ]
   }
  ],
  "Processes": [
   {
    "Id": "50f44e13-b356-4cc5-9041-97d6ca47590f",
    "Name": "Publish",
    "Caption": "Публикация пациента",
    "Type": 1,
    "Transitions": [
     {
      "Id": "2b86522a-6632-484b-adfa-f6b4d4b1166b",
      "Name": "Temporary-Saved",
      "StateFrom": "Temporary",
      "StateTo": "Saved",
      "ValidationPoint": {
       "TypeName": "Validation",
       "ScenarioId": "PatientSave"
      },
      "FailPoint": {
       "TypeName": "OnFail",
       "ScenarioId": "SaveVersion"
      }
     },
     {
      "Id": "9770ac35-f2e3-4238-8bed-6bfc8e40b8d4",
      "Name": "Saved-Published",
      "StateFrom": "Saved",
      "StateTo": "Published",
      "ActionPoint": {
       "TypeName": "Action",
       "ScenarioId": "SaveUniqueNumber"
      },
      "SuccessPoint": {
       "TypeName": "OnSuccess",
       "ScenarioId": "SaveVersion"
      }
     },
     {
      "Id": "9666c95b-350e-411f-a78a-1bd07bb8196b",
      "Name": "Published-Saved",
      "StateFrom": "Published",
      "StateTo": "Saved",
      "ValidationPoint": {
       "TypeName": "Validation",
       "ScenarioId": "PatientSave"
      },
      "FailPoint": {
       "TypeName": "OnFail",
       "ScenarioId": "SaveVersion"
      }
     },
     {
      "Id": "9473543d-47d5-43f7-918b-5a1749d13e18",
      "Name": "Published-Published",
      "StateFrom": "Published",
      "StateTo": "Published",
      "ActionPoint": {
       "TypeName": "Action",
       "ScenarioId": "SaveUniqueNumber"
      },
      "SuccessPoint": {
       "TypeName": "OnSuccess",
       "ScenarioId": "SaveVersion"
      }
     }
    ]
   },
   {
    "Id": "3c211850-3454-4313-b6fb-09fa087541a6",
    "Name": "ValidateFilter",
    "Caption": "Валидация фильтра пациентов",
    "Type": 2,
    "Transitions": [
     {
      "Id": "b8e6cc30-bf8b-456d-8ad7-c9a98c3dc9cf",
      "Name": "Validate",
      "ValidationPoint": {
       "TypeName": "Validation",
       "ScenarioId": "PatientSearch"
      }
     }
    ]
   },
   {
    "Id": "27c5dc3b-c704-40fc-b60c-7cccc14d8abe",
    "Name": "SearchModel",
    "Caption": "Поиск пациента",
    "Type": 2,
    "Transitions": [
     {
      "Id": "38a27c7c-147d-43e5-ae81-6f38316b5e74",
      "Name": "search",
      "ActionPoint": {
       "TypeName": "Action",
       "ScenarioId": "PersonSearchResult"
      }
     }
    ]
   },
   {
    "Id": "5061c7c0-c370-4f88-ba43-88f182ca9335",
    "Name": "publishfilterevents",
    "Caption": "Фильтрация событий публикации пациента",
    "Type": 2,
    "Transitions": [
     {
      "Id": "c6c395e5-27e2-43ed-aafe-c6c0d4cffdb6",
      "Name": "filter",
      "ValidationPoint": {
       "TypeName": "Validation",
       "ScenarioId": "ValidationUnitSecurityToken"
      },
      "ActionPoint": {
       "TypeName": "Action",
       "ScenarioId": "PersonFilterEvents"
      }
     }
    ]
   },
   {
    "Id": "15cb44eb-d9ab-460b-bc8e-d90838779e7d",
    "Name": "publishfederal",
    "Caption": "Публикация пациента в федеральной иэмк",
    "Type": 2,
    "Transitions": [
     {
      "Id": "cca84e9b-79c8-47dc-9b7a-97b42edcfc78",
      "Name": "publishfederal",
      "ActionPoint": {
       "TypeName": "Action",
       "ScenarioId": "PublishFederal"
      }
     }
    ]
   },
   {
    "Id": "783c45f7-a9da-4a99-b4b6-13881549994b",
    "Name": "PublishResult",
    "Caption": "Возврат результата публикации пациента",
    "Type": 2,
    "Transitions": [
     {
      "Id": "ec752ace-82f9-4ef6-a581-929e2687cbb0",
      "Name": "standard",
      "ActionPoint": {
       "TypeName": "Action",
       "ScenarioId": "ActionUnitPublishResultStandard"
      }
     }
    ]
   },
   {
    "Id": "6c57956f-d03f-4c22-8fcb-f5a08fdc6639",
    "Name": "cfgghdfghdfg",
    "Caption": "gjhedtuy2346",
    "Type": 1
   }
  ],
  "Scenarios": [
   {
    "Id": "PatientSearch",
    "Name": "ValidationUnitPatientSearch",
    "Caption": "ValidationUnitPatientSearch",
    "Description": "",
    "ContextType": 16,
    "ScriptUnitType": 2
   },
   {
    "Id": "PatientSave",
    "Name": "ValidationUnitPatientSave",
    "Caption": "ValidationUnitPatientSave",
    "Description": "Валидатор сохранения пациента",
    "ContextType": 2,
    "ScriptUnitType": 2
   },
   {
    "Id": "SaveVersion",
    "Name": "ActionUnitSaveVersion",
    "Caption": "ActionUnitSaveVersion",
    "Description": "Сохранение версии пациента",
    "ContextType": 2,
    "ScriptUnitType": 1
   },
   {
    "Id": "SaveUniqueNumber",
    "Name": "ActionUnitSavePersonUniqueNumber",
    "Caption": "ActionUnitSavePersonUniqueNumber",
    "Description": "Формирование СНИЛС для персоны",
    "ContextType": 2,
    "ScriptUnitType": 1
   },
   {
    "Id": "PersonSearchResult",
    "Name": "ActionUnitPersonSearchModel",
    "Caption": "ActionUnitPersonSearchModel",
    "Description": "Поиск пациента",
    "ContextType": 16,
    "ScriptUnitType": 1
   },
   {
    "Id": "PersonFilterEvents",
    "Name": "ActionUnitPersonFilterEvents",
    "Caption": "ActionUnitPersonFilterEvents",
    "Description": "Фильтрация событий пациента при публикации",
    "ContextType": 4,
    "ScriptUnitType": 1
   },
   {
    "Id": "PublishFederal",
    "Name": "ActionUnitPublishPatientFederalIEMK",
    "Caption": "ActionUnitPublishPatientFederalIEMK",
    "Description": "Публикация пациента в федеральной ИЭМК",
    "ContextType": 2,
    "ScriptUnitType": 1
   },
   {
    "Id": "ValidationUnitSecurityToken",
    "Name": "ValidationUnitSecurityToken",
    "Caption": "ValidationUnitSecurityToken",
    "Description": "Валидация ключа безопасности",
    "ContextType": 4,
    "ScriptUnitType": 2
   },
   {
    "Id": "ActionUnitPublishResultStandard",
    "Name": "ActionUnitPublishResultStandard",
    "Caption": "ActionUnitPublishResultStandard",
    "Description": "Возврат результата публикации пациента",
    "ContextType": 8,
    "ScriptUnitType": 1
   },
   {
    "Id": "ActionUnitAggregationTransformResultPatient11111",
    "Name": "ActionUnitAggregationTransformResultPatient",
    "Caption": "ActionUnitAggregationTransformResultPatient",
    "Description": "sdffghsdfgsdf",
    "ContextType": 16,
    "ScriptUnitType": 1
   }
  ],
  "Version": "version_systemconfig",
  "Status": "Published",
  "TimeStamp": "2014-04-08T04:35:57.1214038Z"
 }
}
```

Указанный JSON интерпретируется платформой. На основе данного описания генерируются [[обработчики|Декларативное описание сервисов платформы]] запросов, и конфигурируются [[точки расширения бизнес-логики|Точки расширения бизнес-логики]], вызываемые в необходимый момент платформой. 

Данный JSON является полностью валидным, рабочим и реализует описание объекта метаданных "Patient" (Пациент) для конфигурации Integration (ИЭМК).

 

