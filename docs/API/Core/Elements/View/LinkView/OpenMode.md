---
layout: doc
title: "OpenMode"
position: 0
---

Важным фактором отображения представления является режим отображения.  
В InfinniUI возможны следующие режимы отображения:  

|Name|Description|
|----|---------|
|`Default`|Представление откроется вместо корневого представления|
|`Dialog`|Представление откроется в диалоговом окне|
|`Container`|Представление откроется в указанном контейнере|

Каждому режиму отображения соответсвует некоторая стратегия (OpenModeDefaultStrategy, OpenModeDialogStrategy, OpenModeContainerStrategy).
