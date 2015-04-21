---
layout: default
title: "MedicationAdministrationProcedure"
position: 2
categories: 
tags: 
---

Instances of *Medication Administration Procedure* describe the route by which the medication is to enter the body, the administration site where the medication makes its entry or contact and the method of administration to be used. 

  

```
{
    "Type": "Object",
    "Caption": "Medication Administration Procedure",
    "Description": "Medication Administration Procedure",
	"Properties": {
		"Route" : {
            "Type": "String",
            "Caption": "Route",
            "Description": "Route by which the medication is to enter the body"
		},
		"AdministrationSite" : {
			"Type": "String",
            "Caption": "Site",
            "Description": "Where the medication makes its entry or contact"
		},
		"AdministrationMethod" : {
			"Type": "String",
            "Caption": "Method",
            "Description": "Method of administration to be used"		
		}
	}		
}
```

   

```
{
	"Route" : "intravenous",
	"AdministrationSite" : "affected area",
	"AdministrationMethod" : "inject"
}
```

```
{
	"Route" : "-",
	"AdministrationSite" : "-",
	"AdministrationMethod" : "inhale"
}
```

 

 

