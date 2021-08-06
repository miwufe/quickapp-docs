# Style sheet

Used to describe the component style of the template, decides how the component should be displayed.

The style layout uses the CSS Flexbox style, targeted at some native components, some expansion and modifications have been made to CSS.

All size-related styling (e.g. width and font size) uses a standard width (default 750px) as the basis in order to resolve issues with screen adaption. It is re-scaled according to the actual size of the screen, e.g. a width of 100px will actually be 200px on a 1500px wide screen.

## Importing files

There are 2 ways of importing external files

```
<!-- import external file, replace internal style -->
<style src="./style.css"></style>

<!-- merge external files -->
<style>
 @import './style.css';
 .a{
  }
</style>
```

## Template internal style

Supports use of attributes such as styles and classes to control the style of a component.

```
<!-- inline -->
<div style="color:red; margin: 10px;" />
<!-- class declaration -->
<div class="normal append" />
```

## Selector

The supported selectors are:

| Selector       | Example          | Example description                      |
| -------------- | ---------------- | ---------------------------------------- |
| . class        | . intro          | Select all components with class="intro" |
| #id            | #firstname       | Select all components with id="firstname" |
| tag            | div              | Select all div components                |
| ,              | .a, .b           | Select all components with class=“.a” and class=“.b” |
| #id .class tag | .page .body text | Supports ID, class, tag of descendant selectors, you can also use ">" to indicate direct descendant `101` |

```
<style>
// Single selector
text {
}
.class-abc {
}
#idAbc {
}

// descendant select
.doc-page #testTag div text {
}
.doc-page #test-class .class1 {
}
.doc-page #testId #testIdId1 {
}
// direct descendant select
.doc-page #testTag .flex-column > text {
}

// The same style suits multiple selectors
.font-text, .font-comma {
}
</style>
```

Note, changes in the selector declaration may cause the element to be redrawn. In order to reduce the amount of times the DOM updates as a result of selector changes, **currently, only modification to the last rule in the multiple selectors declared by CSS to update DOM is supported**.

```
<template>
  <div class="{{docBody}}">
    <text class="{{rowDesc}}" value="描述内容"></text>
  </div>
</template>

<style>
  .doc-body .row-desc1 {
    color: #ff0000;
  };
  .doc-body .row-desc2 {
    color: #0000ff;
  };
  .doc-body2 .row-desc1 {
    color: #00ff00;
  };
</style>
```

In the above example, when we take `rowDesc` variable from the `row-desc1` and change it into `row-desc2`, it notifies the Native to update the node style, but if you were to take `docBody` variable from `doc-body` and change it into `doc-body2`, it won't notify DOM to update.

As `doc-body` isn't the last selector, modifications in non-last selectors may affect many DOM elements, and thus affect the rendering performance.

## Selector priority

The priority calculation of the current style selector is consistent with the browser, it is a subset of the CSS rendering (only supports: inline, ID, class, tag, descendant, direct descendant).

The rules for the priority level of the selector are as follows (suppose multiple CSS declarations match the same element div), the overall priority of the CSS declaration applied to that element are these 4 main types: inline > #id > .class > tag.

When multiple CSS declarations match one element (e.g., `#page .class-div` and `.page .class-div`), their priority is determined by the weight value of each selector.

The weight of the ID selector is 10000.
The weight of the class selector is 100.
The weight of the tag selector is 1.

The values of CSS declarations are calculated as follows:

`The value of #page is 10000.`

`The value of #page .class-div is 10100.`

`The value of #page .class-div text is 10101.`

`The value of #page #body .container div text is 20102.`

Therefore:

`When we compare #page .class-div and .page .class-div, the one with a higher value is prioritized. If their values are equal, the later replaces the earlier one according to the declared order.`

## Style preprocessing `101+`

Currently supports **less** and **sass** preprocessors.

```
<!--import external file, replace internal style-->
<style lang="less" src="./lessFile.less">
</style>

<!--merge external file-->
<style lang="less">
 @import './lessFile.less';

.page-less {
  #testTag {
    .less-font-text, .less-font-comma {
      font-size: 60px;
    }
  }
}
</style>
```

## Pseudo-classes

In any component, if an attribute is a Boolean class and when its default value is false, in both instances it's possible to declare a pseudo-class through that attribute's name. When the attribute becomes true, the pseudo-class will take effect. E.g., all of the disabled attributes of a component or checked attribute of an input component, etc.

Moreover, some components will have the pseudo-class support of other forms. For example, input components can get the focus point through actively calling the focus method or by the user's operation, and make the focus pseudo-class take effect. For details, see internal instructions of each component.

Example for writing a pseudo-class:

```
<template>
  <input type="button" class="btn" disabled="{{btndisabled}}">Click</input>
</template>
<style>
btn {
  width: 360px;
  height: 180px;
  background-color: red;
}
btn:disabled {
  background-color: green;
}
</style>
```

When the disabled attribute of the component becomes true, the style of the disabled pseudo-class will take effect. When it is layered over the original style, the background-color in the example will turn from red to green.