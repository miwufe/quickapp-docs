# Using async

> Learn how to use `async` syntax to develop your app, and replace Callback and Promise in a more neat and elegant way.

Here's what you'll be able to do after reading:

- How to configure `async` syntax's babel compilation support
- Use `async` and `await` syntax
- Use `async` in the native interface

> You can find the code described in this tutorial here: app.ux in the src/Async directory

## How to configure async syntax's babel compilation support

In the traditional front-end development, async processing methods include Callback, Promise, and Generator. Among them, the latter method tends to be much more readable than the former; the new syntax of `async` in the ECMA specification can handle asynchronous situations in a more elegant way.

Current app platform itself only supports the `ES5` syntax. In order to use it, you need to have syntax analysis and conversion tools, for example `babel`, as well as inject `polyfill` into the code.

Developers should inject `babel-runtime/regenerator` into `app.ux`, because this file should be executed before all the page scripts are executed, as shown in the following code:

```
// Script: regenerator.js
// Global reference
const globalRef = global.__proto__ || global

// global injection regeneratorRuntime
globalRef.regeneratorRuntime = require('babel-runtime/regenerator')
```

By introducing this script in `app.ux`, you can inject the support to `async`. Search for `regeneratorRuntime` in the `build/app.js` after the project has been compiled, you will find that it has been injected successfully.

**Attention: This feature is only supported on hap-toolkit version 24 or later (because it's required to add library dependencies and modify compilation options)**

## Use async and await syntax

For syntax, you can refer to the book called [Exploring ES2016 and ES2017](http://exploringjs.com/es2016-es2017/ch_async-functions.html) and other available materials.

Add the following code to the tutorial

```
<template>
</template>

<style lang="less">
</style>

<script>
  export default {
    data: {
    },
    onInit () {
      this.$page.setTitleBar({ text: 'supports AsyncAwait' })
    },
    onReady () {
      this.testAsync()
    },
    /**
     * Test Async
     */
    testAsync () {
      async function bar () {
        return 'bar'
      }
      async function foo() {
        const ret1 = await bar();
        console.info('PAGE: foo: ', ret1)
      }
      foo()
    }
  }
</script>
```

## Use async in the native interface

To use the native interface with the help of `async`, you need to transform the native interface from `callback` to `Promise`, and define `async` to return at the same time.

The following example describes the transformation of the fetch interface and exposes it to the `global` environment.

```
// asyncNatives.js
import nativeFetch from '@system.fetch'

const natives = {
  /**
   * Network request
   * @param options
   * @return {Promise}
   */
  async fetch (options) {
    const p1 = new Promise((resolve, reject) => {
      options.success = function (data, code) {
        resolve({ data, code })
      }
      options.fail = function (data, code) {
        resolve({ data, code })
      }
      nativeFetch.fetch(options)
    })
    return p1
  }
}

//Add tp global environment
const hookTo = global.__proto__ || global
hookTo.natives = natives

export default natives
```

Execute the above code first, and expose the `natives` global variable, so the following code can cite the object, which describes how to call the Fetch interface of `async`.

```
<template>
</template>

<style lang="less">
</style>

<script>
  export default {
    data: {
    },
    onInit () {
      this.$page.setTitleBar({ text: 'Support AsyncAwait' })
    },
    onReady () {
      this.testNatives()
    },
    /**
     * Test async's native interface
     */
    async testNatives () {
      // Success
      const ret1 = await natives.fetch({
        url: 'https://gss0.bdstatic.com/5bd1bjqh_Q23odCf/static/itemrep/bottomBanner/index_9e10f91.js',
      })
      console.info('fetchSuccess result: ', JSON.stringify(ret1))
      // Fail
      const ret2 = await natives.fetch({
        url: 'https://gss0.bdstatic.com/xxxxx'
      })
      console.info('fetchFailure result: ', JSON.stringify(ret2))
    }
  }
</script>
```

## Summary

This section isn't a necessary part of development, but provides developers with a more elegant approach for async processing. Learn and use it if you're interested.