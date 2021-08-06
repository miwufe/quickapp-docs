# Switching pages and passing parameters

> Learn how to open pages, go back, and pass parameters back and forth.

Here's what you'll be able to do after reading:

- Use component a for switching pages and parameter passing
- Use an interface router for page switching and parameter passing
- Receive parameters
- Return parameters

> You can find the code described in this tutorial here: src/PageParams directory

## Use component a for switching pages and parameter passing

#### Switch pages

Component a can switch to a page within the app by configuring href attribute

Example:

```
<template>
  <div class="container">
    <!-- Page path within the app that starts with '/' -->
    <a href="/PageParams/receiveparams">Switch to parameter receiving page</a>
    <!-- Page path within the app that starts with non-'/' -->
    <a href="PageParams/receiveparams">Switch to parameter receiving page</a>
    <!-- Specially, if the uri value is '/', it will switch to the
 page with path '/', if it's none, switch to home page-->
    <a href="/">Switch to home page</a>
  </div>
</template>
```

In addition, component a also provides the ability use call, text messages, and email functions, and the ability to load web pages.

Example:

```
<template>
  <div class="container">
    <!-- uri contains full schema -->
    <a href="tel:10086">Call the phone</a>
    <a href="sms:10086">Call the message</a>
    <a href="mailto:example@xx.com">Call the email</a>
    <!-- Open the webview to load webpage -->
    <a href="https://www.mi.com/">Load mi.com</a>
  </div>
</template>
```

#### Parameter passing

Using component a for page switching, the '?key=value' method can be used to add parameters to support the variable parameters.

Example:

```
<template>
  <div class="tutorial-page">
    <!-- Add parameters -->
    <a href="/PageParams/receiveparams?key=欢迎使用直达服务">Carry the parameter key1 to switch</a>
    <!-- Add variable parameters -->
    <a href="/PageParams/receiveparams?key={{title}}">Carry the parameter key2 to switch</a>
  </div>
</template>

<style>
  .tutorial-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    margin-top: 75px;
    font-size: 30px;
    color: #09ba07;
    text-decoration: underline;
  }
</style>

<script>
  export default {
    data: {
      title: "Welcome to Direct service"
    },
    onInit () {
      this.$page.setTitleBar({ text: 'Switch pages and deliver parameters by component a' })
    }
  }
</script>
```

## Use an interface router for page switching and parameter passing

#### Switch pages

Before using the router interface, you need to import the module.

The parameter URL supported by router.push(OBJECT) is identical to the href attribute of component a.

The supported parameter URLs for router.replace(OBJECT) do not support calling, messaging, or emailing. Other functions are the same as push.

Example:

```
<template>
  <div class="tutorial-page">
    <input class="btn" type="button" value="Switch to parameter receiving page" onclick="routePagePush"></input>
    <input class="btn" type="button" value="Switching to parameter receiving page, because current page can't
 go back" onclick="routePageReplace"></input>
    <input class="btn" type="button" value="Back to last page" onclick="routePageBack"></input>
    <input class="btn" type="button" value="Clear page records, and only remain current page" onclick="routePageClear"></input>
  </div>
</template>

<style>
  .tutorial-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 550px;
    height: 86px;
    margin-top: 75px;
    border-radius: 43px;
    background-color: #09ba07;
    font-size: 30px;
    color: #ffffff;
  }
</style>

<script>
  // Import the module
  import router from '@system.router'

  export default {
    onInit () {
      this.$page.setTitleBar({ text: 'Interface router switches pages' })
    },
    routePagePush () {
      // Switch to a page within the app
      router.push({
        uri: '/PageParams/receiveparams'
      })
    },
    routePageReplace () {
      // Switch to a page within the app, current page can't go back
      router.replace({
        uri: '/PageParams/receiveparams'
      })
    },
    routePageBack () {
      // Back to last page
      router.back()
    },
    routePageClear () {
      // Clear all page records, and only remain current page
      router.clear()
    }
  }
</script>
```

#### Parameter passing

The router interface parameter params can set required parameter passing during page redirects.

Example:

```
<template>
  <div class="tutorial-page">
    <input class="btn" type="button" value="Carry the parameter to switch pages" onclick="routePagePushWithParams"></input>
    <input class="btn" type="button" value="Carry the parameter to switch pages, current page can't go back" onclick="routePageReplaceWithParams"></input>
  </div>
</template>

<style>
  .tutorial-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 550px;
    height: 86px;
    margin-top: 75px;
    border-radius: 43px;
    background-color: #09ba07;
    font-size: 30px;
    color: #ffffff;
  }
</style>

<script>
  // Import the module
  import router from '@system.router'

  export default {
    data: {
      title: 'Welcome to use Flash apps'
    },
    onInit () {
      this.$page.setTitleBar({ text: 'Interface router switches pages and pass parameters' })
    },
    routePagePushWithParams () {
      // Switch to a page within the app
      router.push({
        uri: '/PageParams/receiveparams',
        params: { key: this.title }
      })
    },
    routePageReplaceWithParams () {
      // Switch to a page within the app, current page can't go back
      router.replace({
        uri: '/PageParams/receiveparams',
        params: { key: this.title }
      })
    }
  }
</script>
```

## Receiving parameters

After the developers have mastered the method of passing parameters between pages using component a and the router interface, how are the parameters received?

In fact, it is very simple. The receiving method for parameters passed by component a and the interface router is the same: indicate the `props attribute` in ViewModel, indicate a list of the attributes used.

Example:

```html
<template>
  <div class="tutorial-page">
    <text>page</text>
    <!-- Display parameters passed by the page in the template -->
    <text>{{key}}</text>
  </div>
</template>

<style>
  .tutorial-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  export default {
    data: {
      key: ''
    },
    onInit () {
      this.$page.setTitleBar({ text: 'Receive the
 parameter' })

      // Parameters passed by output page in js
      console.info('key: ' + this.key)
    }
  }
</script>
```

## Return parameters

Developers may encounter the need to return parameters between pages.

Example:

Suppose there is page A and page B, and you first redirect from Page A to Page B, and then return to Page A from Page B, you need to pass parameters.

At this point, the component and interface router passing parameters cannot meet the requirements. However, it can be done with the help of the app level object: `this.$app.$data`

The Page A implementation code is as follows:

```
<template>
  <div class="tutorial-page">
    <a href="/PageParams/returnParams/pageb">Switch to page B</a>
    <text>{{msg}}</text>
  </div>
</template>

<style>
  .tutorial-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    margin-top: 75px;
    font-size: 30px;
    color: #09ba07;
    text-decoration: underline;
  }
</style>

<script>
  export default {
    data: {
      msg: ''
    },
    onInit () {
      this.$page.setTitleBar({ text: 'Page A' })
    },
    onShow () {
      // When the page is switched to be visible, check if there is data passed from page B in the global data
      if (this.$app.$data.dataPageB && this.$app.$data.dataPageB.gotoPage === 'pageA') {
        // Get data returned to current page from the global data
        var data = this.$app.$data.dataPageB.params;
        this.msg = data.msg;
      }
    }
  }
</script>
```

The Page B implementation code is as follows:

```
<template>
  <div class="tutorial-page">
    <text>Page B</text>
    <input style="width: 450px;" placeholder="Enter the message returned to page A" onchange="updateMsg"/>
  </div>
</template>

<style>
  .tutorial-page {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

<script>
  export default {
    data: {
      msg: ''
    },
    onInit () {
      this.$page.setTitleBar({ text: 'Page B' })
    },
    onHide () {
      // When the page is switched to be invisible, write the data object to be passed into global data
      this.$app.$data.dataPageB = {
        gotoPage: 'pageA',
        params: {
          msg: this.msg
        }
      }
    },
    updateMsg (e) {
      // Update the message text input by "input"
      this.msg = e.text;
    }
  }
</script>
```

## Summary

Having mastered page switching and parameter passing, developers can easily develop multi-page applications.
