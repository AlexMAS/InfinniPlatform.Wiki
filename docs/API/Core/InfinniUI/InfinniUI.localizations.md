---
layout: doc
title: "InfinniUI.localizations"
position: 1003
---

Локализация приложения. Локаль задается в [`InfinniUI.config`](../InfinniUI.config). Для полноценной локализации приложения необходимо весь текст задавать через js-выражения ссылкой на локализированный текст. При необходимости добавить свой локализированный текст нужно текущий объект с локалями расширить объектом customMessages и в метаданных указать ссылки на значения.

# Example

```js
InfinniUI.localizations['ru-RU'].strings.customMessages = {
  button: {
    name: "Текст для кнопки",
    tooltip: "Тултип"
  },
  anotherButton: {
    name: "Другой текст для кнопки"
  }
};

InfinniUI.localizations['en-US'].strings.customMessages = {
  button: {
    name: "Text for button",
    tooltip: "Tooltip"
  },
  anotherButton: {
    name: "Another text for button"
  }
};

var metadata = [
  {
    "Button": {
      "Text": "{= InfinniUI.localizations[InfinniUI.config.lang].strings.customMessages.button.name }" // Text for button
      "Tooltip": "{= InfinniUI.localizations[InfinniUI.config.lang].strings.customMessages.button.tooltip }" // Tooltip
    }
  },
  {
    "Button": {
      "Text": "{= InfinniUI.localizations[InfinniUI.config.lang].strings.customMessages.anotherButton.name }" // Another text for button
    }
  }
];
```

# See Also

* [`InfinniUI.config`](../InfinniUI.config)
