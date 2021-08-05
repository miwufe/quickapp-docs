# Script

Used to define the web page data and implement the lifecycle interface.

## Syntax

Supports ES6 syntax

### Module declaration

You can import functional modules using the import function, and call the module method in the code (for details, see the file instructions of the Interface chapter).

```
import fetch from "@system.fetch"
```

You can also import all the modules at once, e.g.

```
import system from "@system"
```

Use the system.network to call the interface method in the code.

### Code reference

For JavaScript code, we recommend using "import" to import, e.g.:

```
import utils from '../Common/utils.js'
```

## Object

### Custom data

| Attribute | Type            | Description                              |
| --------- | --------------- | ---------------------------------------- |
| data      | Object/Function | The web page's data module can be converted into a json object. The attriubute name can't start with a $ or _, if it is a function, don't use reserved words such as for, if, show, tid, etc. The return results must be an object. When initializing the web page, the result obtained by return implementation of the function acts as the data value. |
| props     | Array           | Used to define the component's public attribute list (externally visible), it can be transmitted to the interior of the component via the `<tag xxxx='value'>` method. The attribute name must be in lowercase and can't start with $ or _. Don't use reserved words such as for, if, show, tid, etc. The data type of the current public attribute does not support function. |

### Public object

| Attribute       | Type    | Description                              |
| --------------- | ------- | ---------------------------------------- |
| $app            | Object  | App object                               |
| $page           | Object  | Page object                              |
| $valid          | Boolean | Whether the web page object is valid     |
| $visible `101+` | Boolean | Whether the web page is in the visible to user state |

### App object

Accessible through `$app`

| Attribute | Type   | Description                              |
| --------- | ------ | ---------------------------------------- |
| $def      | Object | Use `this.$app.$def` to get the object revealed in the `app.ux` |
| $data     | Object | Use `this.$app.$data` to get the global data declared in the `config.data` of the `manifest.json` |

### Page object

Accessible through `$page`

| Attribute     | Type   | Description                              |
| ------------- | ------ | ---------------------------------------- |
| action `101+` | String | To get it, open the action of the current web page. It is only valid when the current page is opened through the matching filter, otherwise it is undefined. See [Manifest](manifest.md) to learn more. |
| uri `101+`    | String | To get it, open the URI of the current web page. It is only valid when the current page is opened through the matching filter, otherwise it is undefined. See [Manifest](manifest.md) to learn more. |

## Method

### Data method

| Attribute | Type     | Parameters             | Description                              |
| --------- | -------- | ---------------------- | ---------------------------------------- |
| $set      | Function | key: String value: Any | Add data attribute. It must be used in the "onInit" function, otherwise the data binding in the `<template>` can't take effect: `this.$set('key',value)` `this.$vm('id').$set('key',value)` |
| $delete   | Function | key: String            | Delete data attribute, if used in the onInit function, it will cause the data binding corresponding to `<template>` to be unable to take effect: `this.$delete('key')` `this.$vm('id').$delete('key')` |

### Public methods

| Attribute                 | Type     | Parameters              | Description                              |
| ------------------------- | -------- | ----------------------- | ---------------------------------------- |
| $element                  | Function | id: String component ID | Get the DOM object of a specified ID, if there is no specified ID, then return the root component DOM object usage: `<template> <div id='xxx'></div> </template>` `this.$element('xxx')` |
| $root `101`               | Function | None                    | Get top level ViewModel                  |
| $parent `101`             | Function | None                    | Get the parent ViewModel                 |
| $child `101`              | Function | id: String component ID | Get the ViewMode usage of the specified component of a specified ID: `this.$child('xxx')` the ID obtained is the div component ViewModel of xxx |
| $vm `deprecated`          | Function | id: String component ID | Replace with the `this.$child('xxx')` above |
| $rootElement `deprecated` | Function | None                    | Replace with the `this.$element()` above |
| $forceUpdate              | Function | None                    | Force page refresh                       |

### Event methods

| Attribute     | Type     | Parameters                               | Description                              |
| ------------- | -------- | ---------------------------------------- | ---------------------------------------- |
| $on           | Function | type: String event name handler: Function event handler function | Add the event processing handler usage: `this.$on('xxxx', this.fn)`. "fn" is the function defined in `<script>` |
| $off          | Function | type: String event name handler: Function event handler function | Delete event processing handler usage: `this.$off('xxxx', this.fn)` `this.$off('xxx')` delete all processing handlers of specified event |
| $dispatch     | Function | type: String incident name               | Usage for sending an event notification to an upper-level component: `this.$dispatch('xxx')`. Under normal circumstances, it will always transmit the event upward (bubbling), if you want to stop bubbling, call `evt.stop()` in the handle function |
| $broadcast    | Function | type: String incident name               | Usage for sending an event notification to a child component: `this.$broadcast('xxx')`. Under normal circumstances, it will always transmit the event downwards, if you want to stop the transmission, call `evt.stop()` in the handle function |
| $emit         | Function | type: String event name data: Object event parameters | Trigger event, the usage of the corresponding handler parameters called: `this.$emit('xxx')``this.$emit('xxx', {a:1})`. The transmitted event parameters can be accessed via `evt.detail` in the event callback, e.g.: `evt.detail.a` |
| $emitElement  | Function | type: String event name data: Object event parametersid: String component ID (Default-1 represents root element) | Trigger component event, usage of the corresponding handler parameter called: `this.$emitElement('xxx', null, 'id')` `this.$emitElement('xxx', {a:1})`. The transmitted event parameters can be accessed via `evt.detail` in the event callback, e.g. `evt.detail.a` |
| $watch `101+` | Function | data: String attribute name, supports 'a.b.c.' format, doesn't support array index handler: String event handler function name, the first parameter of the function is the new attribute value, the second parameter is the old attribute value | Dynamic additive attribute/event binding, the attribute must be defined in the data, the handler function must be defined in the `<script>`; the event will only be triggered when there is a change in the attribute value: `this.$watch('a','handler')` |

### Web page method

Accessible through `$page`

| Attribute   | Type     | Parameters                               | Description                              |
| ----------- | -------- | ---------------------------------------- | ---------------------------------------- |
| setTitleBar | Function | text: String title bar text textColor: String text color backgroundColor: String background color | Set the title bar usage of the current web page: `this.$page.setTitleBar({text:'Hello', textColor:'#FF0000', backgroundColor:'#FFFFFF'})` |

## Lifecycle interface

### Web page lifecycle

| Attribute          | Type     | Parameters | Return value | Description                             | When to trigger                          |
| ------------------ | -------- | ---------- | ------------ | --------------------------------------- | ---------------------------------------- |
| onInit             | Function | None       | None         | Monitor web page initialization         | Call when the web page has finished initializing, only triggered once |
| onReady            | Function | None       | None         | Monitor completion of web page creation | Triggered when the web page has been created and can be displayed, only triggered once |
| onShow             | Function | None       | None         | Monitor web page display                | Triggered when web page is entered       |
| onHide             | Function | None       | None         | Monitor page hiding                     | Triggered when the page is left          |
| onDestroy          | Function | None       | None         | Monitor web page sign out               | Triggered when the page is left (doesn't enter navigation stack) |
| onBackPress        | Function | None       | Boolean      | Monitor back button action              | Triggered when the user taps the back button. If the return is true, it means the web page processed the return logic itself; if the return is false, it means it used the default return logic; if there is no return value then it will process as false |
| onMenuPress `101+` | Function | None       | None         | Monitor menu button action              | Triggered when a user taps the menu button |

Call order of the web pages's interface life cycle:

- Open page A: onInit() -> onReady() -> onShow()
- Open page B in page A: onHide()
- Return to page A from page B: onShow()
- Page A return: onBackPress() -> onHide() -> onDestroy()

### App life cycle `101+`

| Attribute | Type     | Parameters | Return value | Description             | When to trigger                  |
| --------- | -------- | ---------- | ------------ | ----------------------- | -------------------------------- |
| onCreate  | Function | None       | None         | Monitor app creation    | Call when app is created         |
| onDestroy | Function | None       | None         | Monitor app destruction | Trigger when an app is destroyed |
