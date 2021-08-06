# Page style and layout

> Gain familiarity with layout-specific units and component styles, master the Flex layout model, understand how to dynamically modify the style and import a precompiled LESS.

Here's what you'll learn after reading:

- Length units
- Setting styles
- Example of Flex Layout
- Dynamic style modification
- Import a precompiled LESS

> You can find the code described in this tutorial here: src/StyleLayout directory

## Length units

The framework currently only supports length units `px` and `%`. Unlike traditional web pages, `px` is a unit of reference relative to the `base width of the project configuration`, and has been adapted for mobile screens, with a similar principle to `rem`

Developers simply need to confirm the px value for the framework style by referring to the draft design. The conversion formula for the `design draft 1px` and `framework style 1px` is as follows:

`Design draft 1px / base width of design draft = framework style 1px / base width of the project configuration.`

`Base width of the project configuration`: default value of `config.designWidth` in the project configuration document (`<ProjectName>/src/manifest.json`) is 750.

Example:

If the design draft width is 640px, and the component a has a width of 100px on the design draft, this can be achieved in two different ways:

**Option 1:**

Modify the `base width of the project configuration`: set the `base width of the project configuration` to the `base width of the design draft`, so `1px on the framework style` is equal to `1px on the design draft`.

- Set the `base width of the project configuration`, revise `config.designWidth` in the project configuration document (`<ProjectName>/src/manifest.json`):

```
{
  "config": {
    "designWidth": 640
  }
}
```

- Set the corresponding framework style for component a:

```
width: 100px;
```

**Option 2:**

Do not modify the `base width of the project configuration`: if the current `base width of the project configuration` is set to 750, set the framework style x`px` of component a, obtaining `100 / 640 = x / 750` from the conversion formula.

- Set the corresponding framework style for component a:

```
width: 117px;
```

## Setting styles

Developers can use `inline styles`, `tag selectors`, `class selectors`, and `id selectors` to set the style for a component.

You can also use `parallel selection` and `descendant selectors` to set the style as follows:

Example:

```
<template>
  <div class="tutorial-page">
    <!-- Inline styles -->
    <text style="color: #FF0000;">Inline styles</text>

    <text id="title">ID selector</text>
    <text class="title">Class selector</text>
    <text>Tag selector</text>
  </div>
</template>

<style>
  .tutorial-page {
    flex-direction: column;
  }
  /* Tag selector */
  text {
    color: #0000FF;
  }
  /* Class selector (recommended) */
  .title {
    color: #00FF00;
  }
  /* ID selector */
  #title {
    color: #00A000;
  }
  /* Parallel selection */
  .title, #title {
    font-weight: bold;
  }
  /* Descendant selector */
  .tutorial-page text {
    font-size: 42px;
  }
  /* Direct descendant selector */
  .tutorial-page > text {
    text-decoration: underline;
  }
</style>

<script>
  export default {
    onInit () {
      this.$page.setTitleBar({ text: 'Setting styles' })
    }
  }
</script>
```

## Example of Flex Layout

The `Flex layout model` is used for the layout of the framework itself. Refer to the following external document for a `tutorial on the Flex layout`: [Flex layout tutorial](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

The div component is the most commonly used Flex, with the characteristics of the Flex layout; the text, a, span, label components are the text containers, **other components cannot directly insert text content**.

Example:

```
<template>
  <div class="tutorial-page">
    <div class="item">
      <text>item1</text>
    </div>
    <div class="item">
      <text>item2</text>
    </div>
  </div>
</template>

<style>
  .tutorial-page {
    /* Crossed axes centered */
    align-items: center;
    /* Vertical arrangement */
    flex-direction: column;
  }
  .tutorial-page > .item {
    /* Allow to be stretched if there is room left */
    /*flex-grow: 1;*/
    /* Don't allow to be stretched if there isn't enough room left */
    flex-shrink: 0;
    /* Main axis centered */
    justify-content: center;
    width: 200px;
    height: 100px;
    margin: 10px;
    background-color: #FF0000;
  }
</style>

<script>
  export default {
    onInit () {
      this.$page.setTitleBar({ text: 'Flex layout example' })
    }
  }
</script>
```

## Dynamic style modification

There are several ways to dynamically modify the style consistent with the traditional front-end development practices, including but not limited to:

- **Modify class**: Update the variable in the class attribute of the component
- **Modify inline style**: Update the CSS value in the style attribute of a component

```
<template>
  <div style="flex-direction: column;">
    <!-- Modify class -->
    <text class="normal-text {{className}}" onclick="changeClassName">Tap here to change the font color</text>
    <!-- Modify inline style -->
    <text style="color: {{textColor}}" onclick="changeInlineStyle">Tap here to change the font color</text>
  </div>
</template>

<style>
  .normal-text {
    font-weight: bold;
  }
  .text-blue {
    color: #0faeff;
  }
  .text-red {
    color: #f76160;
  }
</style>

<script>
  export default {
    data: {
      className: 'text-blue',
      textColor: '#0faeff'
    },
    onInit () {
      this.$page.setTitleBar({ text: 'Modify the style dynamically' })
    },
    changeClassName () {
      this.className = 'text-red'
    },
    changeInlineStyle () {
      this.textColor = '#f76160'
    }
  }
</script>
```

## Import a precompiled LESS

For LESS syntax, please refer to sources such as the book called [LESS Language Features](http://less.bootcss.com/features/).

To use LESS, please install the appropriate class library: `less`, `less-loader`. For details, please refer to the document: `style --> precompiled style`. Then add the attribute `lang="less"` to the `<style>` label.

Example:

```
<template>
  <div class="tutorial-page">
    <text id="title">"less" example!</text>
  </div>
</template>

<style lang="less">
  /* Introduce "less" file from outside */
  @import './style.less';

  /* Use "less" */
  .tutorial-page {
    justify-content: center;
    background-color: #00beaf;

    #title {
      color: #FF0000;
    }
  }
</style>

<script>
  export default {
    onInit () {
      this.$page.setTitleBar({ text: 'Introduce "less" for precompiling' })
    }
  }
</script>
```

## Summary

After learning about page styles and layouts, developers can start to design and develop pages.