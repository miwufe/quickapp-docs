# Event monitoring and triggering

> Learn about event monitoring API, and how to trigger the ViewModel and component events.

Here's what you'll be able to do after reading:

- Add and remove monitored events: `$on()`, `$off`
- Trigger ViewModel events: `$emit()`
- Trigger component events: `$emitElement()`

> You can find the code described in this tutorial here: src/BindEvents directory

## Add and remove monitored events

`$on` is used to monitor custom events; `$off` removes event monitors.

#### $on(evtName, fnHandler)

Register monitored events on the current page. Thus you'll be able to monitor custom events triggered by `$emit()`, `$dispatch()`, `$broadcast()`, etc. This method doesn't affect registered component node events.

```
  export default {
    onInit(){
      this.$on('customEvtType1', this.customEvtType1Handler)
    },
    customEvtType1Handler(evt){
      // Event type, event parameter
      console.info(`Trigger event: Type: ${evt.type}, parameter: ${JSON.stringify(evt.detail)}`);
    }
  }
```

#### $off(evtName, fnHandler)

To remove event monitor, the parameter `fnHandler` is an option. If it's passed, only specified responded functions will be removed; if it's not passed, all monitors for this event will be removed.

```
  export default {
    removeEventHandler () {
      // Don't pass fnHandler: Remove all monitored events
      this.$off('customEvtType1')
      // Pass fnHandler: Remove specified monitored functions
      this.$off('customEvtType1', this.customEvtType1Handler)
    }
  }
```

## Trigger ViewMode events

Some requirements not triggered manually may come out in page interaction, and `$emit()` can trigger events dynamically by triggering events on current instance.

#### $emit(evtName, evtDetail)

Used to trigger the function of current instance's monitored event, and should be used together with `$on()`.

Note: `$emit()` only triggers events monitored by `$on`.

```
  export default {
    emitEvent () {
      this.$emit('customEvtType1', { params: 'Parameter content' })
    }
  }
```

## Trigger component events

`$emitElement()` makes it possible to trigger registration component node events, and trigger them dynamically.

#### $emitElement(evtName, evtDetail, id)

`$emitElement()` can trigger registration component node events, while it's invalid for custom components.

```
<template>
  <div class="tutorial-page">
    <text onclick="emitElement">Events that triggered component nodes: click</text>
    <text id="elNode1" onclick="onClickHandler">Component nodes</text>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
  }
</style>

<script>
  export default {
    onClickHandler (evt) {
      // Event type, event parameter, target
      console.info(`Trigger event: Type: ${evt.type}, Parameter: ${JSON.stringify(evt.detail)}, component nodes: ${evt.target && evt.target.id}`);
    },
    emitElement () {
      this.$emitElement('click', { params: 'Parameter content' }, 'elNode1')
    }
  }
</script>
```

## Summary

Mastering the monitoring and triggering events can help developers better separate the business logic and reduce the coupling on the method response.