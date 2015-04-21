---
layout: default
title: GridPanelRow
position: 
categories: 
tags: 
---

Описание строки сетки.

 

|Name|Description|
|----|-----------|
|AddCell(integer columnSpan): [[GridPanelCell]]|Добавляет ячейку.|
|GetCells(): array<[[GridPanelCell]]>|Возвращает список ячеек.|

  

```
{
	"id": "GridPanelRow",
	"description": "Описание строки сетки",
	"type": "object",
	"properties": {
		"Cells": {
			"description": "Список ячеек",
			"type": "array",
			"items": {
				"$ref": "http://demo.infinnity.ru:8081/display/MC/GridPanelCell"
			}
		}
	}
}
```

 

 

