---
layout: doc
title: "ExtensionPanel.setParameters()"
position: 5
---

Устанавливает параметры, передаваемые в прикладной элемент.

# Syntax

```js
serverAction.setParameters(parameters)
```

## Parameters

|Name|Description|
|----|---------|
|parameters|Ассоциативный список параметров|

## Returns

Метод ничего не возвращает.

# Examples

```js
 var parameters = {};
_.each(parametersMetadata, function (parameterMetadata) {
    var param = builder.buildType('Parameter', parameterMetadata, {parentView: parentView});
    parameters[param.getName()] = param;
});
serverAction.setParameters(parameters);
```

# See Also

* [`getParameters`](../ExtensionPanel.getParameters/)
