---
layout: default
title: Transition
position: 
categories: 
tags: 
---

Переход между состояниями.

   

Переход между состояниями представляет собой описание последовательности действий, осуществляемых при выполнении операции. Как правило, переход связан с документом (см. [[Document]]).

  

```
{
	"id": "Transition",
	"description": "Переход между состояниями",
	"type": "object",
	"extends": {
		"$ref": "http://demo.infinnity.ru:8081/display/MC/ObjectMetadata"
	},
	"properties": {		
		"StateFrom": {
			"description": "Состояние начала процесса",
			"type": "string"
		},
		"StateTo": {
			"description": "Состояние завершения процесса",
			"type": "string"
		},
		"ValidationRuleWarning": {
			"description": "Применяемая валидация на предупреждение на основе задекларированных правил",
			"type": "string"
		},
		"ValidationRuleError": {			
			"description": "Применяемая проверка ошибок на основе задекларированных правил",
			"type": "string"
		}
		"ActionPoint": {
			"description": "Точка действия бизнес-процесса",
			"type": "object",
			"properties": {		
				"TypeName": {
					"description": "Имя точки (Action)",
					"type": "string"
				},
				"ScenarioId": {
					"description": "Идентификатор сценария ( см. http://demo.infinnity.ru:8081/display/MC/Scenario )",
					"type": "string"
				}
			}
		},
		"ValidationPoint": {
			"description": "Точка дополнительной валидации бизнес-процесса",
            "type": "object",
			"properties": {		
				"TypeName": {
					"description": "Имя точки (Validation)",
					"type": "string"
				},
				"ScenarioId": {
					"description": "Идентификатор сценария ( см. http://demo.infinnity.ru:8081/display/MC/Scenario )",
					"type": "string"
				}
			}
		},
		"SuccessPoint": {
			"description": "Точка действия бизнес-процесса",
            "type": "object",
			"properties": {		
				"TypeName": {
					"description": "Имя точки (OnSuccess)",
					"type": "string"
				},
				"ScenarioId": {
					"description": "Идентификатор сценария ( см. http://demo.infinnity.ru:8081/display/MC/Scenario )",
					"type": "string"
				}
			}
		},
		"RegisterPoint": {
			"description": "Точка действия бизнес-процесса для записи данных документа в регистр",
            "type": "object",
			"properties": {		
				"TypeName": {
					"description": "Имя точки (OnRegisterMove)",
					"type": "string"
				},
				"ScenarioId": {
					"description": "Идентификатор сценария ( см. http://demo.infinnity.ru:8081/display/MC/Scenario )",
					"type": "string"
				},
				"DocumentDateProperty": {
					"description": "Имя поля документа, хранящего значение даты создания документа",
					"type": "string"
				}

			}
		},
		"FailPoint": {
			"description": "Точка действия бизнес-процесса",
            "type": "object",
			"properties": {		
				"TypeName": {
					"description": "Имя точки (OnFail)",
					"type": "string"
				},
				"ScenarioId": {
					"description": "Идентификатор сценария ( см. http://demo.infinnity.ru:8081/display/MC/Scenario )",
					"type": "string"
				}
			}
		}
	 }
}
```

   

```
{
	"Id": "c765dc89-7144-4d02-b9ef-332193fdad48",
	"Name": "Temp-Saved",
	"StateFrom": "Temporary",
	"StateTo": "Saved",
	"RuleValidationWarnings" : "ValidationPatientWarning",
	"RuleValidationErrors" : "ValidationPatientErrors",
	"ValidationPoint": {
		"TypeName": "Validation",
		"ScenarioId": "PatientSave"
	},
	"FailPoint": {
		"TypeName": "OnFail",
		"ScenarioId": "SaveVersion"
	}
}
   
{
	"Id": "267923c9-7edd-4540-b397-8349ce32d611",
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
}  
```

 

 

