---
layout: default
title: Relation
position: 5
categories: 
tags: 
---

Отношение между объектами метаданных.

   

Отношение между объектами метаданных описывает функциональную связь между объектами метаданных. На данный момент существует единственный тип отношения - [[DocumentRelation]], - который описывает функциональную связь "Родитель - Потомок" между двумя документами. Эта информация может быть использована, например, при осуществлении каскадного удаления и т.п.

   

```
{
	"id": "Relation",
	"description": "Отношение между объектами метаданных",
	"type": "object",
	"properties": {
		"DocumentRelation": {
			"description": "Отношение между документами",
			"$ref": "http://demo.infinnity.ru:8081/display/MC/DocumentRelation"
		}
	}
}
```

   

#### Примеры

Отношение между документом "Patient" ("Пациент") и "ExaminationDentist" ("Осмотр стоматолога") описывает связь, когда дочерний документ ("ExaminationDentist") ссылается на родительский ("Patient") через свойство ("PatientId").

```
{
	"DocumentRelation": {
		"Parent": {
			"ConfigId": "MyConfig1",
			"DocumentId": "Patient"
		},
		"Child": {
			"ConfigId": "MyConfig1",
			"DocumentId": "ExaminationDentist",
			"Property": "PatientId.Id"
		}
	}
}
```

   

Следующий пример аналогичен вышеприведенному и описывает отношение между документом "MedicalWorker" ("Медицинский работник") и "ExaminationDentist" ("Осмотр стоматолога").

```
{
	"DocumentRelation": {
		"Parent": {
			"ConfigId": "MyConfig1",
			"DocumentId": "MedicalWorker"
		},
		"Child": {
			"ConfigId": "MyConfig1",
			"DocumentId": "ExaminationDentist",
			"Property": "MedicalWorkerId.Id"
		}
	}
}
```

   

Отношение между документом "ExaminationDentist" ("Осмотр стоматолога") и "Radiograph" ("Рентгенограмма") описывает связь, когда родительский документ ("ExaminationDentist") ссылается на дочерние ("Radiograph") через свойство ("Radiographs").

```
{
	"DocumentRelation": {
		"Parent": {
			"ConfigId": "MyConfig1",
			"DocumentId": "ExaminationDentist",
			"Property": "Radiographs.$.Id"
		},
		"Child": {
			"ConfigId": "MyConfig1",
			"DocumentId": "Radiograph"
		}
	}
}
```

 

 

