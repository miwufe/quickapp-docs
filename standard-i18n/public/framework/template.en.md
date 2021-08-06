# Template

Tag language similar to HTML. It combines basic components, custom components, and events, builds the structure of a web page.

**Note: You can only have 1 root node in a template (e.g.: div) Don't have multiple root nodes in the <template> and don't use "block" as a root node.**

## Data binding

```
<template>
    <text> {{message}} </text>
</template>

<script>
  module.exports= {
    data: {
      message: 'Hello World!'
    }
  }
</script>
```

## Event binding

```
<template>
    <div>
        <!-- regular format -->
        <div onclick="press"></div>
        <!-- shortened -->
        <div @click="press"></div>
    </div>
</template>

<script>
  module.exports= {
    press: function(e) {
      this.title = 'Hello'
    }
  }
</script>
```

Writing methods supported by event callbacks (the {% raw %}{{}}{% endraw %} among it can be omitted):

"fn": fn is the name of the event's callback (the corresponding function implementation is in the `<script>`).

“fn(a,b)”: function parameters such as a and b can be constants or variables defined in the data of the `<script>` (don't write "this." in the beginning).

"a+b": expression, among it a and b data categories are the same as the above.

When the callback is called, it will automatically add an "evt" parameter at the end of the parameters list, and will access the context data corresponding to the callback event (for specifics on data content, see the component callback event instructions), for example, by clicking the click location x or y of the event.

## List rendering

```
<template>
    <div class="doc-page">
        <div for="{{list}}" tid="uniqueId">
            <text>{{$idx}}</text>
            <text>{{$item.uniqueId}}</text>
        </div>
    </div>
</template>

<script>
  module.exports = {
    data: {
      list: [{ uniqueId: 1 }, { uniqueId: 2 }]
    }
  }
</script>
```

The `for` command renders the list according to the source data array, the supported writing style is as follows (you can omit the {% raw %}{{}}{% endraw %}).

- for="{% raw %}{{list}}{% endraw %}": `list` is the source data array, the default array element name is `$item`.
- for="{% raw %}{{value in list}}{% endraw %}": `value` is the custom array element name, the default array element index name is `$idx`.
- for="{% raw %}{{(index, value) in list}}{% endraw %}": `index` is the custom array element index name, the `value` is the custom array element name.

The `tid` attribute of the `for` command is used to specify the unique ID of the array element. If it is unspecified, the array element (`$idx`) is used by default as the unique ID. The function of the `tid` attribute is to place an importance on the element node, and optimizing the redrawing efficiency of the "for" cycle.

In the example code, tid="uniqueId" means using the array element `$item.uniqueId` of the array `list` as the unique ID of the array element.

When using `tid` attribute, note that:

- You must have the data attributes specified by the `tid` attribute, otherwise it may cause it to run abnormally.
- You need to guarantee that the data attributes specified in the `tid` attribute are unique, otherwise it may cause it to run abnormally.

## Conditional rendering

There are 2 types of conditional rendering: "if/elif/else" and "show". Here's the difference: when 'if' is false, the component will be removed from VDOM, whereas 'show' can't be seen only when rendering, the component will still be in VDOM.

"if/elif/else" nodes must be neighboring brother nodes, otherwise they can't be processed.

```
<template>
    <div>
        <text if="{{show}}"> Hello-1 </text>
        <text elif="{{display}}"> Hello-2 </text>
        <text else> Hello-3 </text>
    </div>
</template>

<script>
  module.exports= {
    data: {
      show: false
    }
  }
</script>
```

"show" is the same as "visible=none". Currently, it's only used for system native components and doesn't have any effect on custom components. Custom components can import parameters via props and can control whether it is visible by using "show" in its own interior.

```
<template>
    <text show="{{visible}}"> Hello </text>
</template>

<script>
  module.exports= {
    data: {
      visible: false
    }
  }
</script>
```

## Logical control block

You can use `<block>` to implement even more flexible loop/conditional rendering. Note that `<block>` currently only supports "for" and "if/elif/else" attributes. If no attribute has been specified, `<block>` will be treated as a 'transparent' node when building, its child node will be added on to the parent node of the `<block>`.

```
<template>
    <list>
        <block for="cities">
            <list-item type="city">
                <text>{{$item.name}}</text>
            </list-item>
            <block for="$item.spots" if="false">
                <list-item type="spot">
                    <text>{{$item.address}}</text>
                </list-item>
            </block>
        </block>
    </list>
</template>

<script>
  module.exports= {
    data: {
      cities: [
        {name:"beijing", spots:[{name:"XXX",address:"XXX"},{name:"XXX",address:"XXX"}]},
        {name:"shanghai", spots:[{name:"XXX",address:"XXX"},{name:"XXX",address:"XXX"}]}
      ]
    }
  }
</script>
```

## Introducing custom components

```
<import name='comp' src='./comp'></import>
<template>
  <div>
    <comp prop1='xxxx' onevent1="bindParentVmMethod1" @event-type1="bindParentVmMethod1"></comp>
  </div>
</template>
```

If you haven't set a name attribute, then the SRC file name is used as the component name by default.

The SRC attribute specifies the location of the component UX file, you can omit the UX file extension.

Note:

- The component name isn't case sensitive, it will adopt lowercase by default.
- To bind the `event1` event of the custom child component through `(on|@)event1` syntax, implement the following parent component method when the event `childVm.$emit('event1', { params: 'transmit parameters' })` is triggered: `bindParentVmMethod1`.
- The declaration event name on the tag uses a `-` link. Don't use `camel casing` to correlate the response with the method, i.e.: use `event-type1` to indicate binding `eventType1` event.

## Inserting custom components

The location to insert the child component is defined by the tag in the component.

The template of the "com-a" component is defined as:

```
<template>
    <div>
      <text>header</text>
      <slot></slot>
      <text>footer</text>
    <div>
</template>
```

Use the "comA" component on the page as defined below:

```
<import name="comp-a" src="./comp-a"></import>
<template>
    <com-a>
      <text>body</text>
    </com-a>
</template>
```

When the page renders, the "comA" component becomes:

```
<div>
  <text>header</text>
  <text>body</text>
  <text>footer</text>
</div>
```
