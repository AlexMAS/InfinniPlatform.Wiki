---
layout: doc
title: "Localizations"
position: 1008
---

Локализация (языковые и региональные настройки).

Локализация предоставляет сведения о наименовании локали, локализированный текст, а также о формате представления значений для различных типов данных. Текущая локаль устанавливается в [`InfinniUI.config`](../Config).

Объект с локализациями доступен через InfinniUI.localizations, а объект с текущей локализацией доступен через InfinniUI.localized.

# Properties

Name|Type|Description
----|----|-----------
name|`String`|[Наименование локализации](http://tools.ietf.org/html/rfc5646).
caption|`String`|Отображаемое наименование локализации.
dateTimeFormatInfo|[`DateTimeFormatInfo`](Localizations.dateTimeFormatInfo/)|Сведения о формате представления даты и времени.
numberFormatInfo|[`NumberFormatInfo`](Localizations.numberFormatInfo/)|Сведения о формате представления числовых значений.
strings|[`Strings`](Localizations.strings/)|Объект содержащий локализированный текст для различных элементов.
