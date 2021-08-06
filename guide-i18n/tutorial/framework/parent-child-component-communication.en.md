# Parent-child component communication

> Learn about the development of custom components, understand communication between parent and child components (props, data, $dispatch(), $broadcast()).

Here's what you'll be able to do after reading:

- Write custom components
- Introduce custom components
- Transfer and transform data
- Trigger events between parent-child components: `$broadcast()`, `$dispatch()`, child component `$emit()` node events
- Organize communication between sibling components

> You can find the code described in this tutorial here: src/InterVms directory

## Writing custom components

When developing pages, developers must use native components, such as `text` and `div`. These components are rendered using the native layer of each platform. When developing complex pages, developers write all of the UI parts into a single `<template>`, reducing the maintainability of the code and causing unnecessary coupling between modules.

In order to better organize the logic and code, the page can be split into multiple modules according to function. Each module is responsible for a single function. The page then imports and manages the modules. `Custom components` mean the coding for transmission functions and configuration data are entirely separated.

A custom component is a component written by developers that works like native, and is rendered using the `<template>`. As with a page, it uses ViewModel for management of data, events, and methods.

From this perspective, pages are also a type of special custom component that can be used without being imported, and which also serve the entire page. There is no need to go into details about `ux page` development. The following is an example:

```
<template>
  <div class="tutorial-page">
    <text class="tutorial-title">Custom component: </text>
    <text>{{ prop1 }}</text>
    <text>{{ prop2Object.name }}</text>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
    padding-top: 20px;

    .tutorial-title {
      font-weight: bold;
    }
  }
</style>

<script>
  // Child component
  export default {
    props: [
      'prop1',
      'prop2Object'
    ],
    data: {
    },
    onInit () {
      console.info(`Data passed from outside: `, this.prop1, this.prop2Object)
    }
  }
</script>
```

A custom component is different from a page component due the presence of a `props` attribute, which is used to indicate **acceptable external data transfers**; `props` is an array, and each element in the array is an exposed `attribute name`.

Hint

- If the attribute name uses a hump attribute, such as `prop2Object`, then use `-` to join the parts, for example `prop2-object` during external data transfer.

## Introducing custom components

The traditional way of importing files is to use `import` and `require` in `<script>`; for example, `Vue`, `React`.

The framework imports custom components by using the `<import> label`, as shown by the code below:

```
<import name="comp-part1" src="./part1"></import>
```

The `src` attribute in the `<import> label` specifies the custom component address; the `name` attribute specifies **the label name** when using a component in the `<template>`

The final page definition and import method is as follows

```
<import name="comp-part1" src="./part1"></import>

<template>
  <div class="tutorial-page">
    <text class="tutorial-title">Page component: </text>
    <text>{{ data1 }}</text>
    <text>{{ data2.name }}</text>
    <text onclick="evtType1Emit">Trigger $broadcast()</text>

    <comp-part1 prop1="{{data1}}" prop2-object="{{data2}}" onevt-type3="evtTypeHandler"></comp-part1>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
    padding: 20px 10px;

    .tutorial-title {
      font-weight: bold;
    }
  }
</style>

<script>
  // Parent component
  export default {
    data: {
      data1: 'Pass strings',
      data2: {
        name: 'Pass objects'
      }
    },
    onInit () {
      this.$page.setTitleBar({ text: 'Parent-child component communication' })
    },
    evtTypeHandler (evt) {
      console.info(`Parent component: Event response: `, evt.type, evt.detail)
      // End the event passing
      // evt.stop()
    },
    evtType1Emit () {
      this.$broadcast('evtType1', { params: 'Extra parameters' })
    }
  }
</script>
```

## Transferring and transforming data

As described above, the parent component transfers data to the child component, using the `props` attribute within the child component to indicate the exposed attribute name, then indicating the transferred parent component data on the `component import label`.

If you wish to **transform the data** on the child component, but do not want to change the parent component data, you can use `$watch()`. If it is an attribute in the target, please use `.` to split the parameters, for example: `$watch(xxx.xxx.xxx, methodName)`.

This is shown below, target `prop1` attribute

```
<script>
  // Child component
  export default {
    props: [
      'prop1',
      'prop2Object'
    ],
    data () {
      return {
        upperProp1: this.prop1
      }
    },
    onInit () {
      console.info(`Data passed from outside:`, this.prop1, this.prop2Object)

      // Monitor data changes
      this.$watch('prop1', 'watchPropsChange')
      this.$watch('prop2Object.name', 'watchPropsChange')
    },
    /**
     * Monitor data changes, and you can set the value to "data"
 after you process the data
     * @param newV
     * @param oldV
     */
    watchPropsChange (newV, oldV) {
      console.info(`Monitor data changes`, newV, oldV)
      this.upperProp1 = newV && newV.toUpperCase()
    }
  }
</script>
```

## Triggering events between components

After the child component has completed data transformation, there are typically two ways to pass the final data to the parent component.

- The data transferred by the parent component is the object, and the child component **directly modifies the attributes of this object**; so, the parent component directly receives the final data.
- The child component `data` contains internal data, which needs to be passed to the parent component: the child component uses `$dispatch()` to complete the event trigger, the parent component uses `$on()` to attach the event and respond, for example: evtType2;
- The child component `data` contains internal data that needs to be given to the parent component: the child component uses `$emit()` on the event attached to the node to execute the parent component method, for example: evtType3;

This is shown in the code below

```
<script>
  // Child component
  export default {
    props: [
      'prop1',
      'prop2Object'
    ],
    data () {
      return {
        upperProp1: this.prop1
      }
    },
    onInit () {
      console.info(`Data passed from outside:`, this.prop1, this.prop2Object)
      // Custom events with assigned ViewMode
      this.$on('evtType1', this.evtTypeHandler)
      this.$on('evtType2', this.evtTypeHandler)
    },
    evtTypeHandler (evt) {
      console.info(`Child component: Event response: `, evt.type, evt.detail)
      // End event passing
      // evt.stop()
    },
    evtType2Emit () {
      this.$dispatch('evtType2', { params: 'Extra parameters' })
    },
    evtType3Emit () {
      this.$emit('evtType3', { params: 'Extra parameters' })
    }
  }
</script>
```

Therefore, the framework provides developers with bidirectional event transfer:

- Transfer down: triggered by the parent component, the child component responds; Invoke `parentVm.$broadcast()` to complete downward transfer, for example: evtType1
- Transfer: triggered by the child component, the parent component responds; invoke `childVm.$dispath()` to complete upward transfer, for example: evtType2

Hint

- The transfer parameters for triggering use `evt.detail` when receiving to get the parameters
- When the transfer is completed, invoke `evt.stop ()` to end the transfer

## Communication between sibling components

Traditional communication between non-parent-child components such as sibling components is carried out through the Publish/Subscribe model.

Developers who want to use this capability can of course write a Pub/Sub model to achieve decoupling; of course, if the business logic is relatively simple, you can also use the VM's own event binding: `$on()`, `$emit()`.

As shown below, child component defines the logical processing of the sub-terminal, including `processMessage()` and `customEventInVm2()`. Using the latter one will have the same effect as using the `$on`:

```
<template>
  <div class="tutorial-page">
    <text class="tutorial-title">Custom component 2: </text>
    <text>Handle messages: {{msg}}</text>
    <text>Event content: {{eventDetail}}</text>
  </div>
</template>

<style lang="less">
</style>

<script>
  // Child component: part2
  export default {
    props: [
    ],
    data () {
      return {
        msg: null,
        eventDetail: null
      }
    },
    processMessage (msg) {
      const now = (new Date).toISOString()
      this.msg = `${now}: ${msg}`
    },
    /**
     * Through "events" object: Add event
     */
    events: {
      customEventInVm2 (evt) {
        const now = (new Date).toISOString()
        this.eventDetail = `${now}: ${evt.detail}`
      }
    }
  }
</script>
```

Another sibling component can use **cross references in the parent component** to achieve the objective of cross holding of VM. This is achieved by `executing establishRef` in `onReady() in the lifecycle`, as shown in the code below:

```
<import name="comp-part2" src="./part2"></import>
<import name="comp-part3" src="./part3"></import>

<template>
  <div class="tutorial-page">
    <!-- Brother ViewMode communication -->
    <comp-part2 id="sibling1"></comp-part2>
    <comp-part3 id="sibling2"></comp-part3>
  </div>
</template>

<style lang="less">
</style>

<script>
  // Parent component
  export default {
    onReady () {
      this.establishRef()
    },
    /**
     * Establish mutual ViewMode cites
     */
    establishRef () {
      const siblingVm1 = this.$vm('sibling1')
      const siblingVm2 = this.$vm('sibling2')

      siblingVm1.parentVm = this
      siblingVm1.nextVm = siblingVm2
      siblingVm2.parentVm = this
      siblingVm2.previousVm = siblingVm1
    }
  }
</script>
```

The Pub End in the other child component is very simple. Execute `sendMesssage()` to complete the trigger, as shown in the code below:

```
<template>
  <div class="tutorial-page">
    <text class="tutorial-title">Custom component 3: </text>
    <text onclick="sendMesssage">Tap to send messages</text>
  </div>
</template>

<style lang="less">
</style>

<script>
  // Child component: part3
  export default {
    sendMesssage () {
      if (this.previousVm) {
        // Way1. Citing method
        this.previousVm.processMessage('The content of communication among brothers')
        // Way2. Triggering event
        this.previousVm.$emit('customEventInVm2', 'The content of communication among brothers')
      }
    }
  }
</script>
```

## Summary

Custom components help better organize coding logic and produce a cleaner structure; Understanding data communication between parent and child components is a must-have skill for developing custom components.