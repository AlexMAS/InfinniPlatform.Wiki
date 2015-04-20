---
layout: default
title: Действие открытия представления
position: 1
categories: 
tags: 
---

Действие открытия представления (см. раздел [[OpenViewAction]]) предназначено для открытия указанного в метаданных представления. Реализация построителя для этого действия очень простая, несмотря на то, что вызывает достаточно много вопросов у разработчиков. В приведенном ниже примере показана реализация этого действия. Класс [[Command]], принимает в конструкции функцию, которая должна быть выполнена при вызове действия. В текущей реализации эта функция с помощью фабрики элементов создает и открывает соответствующее представление.

```
class OpenViewActionBuilder
{
	object Build(factory, view, metadataValue)
	{
		return new Command(function() {
			ExecuteAction(factory, view, metadataValue);
		});
	}
 
	void ExecuteAction(factory, view, metadataValue)
	{
		var linkView = factory.Build(view, metadataValue.View);
 
		if (linkView != null)
		{
			linkView.OpenView();
		}
	}
}
```

 

 

