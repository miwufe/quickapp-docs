# Lifecycle

> Understand lifecycle and status of the page, and the lifecycle of the app.

Here's what you'll learn after reading:

- Web page lifecycle: `onInit`, `onReady`, `onShow`, `onHide`, `onDestroy`, `onBackPress`, `onMenuPress`, `onKey`
- Page status: `Displayed`, `Hidden`, `Destroyed`
- App lifecycle: `onCreate`, `onDestroy`

> You can find the code described in this tutorial here: src/Lifecycle directory, src/app.ux document.

## Web page lifecycle

Since the page is rendered through `ViewModel`, the page lifecycle refers to the `ViewModel` lifecycle, including commonly seen: onInit, onReady, onShow which are triggered when **the page is created**.

#### onInit()

**Shows the VM data (events, props, data) have already been prepared**; you can use props and data, as shown below:

```
data: {
  // Lifecycle document list
  lcList: []
},
onInit () {
  this.$page.setTitleBar({ text: 'Lifecycle' })

  this.lcList.push('onInit')

  console.info(`Trigger: onInit`)
  console.info(`Execute: Get data's lcList attribute: ${this.lcList}`)   // Execute: Get data's lcList attribute: onInit
}
```

#### onReady()

**Indicates that the VM template has been compiled**, enabling you to obtain the DOM node (e.g.: `this.$element (idxxx)`) as shown below:

```
onReady () {
  this.lcList.push('onReady')

  console.info(`Trigger: onReady`)
  console.info(`Execute: Get template nodes: ${this.$rootElement()}`)   // Execute: Get template nodes: <div attr={} style={"flexDirection":"column"}>...</div>
}
```

#### onShow(), onHide()

Multiple pages can be operated through the app at the same time, but **only one of the pages can be displayed at any time**; this is different from pure front-end development, where the browser page can only have one page at a time, and when a new page is opened from the bookmarks, the previous page is destroyed; however, it is somewhat similar to SPA development, that allows for switching pages, but has shared browser Context.

Therefore, switching pages produces a new event: onHide() is invoked when the page is switched to hidden, and onShow() is invoked when the page is shown again.

The VM `$visible` attribute can be used to infer the display status: `true` indicates displayed, `false` indicates hidden.

```
onShow () {
  this.lcList.push('onShow')

  console.info(`Trigger: onShow`)
  console.info(`Execute: Get page display
 status attribute: ${this.$visible}`)  // true
}
onHide () {
  this.lcList.push('onHide')

  console.info(`Trigger: onHide`)
  console.info(`Execute: Get page display
 status attribute: ${this.$visible}`)  // false
}
```

#### onDestroy()

Invoked when a page is destroyed. Possible reasons for a page being destroyed are: the user returns to the previous page from the current page, or the user has opened too many pages, and the framework automatically destroys some of the pages to avoid using too many resources.

Therefore, the destruction of a page should **release some resources** for operation, such as: cancel monitoring of interface subscriptions `geolocation.susubscribe()`

The VM `$valid` attribute can be used to infer whether a page has been destroyed: `true` indicates the page exists, `false` indicates it has been destroyed.

```
onDestroy () {
  console.info(`Trigger: onDestroy`)
  console.info(`Execute: Page will be
 destroyed, destroying status: ${this.$valid}, operation of canceling monitoring of interface subscriptions should be done: geolocation.susubscribe()`)    // true, about
 to be destroyed
  setTimeout(function () {
    console.info(`Execute: Page has been
 destroyed, so action won't be executed`)                                        // Page has been
 destroyed, so action won't be executed
  }.bind(this), 0)
}
```

Hints

1. In `onDestroy()`, the `$valid` determination does not have any meaning, because the page is about to be destroyed; however, `$valid` can be used on the VM import on other pages to infer whether the page exists.
2. Attachment for asynchronous operations such as `setTimeout` is on the current page, asynchronous calls are not executed when the page is destroyed.

#### onBackPress()

After the user taps the `physical back button` or the `back menu button` in the top-left corner, the event is triggered when `invoking the return API`.

If the event response method returns `true`, this indicates no return, and you can handle the business logic yourself (After completion, the developer can invoke the API to return); otherwise, do not return data or return other data indicates that the system logic is followed: return to the previous page.

```
onBackPress () {
  console.info(`Trigger: onBackPress`)

  // true: Means to handle it itself; otherwise, it will go back to last page
  // return true
}
```

Hints

1. Interface API used to go back to last page: `router.back()`, refer to the document: `Basic functions --> Page routing`

#### onMenuPress()

When using the native top title bar, you can use the `menu` attributes in the `manifest.json` to set whether the menu in the upper right corner is shown. Please refer to the `Manifest` chapter.

```
onMenuPress () {
  this.lcList.push('onMenuPress')

  console.info(`Trigger: onMenuPress`)
}
```

#### onKey()

When one key of the control board or keyboard is pressed, this hook method will be triggered.

```
onKey (event) {
  console.log('key pressed!' + event);
  // return false // default behavior
  // return true // means the default behavior will be cancelled, developer need to deal with the keycode.
}
```

## Page status

As described above, the app allows multiple pages to exist and operate at the same time but shows only one page at any time. Therefore, each page will be in one of a number of different states.

1. **Displayed**: The page is the page currently shown by the app, inferred from `$visible`
2. **Hidden**: After opening a new page on top of the existing page, the original page is hidden, inferred from `$visible`
3. **Destroyed**: After a page is destroyed for any reason, the code on the page will not be executed, inferred from `$valid`

For interface calling and page lifecycle and status, refer to documentation: `General > General rules`

## App status

Currently, the App lifecycle provides two callback functions, onCreate and onDestroy; in `app.ux`, as shown below

```
export default {
  onCreate () {
    console.info('Application onCreate')
  },
  onDestory () {
    console.info('Application onDestory')
  },
  // Expose to all pages, and use this.$app.$def.method1() on the page to access
  method1 () {
    console.info('This is the app method')
  },
  // Expose to all pages, and use this.$app.$def.data1 on the page to access
  data1: {
    name: 'This is the data that stored by the app'
  },
  /**manifest**/
}
```

In the `app.ux` file, you can find some operations that are independent from the page, for example: importing public JS resources and then exposing them to all pages, accessed through `this.$app` as shown below:

```
// $app information
console.info(`Get: The data of manifest.json's config.data: ${this.$app.$data.name}`)
console.info(`Get: Data in app file: ${this.$app.$def.data1.name}`)
console.info(`Execute: Method in app file`, this.$app.$def.method1())
```

## Summary

Understand the lifecycle of the page and app, helping to better organize the business logic of the page, facilitate operations such as the interaction between pages and resource release.