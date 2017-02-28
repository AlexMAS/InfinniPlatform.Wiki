---
layout: doc
title: "JSExpression"
position: 1003
---

Синтаксис для возможности задания простых js-выражений в любых текстовых полях. Одним из применений является локализация приложения.

# Syntax

```
"{= (JS-expression) }"
```

# Example

```js
InfinniUI.localizations['ru-RU'].strings.customMessages = {
  button: {
    name: "Текст для кнопки"
  }
};

InfinniUI.localizations['en-US'].strings.customMessages = {
  button: {
    name: "Text for button"
  }
};

var metadata = [
  {
    "Button": {
      "Text": "{= InfinniUI.localizations[InfinniUI.config.lang].strings.customMessages.button.name }" // Text for button
    }
  },
  {
    "TextBox": {
      "HintText": "{= 1 + 2 }" // 3
    }
  }
];
```

# See Also

* [`InfinniUI.config`](../InfinniUI/InfinniUI.config)
* [`InfinniUI.localizations`](../InfinniUI/InfinniUI.localizations)
