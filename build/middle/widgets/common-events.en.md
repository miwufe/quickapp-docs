# Common events

Common events, means the event callbacks that are supported by all the components.
Developers can register callback functions on the component in forms of `on{eventName}` (e.g. `onclick`) or `@{eventName}`（e.g. `@click`).

## Example:

```html
<template>
  <div>
      <text onclick="clickFunction1">line 1</text>
      <text @click="clickFunction2">line 2</text>
  </div>
</template>
```

## Common events as follows:

| Name | Parameters | Description | Bubbling |
| --- | ---- | --- | --- |
| click | `MouseEvent` | Triggered when component is tapped. | Supported.  |
| longpress| `MouseEvent` | Triggered when a user presses and holds a component. | Supported. |
| focus| - | Triggered when component is focused. | Not supported. |
| blur | - | Triggered when component loses focus. | Not supported. |
| appear | - | Triggered when component appears. | Not supported. |
| disappear | - | Triggered when component disappears. | Not supported. |
| resize | {offsetWidth: offsetWidthValue, offsetHeight: offsetHeightValue, offsetLeft: offsetLeftValue, offsetTop: offsetTopValue} | Triggered when component's size changes. | Not supported. |
| key | `KeyEvent` | Triggered when some key is pressed while the component is focused. | Not supported. |
<!-- | touchstart | TouchEvent | 手指刚触摸组件时触发 | 1040+  |
| touchmove | TouchEvent | 手指触摸后移动时触发 | 1040+  |
| touchend | TouchEvent | 手指触摸动作结束时触发 | 1040+  |
| touchcancel `1030+` | TouchEvent | 手指触摸动作被打断时触发。如：来电、弹窗 | 1040+  |
| swipe | {direction:[`left` &#124; `right` &#124; `up` &#124; `down`]}                                                            | 组件上快速滑动后触发。<br> 参数说明:<br> left：　向左滑动；<br>right： 向右滑动；<br>up：　 向上滑动；<br>down：向下滑动。 | 不支持 | -->

## About bubbling

The specification of event bubbling is consistent with the web specification. Developers can use `target` or `currentTarget` to locate event objects. The former points to the event target node and the latter points to the event trigger node.

**Example**

```html
<template>
  <div class="tutorial-page">
    <div id="parentNode" class="outer" onclick="onParentClickHandler">
      <text class="inner" id="childNode1" onclick="onChildClickHandler">child element 1</text>
      <text class="inner" id="childNode2">child element 2</text>
    </div>
  </div>
</template>

<style>
  .outer {
    width: 750px;
    height: 500px;
    background-color: #eeeeee;
  }

  .inner {
    flex: 1;
    margin: 100px;
    background-color: skyblue;
  }
</style>

<script>
  export default {
    onParentClickHandler (evt) {
      // event type
      console.info(`parent element triggered, type is ${evt.type}`);
    },
    onChildClickHandler (evt) {
      // event type
      console.info(`child element triggered, type is ${evt.type}`)
    }
  }
</script>
```

**Output**
```
parent element triggered, type is click

child element triggered, type is click
```
The event phase is divided into `capture` and `bubbling`, the direction of the event flow is capture -> bubbling (parent node -> child node -> parent node), you can view the details here, [Events](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-bubbling).

Through the above example, it's clear that the click event of the child component is triggered first, and the click event of the parent component is triggered by bubbling.

### Stop event bubbling

Event bubbles from the inner layer to the outer layer, use `event.stopPropagation` to stop the event from bubbling.
Currently only `click` and `longpress` events support capturing bubbling.

**Example**
```html
<template>
  <div class="tutorial-page">
    <div id="parentNode" class="outer" onclick="onParentClickHandler">
      <text class="inner" id="childNode1" onclick="onChildClickHandler">child element 1</text>
      <text class="inner" id="childNode2">child element 2</text>
    </div>
  </div>
</template>

<style>
  .outer {
    width: 750px;
    height: 500px;
    background-color: #eeeeee;
  }

  .inner {
    flex: 1;
    margin: 100px;
    background-color: skyblue;
  }
</style>

<script>
  export default {
    onParentClickHandler (evt) {
      console.info(`event on parent element triggered, type is ${evt.type}`);
    },
    onChildClickHandler (evt) {
      console.info(`event on child element triggered, type is ${evt.type}`)
      // stop bubbling
      evt.stopPropagation()
    }
  }
</script>
```

**Output**
```
event on parent element triggered, type is click
```
Only the click event of the child component is triggered, and the click event of the parent component is not triggered, preventing the event from continuing to propagate up.

## Event object description

<!-- ### 1、TouchEvent 类型说明：

| 属性           | 类型      | 说明                                                                                                                                                                                                                                                                      |
| -------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| touches        | TouchList | 触摸事件，当前停留在屏幕中的触摸点信息的数组                                                                                                                                                                                                                              |
| changedTouches | TouchList | 触摸事件，当前变化的触摸点信息的数组.changedTouches 数据格式同 touches， 表示有变化的触摸点，如从无变有（touchstart），位置变化（touchmove），从有变无（touchend、touchcancel），<br>比如用户手指离开屏幕时，touches 数组中无数据，而 changedtouches 则会保存离开前的数据 |

**其中，TouchList 是 Touch 对象的集合。**

### 2、Touch 类型说明：

| 属性       | 类型   | 说明 |
| ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| identifier | number | 触摸点的标识符。对于多点同时触摸则是 [0,1,2,3,...]，分别表示第一个手指、第二个手指...。<br>一次触摸动作(手指按下到手指离开的过程)，在整个屏幕移动过程中，该标识符不变，可以用来判断是否是同一次触摸过程 |
| clientX    | number | 距离可见区域左边沿的 X 轴坐标，不包含任何滚动偏移。 |
| clientY    | number | 距离可见区域上边沿的 Y 轴坐标，不包含任何滚动偏移以及状态栏和 titlebar 的高度。 |
| pageX      | number | 距离可见区域左边沿的 X 轴坐标，包含任何滚动偏移。 |
| pageY      | number | 距离可见区域上边沿的 Y 轴坐标，包含任何滚动偏移。（不包含状态栏和 titlebar 的高度） |
| offsetX    | number | 距离事件触发对象左边沿 X 轴的距离 |
| offsetY    | number | 距离事件触发对象上边沿 Y 轴的距离 | -->
### 1、MouseEvent:

| Attribute    | Type   | Description                                                                                |
| ------- | ------ | ----------------------------------------------------------------------------------- |
| clientX | number | The X-axis coordinate from the left edge of the visible area, without any scroll offset. |
| clientY | number | The Y-axis coordinate from the upper edge of the visible area, excluding any scroll offset and the height of the status bar and titlebar. |
| pageX   | number | The X coordinate from the left edge of the visible area, including any scroll offset. |
| pageY   | number | The Y coordinate from the upper edge of the visible area, including any scroll offset. (Does not include the height of the status bar and titlebar) |
| offsetX | number | The distance along the X axis from the left edge of the event target element. |
| offsetY | number | The distance along the Y axis from the top edge of the event target element. |

#### Example:

As follows, the click event is bound to the div, and the event is printed when the event is triggered.

```html
<template>
  <div class="root-page">
    <div class="touch-region" onclick="click"></div>
  </div>
</template>

<style>
  .root-page {
    flex-direction: column;
    align-items: center;
  }

  .touch-region {
    width: 80%;
    height: 20%;
    background-color: #444444;
  }

</style>

<script>
  export default {
    private: {},
    click(event) {
      console.log("click event fired", JSON.stringify(event));
    }
  }
</script>
```

**Output**

```
click event fired {...}
```

### 2、KeyEvent:

| Attribute    | Type   | Description |
| ------- | ------ | ----------------------------------------------------------------------------------- |
| code | number | Keycode value, see to the `keycode` table. |
| action | number | The action of pressing or releasing, 0: press; 1: release. Normally, a key operation will trigger a "press" and a "release". |
| repeatCount | number | The number of consecutive keystrokes. When pressing, multiple key events whose action is "press" will be generated continuously. At this time, except for the first key event, the `repeatCount` is 0, and the `repeatCount` of subsequent key events will increase. |

#### `keycode` table

| Code    | Description   | Behavior | Device |
| 19 | DPAD_UP | move up | remote control |
| 20 | DPAD_DOWN | move down | remote control |
| 21 | DPAD_LEFT | move left | remote control |
| 22 | DPAD_RIGHT | move right | remote control |
| 23 | DPAD_CENTER | confirm | remote control |
| 109 | BUTTON_SELECT | select | handle |
| 96 | BUTTON_A | press button a | handle |
| 66 | ENTER | enter | keyboard |
| 160 | NUMPAD_ENTER | enter in numpad | keyboard |

#### Example：

As follows, the key event is bound to the div component.

```html
<template>
  <div class="root-page">
    <div class="touch-region" onkey="key"></div>
  </div>
</template>

<style>
  .root-page {
    flex-direction: column;
    align-items: center;
  }

  .touch-region {
    width: 80%;
    height: 20%;
    background-color: #444444;
  }

</style>

<script>
  export default {
    private: {},
    key(event) {
      console.log("key event fired", JSON.stringify(event))
    }
  }

</script>
```

**Output**
```
key event fired {...}
```