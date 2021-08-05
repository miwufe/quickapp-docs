# Framework commands

> Learn about the commands and components provided by the framework: for, if, show, block, and slot.

Here's what you'll be able to use after reading:

- "for" command
- "if" and "show" commands
- "block" component
- "slot" component

> You can find the code described in this tutorial here: src/Directive directory

## "for" command

"for" command is used for the loop output of arrays, for example:

```
<template>
  <div class="tutorial-page">

    <!-- Method 1: $item represents the element of the array, and $idx represents the index in the array by default -->
    <div class="tutorial-row" for="{{list}}">
      <text>{{$idx}}.{{$item.name}}</text>
    </div>

    <!-- Method 2: Customize the element variable name -->
    <div class="tutorial-row" for="value in list">
      <text>{{$idx}}.{{value.name}}</text>
    </div>

    <!-- Method 3: Customize element and index's variable name -->
    <div class="tutorial-row" for="(personIndex, personItem) in list">
      <text>{{personIndex}}.{{personItem.name}}</text>
    </div>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;

    .tutorial-row {
      width: 85%;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }
</style>

<script>
  export default {
    onInit () {
      this.$page.setTitleBar({ text: '"for" command' })
    },
    data: {
      list: [{name: 'aa'}, { name: 'bb' }]
    }
  }
</script>
```

When rendering a page, the structure of `div.tutorial-row` will be duplicated by looping according to the definition of the data list in the script.

Note:

- When custom variables represent array indexes and array elements of "for" command, the variable name can't start with `$` or `_`.

## "if" and "show" commands

"if " is a conditional command that refers to the if/elif/else commands which are used to control whether to add or delete components.

"show" command can decide whether to display components. It's used to control their display status, and won't delete them from the DOM structure.

```
<template>
  <div class="tutorial-page">
    <text onclick="onClickShow">Show hidden items: </text>
    <text show="{{showVar}}">show: Render while control whether to show</text>

    <text onclick="onClickCondition">Condition command: </text>
    <text if="{{conditionVar === 1}}">if: if condition</text>
    <text elif="{{conditionVar === 2}}">elif: elif condition</text>
    <text else>else: else</text>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
  }
</style>

<script>
  export default {
    onInit () {
      this.$page.setTitleBar({ text: '"if" command and "show" command' })
    },
    data: {
      showVar: true,
      conditionVar: 1
    },
    onClickShow () {
      this.showVar = !this.showVar
    },
    onClickCondition () {
      this.conditionVar = ++this.conditionVar % 3
    }
  }
</script>
```

When the "if/elif" command value is false, the node will be removed from the page, while when it's true, the component will be inserted into the node dynamically.
When the "show" command value is true, the node is visible, while when it's false, the component is invisible, and node will still remain in the page DOM structure.

Note:

- "if/elif/else" nodes must be adjacent.

## "block" component

"block" component expresses logical block without corresponding `Native component`. You can use `<block>` to implement more flexible "list/conditional rendering". For example, use mixed commands of "for", "if", and "show" in `<block>`.

```
<template>
  <div class="tutorial-page">
    <text onclick="toggleCityList">Tap: Control whether to show city</text>
    <list>
      <block for="city in cityList" if="{{showCityList === 1}}">
        <list-item type="city">
          <text>City: {{city.name}}</text>
          <block for="{{city.spots}}">
            <div show="{{city.showSpots}}">
              <text>Sight: {{$item.name}}</text>
            </div>
          </block>
        </list-item>
      </block>
    </list>
  </div>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
  }

  list, list-item {
    flex-direction: column;
  }
</style>

<script>
  export default {
    onInit () {
      this.$page.setTitleBar({ text: '组件block' })
    },
    data: {
      'showCityList': 1,
      'cityList': [
        {
          'name': '北京',
          'showSpots': true,
          'spots': [
            { 'name': 'Tian'anmen' },
            { 'name': 'Badaling Great Wall' }
          ]
        },
        {
          'name': '上海',
          'showSpots': false,
          'spots': [
            { 'name': '东方明珠' }
          ]
        }
      ]
    },
    toggleCityList () {
      this.showCityList = this.showCityList === 1 ? 0 : 1
    }
  }
</script>
```

This example is a little bit complicated and integrates the points mentioned before. Here's the explanation:

- "showCityList" is used to control whether to generate the list elements (i.e. a list of cities) on a page
- "cityList" array represents the city list data that needs to be rendered by the list
- "showSpots" in each element of the "cityList" array determines whether to display the spots data for current city

These combinations allow expressing complex logic.

## "slot" component

"slot" node is used to insert content into an extra custom ux component.

Typically, a `slot component` is provided in the template for the custom components, and when the component is introduced to the page, the developer can flexibly define the child content within that custom component.

Custom components `part1.ux` and `index.ux` can be defined as follows:

```
<!-- par1.ux -->
<template>
  <div>
    <text>{{ header }}</text>
    <slot></slot>
    <text>{{ footer }}</text>
  </div>
</template>

<style>
</style>

<script>
  export default {
    props: [
      'header', 'footer'
    ]
  }
</script>
```

```
<!-- index.ux -->
<import src="./part1"></import>

<template>
  <part1 class="component" header="{{header}}" footer="{{footer}}">
    <text>slot node content</text>
  </part1>
</template>

<style>
  .component {
    flex-direction: column;
  }
</style>

<script>
  export default {
    onInit () {
      this.$page.setTitleBar({ text: 'Componnetslot' })
    },
    data: {
      'header': 'HEAD',
      'footer': 'FOOT'
    }
  }
</script>
```

Use the "slot" component in the child component, so that it can accept the child content that the caller passed in, and dynamically render the child component to get the final page.

## Summary

Commands "for", "if", "show", and "block" component are commonly used. Make sure you know how to apply them.