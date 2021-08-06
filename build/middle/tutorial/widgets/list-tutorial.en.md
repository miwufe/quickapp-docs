# List tutorial

> Learn how to use "list" correctly, optimize LIST rendering performance, and get the flexibility to meet your needs.

Here's what you'll be able to do after reading:

- Application of scene
- Performance optimization
- Display results: Ceiling

> You can find the code described in this tutorial here: src/ComponentList directory

## Application of scene

#### Simple scene

When developers wish to achieve effects such as a `long list` or `screen scrolling`, `div components` are typically used to create loops, taking a simple list of products as an example.

The code for the div component is as follows (see the tutorial document with the corresponding project code):

```
<template>
  <!-- "div" realization-->
  <div class="tutorial-page">
    <!-- Product list -->
    <block for="productList">
      <div class="content-item" onclick="route($item.url)">
        <image class="img" src="{{$item.img}}"></image>
        <div class="text-wrap">
          <div class="top-line">
            <text class="text-name">{{$item.name}}</text>
            <text class="text-price">{{$item.price}}</text>
          </div>
          <text class="bottom-line">{{$item.brief}}</text>
        </div>
      </div>
    </block>

    <!-- "load more"; monitor common event "appear", and load more data when it appears -->
    <div class="load-more" onappear="loadMoreData">
      <progress type="circular"></progress>
      <text>Load more</text>
    </div>
  </div>
</template>
```

However, when the DOM structure is complex, the scrolling may become unresponsive because Native is unable to reuse the list elements implemented by the div component.

In order to obtain a smooth list scrolling experience, **it is recommended** that developers use a `list component` instead of a `div component` to implement a long list since Native will reuse `list-item` with the same `type of attributes`.

The code for the list component is as follows (see the tutorial document with the corresponding project code):

```
<template>
  <!-- List realization -->
  <list class="tutorial-page" onscrollbottom="loadMoreData">
    <!-- Product list -->
    <block for="productList">
      <list-item type="product" class="content-item" onclick="route($item.url)">
        <image class="img" src="{{$item.img}}"></image>
        <div class="text-wrap">
          <div class="top-line">
            <text class="text-name">{{$item.name}}</text>
            <text class="text-price">{{$item.price}}</text>
          </div>
          <text class="bottom-line">{{$item.brief}}</text>
        </div>
      </list-item>
    </block>

    <!-- "load more"; customize the type attribute as loadMore -->
    <list-item type="loadMore" class="load-more">
      <progress type="circular"></progress>
      <text>Load more</text>
    </list-item>
  </list>
</template>
```

In order to implement the reuse of DOM fragments, it is required that DOM structures with the same `type attribute` are completely identical; so, **the list-item setting the same type attribute is the key to optimizing the scrolling performance of the list.**

Note:

- Nested `list` are not allowed within `list-item`.
- The `type attribute` of the `list-item` is required.
- When reusing a `list-item`, internal use of `if` command is prohibited. This is because the `list-item` DOM structures with the same `type attribute` are completely identical, and using `if` command will cause differences in the DOM structure.

If you encounter **xxx cannot be cast to xxx at ...list** error similar to the figure below:

please check the `list-item component` for the following conditions:

- The `type attribute` is not set. Solution: Set the `type attribute`.
- `if` command used internally. Solution: Use the `show` command instead of the `if` command, or set a different `type` attribute.
- Set to the same `type` attribute, but the DOM structure is inconsistent. Solution: Set to a different `type` attribute.

#### Complex scene

After understanding the basics of the `list` component and the key to optimizing performance when implementing a simple list, next, learn about implementing a complex list with multiple types of list elements to further understand `list` components.

If a developer wishes to achieve the effect in the bottom left figure, with an interlaced image display in the product list elements,

the elements in the list can clearly be divided into three categories. We set three different `type` attribute `list-item` as follows:

- `list-item` with image on the left, text on the right, the custom name for the `type` attribute is `productLeft`
- `list-item` with image on the right, text on the left, the custom name for the `type` attribute is `productRight`
- Load more `list-item`, the custom name for the `type` attribute is `loadMore`

After analyzing the categories of list element, as in the structure chart shown in the bottom right:

Code is as follows (see the tutorial document with the corresponding project code):

```
<template>
  <!-- There are 3 types of DOM structures in the "list", and they correspond to 3 type attributes of list-item -->
  <list class="tutorial-page" onscrollbottom="loadMoreData">
    <block for="{{productList}}">
      <!-- Use list-item style to put the image on the left, and the text right, as well as customizing the type attribute as productLeft -->
      <list-item type="productLeft" class="content-item" if="{{$idx%2 === 0}}" onclick="route($item.url)">
        <image class="img" src="{{$item.img}}"></image>
        <div class="text-wrap">
          <div class="top-line">
            <text class="text-name">{{$item.name}}</text>
            <text class="text-price">{{$item.price}}</text>
          </div>
          <text class="bottom-line">{{$item.brief}}</text>
        </div>
      </list-item>

      <!-- Use list-item style to put the image on the right, and the text left, as well as customizing the type attribute as productRight -->
      <list-item type="productRight" class="content-item" if="{{$idx%2 === 1}}" onclick="route($item.url)">
        <div class="text-wrap">
          <div class="top-line">
            <text class="text-name">{{$item.name}}</text>
            <text class="text-price">{{$item.price}}</text>
          </div>
          <text class="bottom-line">{{$item.brief}}</text>
        </div>
        <image class="img" src="{{$item.img}}"></image>
      </list-item>
    </block>

    <!-- Load more list-items, and customize the type attribute as loadMore -->
    <list-item type="loadMore" class="load-more">
      <progress type="circular"></progress>
      <text>Load more</text>
    </list-item>
  </list>
</template>
```

## Performance optimization

When the DOM structure is complex, in order to obtain a smooth list scrolling experience, performance optimization of the `list` components is essential.

Performance optimization of the `list` components is divided into simplified DOM hierarchy, reusing `list-item`, careful division of `list-item`, and closing `scrollpage`.

Of these, simplified DOM hierarchy and reusing `list-item` are essential optimization principles when using list components, while careful division of `list-item` and closing `scrollpage` are applied to certain scenes, as described below.

#### Simplified DOM hierarchy

Simplifying the DOM hierarchy reduces the number of DOM trees and DOM nodes. Fewer levels and less trees and nodes produce faster layout and drawing.

Therefore, developers need to eliminate as much superfluous parcel bundle labels and levels as possible.

#### Reusing list-item

Reusing `list-item` means setting list items with the same DOM structure to the same `type` attribute `list-item`. This is key to optimizing the scrolling experience of the list.

#### Careful division of list-Item

Careful division of `list-item` means dividing `list-item` with the same DOM structure into as small as possible list elements

**Example:**

If a developer wishes to achieve the effect in the bottom left figure, products are divided into categories, producing a large number of categories

From a business perspective, products can clearly by divided into `new product launches`, `Mi Ecosystem`, and `load more`. It is easy to classify list items by the three `types` of `list-item`, as shown in the middle figure.

However, when the list is very complex, the middle structure chart divided by business division will still be unresponsive. **It is recommended** to set aside business logic, and divide the list into list elements that are as small as possible. The structure is divided as shown in bottom right figure.

![img](list.3.png) ![img](list.4.png) ![img](list.5.png)

The recommended (upper right) DOM structure code is as follows (see the tutorial document with the corresponding project code):

```
<template>
  <list class="tutorial-page" onscrollbottom="loadMoreData">
    <!-- Careful division of list-item -->
    <block for="productList">
      <!-- title -->
      <list-item type="title" if="$item.title" class="title {{$idx>0?'margin-top':''}}">
        <text>{{$item.title}}</text>
      </list-item>
      <!-- banner -->
      <list-item type="banner" if="$item.bannerImg" class="banner">
        <image src="{{$item.bannerImg}}"></image>
      </list-item>
      <!-- productMini -->
      <list-item type="productMini" if="$item.productMini" class="product-mini-wrap">
        <div for="value in $item.productMini" class="product-mini">
          <image src="{{value.img}}" class="product-mini-img"></image>
          <text>{{value.name}}</text>
          <text class="product-mini-brief">{{value.brief}}</text>
          <text class="product-mini-price">{{value.price}}</text>
        </div>
      </list-item>
      <!-- textHint -->
      <list-item type="textHint" if="$item.textHint" class="text-hint">
        <text>{{$item.textHint}} ></text>
      </list-item>
    </block>
    <!-- Load more on the bottom of the list -->
    <list-item type="loadMore" class="load-more">
      <progress type="circular"></progress>
      <text>Load more</text>
    </list-item>
  </list>
</template>
```

#### Closing scrollpage

The `list` component supports attribute `scrollpage`. The default setting is off, showing if the `non-list` elements at the top of the page also scroll with the `list`. Turning on the `scrollpage` will reduce the `list` rendering performance.

Therefore, before the developer opens the scrollpage, it is recommended to first try setting the non-list elements at the top of the page as list items with one or more type attribute, and moving them into the list, thereby achieving the objective of closing scrollpage and improving rendering performance.

**Example:**

If a developer wishes to achieve the effect in the bottom left figure, the common list is located below the top banner. You need to scroll the entire screen.

Developers will generally divide the page into banner and list, then turn on the `list` `scrollpage` attribute, as shown in the middle figure:

However, turning on `scrollpage` will reduce the `list` rendering performance. **It is recommended** to set the banner as a special `type` attribute `list-item`, and move it into the `list`, while turning off `scrollpage`, as shown in the bottom left figure.

![img](list.6.png) ![img](list.7.png) ![img](list.8.png)

The recommended (upper right) DOM structure code is as follows (see the tutorial document with the corresponding project code):

```
<template>
  <!-- "list realization"; monitor the list scrollbottom event, and load more data when it's scrolled to the list bottom -->
  <list class="tutorial-page" onscrollbottom="loadMoreData">
    <list-item type="banner" class="banner">
      <image src="../../Common/img/demo_large.png"></image>
    </list-item>

    <!-- Product list -->
    <block for="productList">
      <list-item type="product" class="content-item" onclick="route($item.url)">
        <image class="img" src="{{$item.img}}"></image>
        <div class="text-wrap">
          <div class="top-line">
            <text class="text-name">{{$item.name}}</text>
            <text class="text-price">{{$item.price}}</text>
          </div>
          <text class="bottom-line">{{$item.brief}}</text>
        </div>
      </list-item>
    </block>

    <!-- list-item will realize more loads, and the type attribute name will be customized as loadMore -->
    <list-item type="loadMore" class="load-more">
      <progress type="circular"></progress>
      <text>Load more</text>
    </list-item>
  </list>
</template>
```

## Display results: Ceiling

This section is non-mandatory and is intended as a reference for developers who have one of the following requirements:

- Need to determine the page scroll position
- Need to understand `appear` events and `disappear` events

#### Realization of a traditional page

The `ceiling` element is an older way of interacting with traditional web pages:

- The initial position of the `ceiling element` is generally near the top of the page, but at a distance from the top
- When the finger slides upward over the initial position of the `ceiling element`, the `ceiling element` is pinned to the top
- When the finger slides down to reach the initial position of the `ceiling element`, the `ceiling element` is unpinned from the top

In traditional web pages, the idea of the `ceiling` element is to monitor `scroll` events. When the page scrolls to a certain position, the position of the `ceiling element` in the window can be changed.

#### Realization of a framework

However, unlike traditional web pages, in the framework, the `scroll` event applies only to the `list` component, and the obtained values are the relative coordinates of the scrolling. During use, you need to obtain the current absolute coordinates of the scroll position through accumulation.

In addition, when the list is scrolling, this `scroll` event will be triggered with high frequency, creating potential performance issues.

Therefore, within the framework, **it is recommended** that developers use `appear` events and `disappear` events to implement the `ceiling` effect. The `appear` event is triggered when the component appears, the `disappear` event is triggered when the component disappears.

The `appear` event and the `disappear` event are common events for the component. Components that are indicated as supporting common events in the documentation, including the `div` component and `list-item` component, all support these two events.

Flexible use of `appear` events and `disappear` events can reveal most requirements for determining the scroll position.

#### Implementation and coding of a framework

Next, compare to the sample code `ceiling` element effect rendered in the `list` component for analysis

First, understand `top elements` and `ceiling elements`:

- The `top element` in the list: the `list-item` with the `top` `type` attribute
- The `ceiling` element in the list: the `list-item` with the `ceiling` `type` attribute

Then, analyze the solution for producing the `ceiling` effect:

- Use the `stack` component as a container for the entire page. The characteristics of the `stack` component are as follows: Each direct child component is stacked in sequence, covering the previous child component.
- In the `stack` component, add the child component that is last in the sequence as the child component prior to the `mask`. The display effect is fixed at the top. This `mask` and the rendering of the `ceiling element` are exactly the same.
- When the `ceiling effect` is required, showing the corresponding `mask` produces the ceiling effect; when the `ceiling element does not need to be shown, hide the corresponding mask.`
- ```

  ```

```
Finally, determine the ceiling conditions:When the page scrolls down, the ceiling element disappears from the field of view, and the ceiling element needs to be pinned the top. Therefore, monitor ceiling element disappear events, showing the mask.When the page scrolls up, the ceiling element appears in the field of view, and the ceiling element needs unpinned from the top. Therefore, monitor ceiling element appear events, hiding the mask.The implementation code is as follows:
<template>
  <!-- Use "stack" component to make "Mask corresponds to the ceiling element in the list" cover the list -->
  <stack class="tutorial-page">
    <list class="list">
      <!-- By monitoring the "appear" and "disappear" events of "top elements in the list", control the display of "Mask corresponds to the ceiling element in the list" -->
      <list-item type="top" ondisappear="showMask" onappear="hideMask">
        <div class="height-300 bg-blue">
          <text>Top element in the list</text>
        </div>
      </list-item>
      <!-- Ceiling element in the list -->
      <list-item type="ceiling">
        <div class="height-300 bg-red">
          <text>Ceiling element in the list</text>
        </div>
      </list-item>
      <!-- Common list elements -->
      <list-item for="list" type="common" class="list-item">
        <text class="text">{{$item}}</text>
      </list-item>
    </list>

    <!-- Mask corresponds to the ceiling element in the list -->
    <div show="{{maskShow}}">
      <div class="height-300 bg-red">
        <text>Ceiling element in the list</text>
      </div>
    </div>
  </stack>
</template>

<style lang="less">
  .tutorial-page {
    flex-direction: column;
    .list {
      width: 750px;
      flex-grow: 1;
      .list-item {
        height: 150px;
        border-bottom-width: 1px;
        border-bottom-color: #0faeff;
        .text {
          flex: 1;
          text-align: center;
        }
      }
    }
    .height-300 {
      height: 300px;
    }
    .bg-red {
      flex-grow: 1;
      justify-content: center;
      background-color: #f76160;
    }
    .bg-blue {
      flex-grow: 1;
      justify-content: center;
      background-color: #0faeff;
    }
  }
</style>

<script>
  export default {
    data: {
      maskShow: false,
      appearCount: 0,
      list: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N']
    },
    onInit(){
      this.$page.setTitleBar({ text: 'Effect: Ceiling' })
    },
    showMask () {
      this.maskShow = true
    },
    hideMask () {
      // When loading the page, "appear" events of all elements will be triggered once. So the first "appear" event need to be filtered out.
      if (this.appearCount) {
        this.maskShow = false
      } else {
        ++this.appearCount
      }
    }
  }
</script>SummaryUnderstanding the features of list components can improve page performance, avoiding performance issues in the later stages of the development process
```