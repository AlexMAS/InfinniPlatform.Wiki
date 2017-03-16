---
layout: doc
title: "Localizations.strings"
position: 5
---

Объект, содержащий текст для различных локалей.

При необходимости добавить свой локализированный текст нужно текущий объект с локализированными текстами расширить объектом custom и в метаданных указать ссылки на значения. Так же есть возможность переопределить локлизированный текст по умолчанию для любого элемента.

Для полноценной локализации приложения необходимо весь текст задавать через js-выражения ссылаясь на локализированный текст.

# Локализированный текст по умолчанию

```js
InfinniUI.localizations['ru-RU'].strings = {
    ImageBox: {
        chooseImage: 'Выбрать изображение',
        imageSizeTooBig: 'Размер выбранного файла {chosen-size}Мб больше допустимого размера {permitted-size}Мб',
        incorrectFormat: 'Загрузка данного типа файла не разрешена'
    },
    FileBox: {
        noFile: 'Файл не выбран...',
        fileSizeTooBig: 'Размер выбранного файла {chosen-size}Мб больше допустимого размера {permitted-size}Мб',
        incorrectFormat: 'Загрузка данного типа файла не разрешена'
    },
    DateTimePicker: {
        time: 'Время',
        clear: 'Очистить',
        today: 'Сегодня',
        date: 'Дата'
    },
    DeleteAction: {
        "warnMessage": "Вы уверены, что хотите удалить?",
        "warnMessageNoItem": "Вы не выбрали элемент который необходимо удалить",
        "agree": "Да",
        "disagree": "Нет",
        "cancel": "Закрыть"
    }
};

InfinniUI.localizations['en-US'].strings = {
    ImageBox: {
        chooseImage: 'Choose photo',
        imageSizeTooBig: 'Size of the chosen file {chosen-size}MB is more than allowed {permitted-size}MB',
        incorrectFormat: 'Uploading of this file type is forbidden'
    },
    FileBox: {
        noFile: 'Choose file...',
        fileSizeTooBig: 'Size of the chosen file {chosen-size}MB is more than allowed {permitted-size}MB',
        incorrectFormat: 'Uploading of this file type is forbidden'
    },
    DateTimePicker: {
        time: 'Time',
        clear: 'Clear',
        today: 'Today',
        date: 'Date'
    },
    DeleteAction: {
        "warnMessage": "Are you sure to remove item?",
        "warnMessageNoItem": "Choose item that you want to remove",
        "agree": "Yes",
        "disagree": "No",
        "cancel": "Close"
    }
};
```

# Example

```js

// Расширение текущих локалей кастомными значениями для элементов button и anotherButton
InfinniUI.localizations['ru-RU'].strings.custom = {
  button: {
    name: "Текст для кнопки",
    tooltip: "Тултип"
  },
  anotherButton: {
    name: "Другой текст для кнопки"
  }
};

InfinniUI.localizations['en-US'].strings.custom = {
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
      "Name": "button",
      "Text": "{= InfinniUI.localized.strings.custom.button.name }" // Text for button
      "Tooltip": "{= InfinniUI.localized.strings.custom.button.tooltip }" // Tooltip
    }
  },
  {
    "Button": {
      "Name": "anotherButton",
      "Text": "{= InfinniUI.localized.strings.custom.anotherButton.name }" // Another text for button
    }
  }
];

// Переопределение значений по умолчанию для ImageBox
InfinniUI.localizations['ru-RU'].strings.ImageBox = {
  chooseImage: 'Выбрать новое изображение',
  imageSizeTooBig: 'Размер выбранного Вами файла {chosen-size}Мб больше допустимого размера {permitted-size}Мб',
  incorrectFormat: 'Загрузка данного типа файла в данный момент не возможна'
};

```
