# list

## Overview

ListView container

## Child component

Only supports [`<list-item>`](list-item.md)

## Attribute

Supports [common attributes](common-attributes.md)

| Name       | Type    | Default value | Required | Description                              |
| ---------- | ------- | ------------- | -------- | ---------------------------------------- |
| scrollpage | boolean | false         | No       | Whether or not to scroll the non-list part at the top of the web page into the visual area along with the list. Starting this attribute will decrease the list's rendering performance |

## Style

Supports [common styles](common-styles.md)

| Name           | Type          | Default value | Required | Description                 |
| -------------- | ------------- | ------------- | -------- | --------------------------- |
| flex-direction | column &#124; row | column        | No       |                             |
<!-- | columns `101+` | number        | 1             | No       | List displays column number | -->

## Events

| Name         | Parameters                               | Description                    |
| ------------ | ---------------------------------------- | ------------------------------ |
| scroll       | {scrollX:scrollXValue, scrollY:scrollYValue} | List slider                    |
| scrollbottom | -                                        | The list scrolls to the bottom |
| scrolltop    | -                                        | The list scrolls to the top    |

## Method

| Name     | Parameters                          | Description                              |
| -------- | ----------------------------------- | ---------------------------------------- |
| scrollTo | Object | The list scrolls to a specified item location |
| scrollBy | Object | The list scrolls by a specified distance. |

**scrollTo's parameters:**

| 名称      | 类型      | 是否必选      | 默认值        | 备注              |
| --------- | -------- | ------------ | ------------ | ----------------- |
| index     | number   | 否           | 0             | list 滚动的目标 item 位置 |
| smooth `deprecated` | boolean  | 否           | false         | 是否平滑滚动，值为 false 时表示直接滚动到指定位置，值为 true 时表示平滑滚动到指定位置 |
| behavior `1070+` | smooth &#124; instant &#124; auto | 否 | auto | 是否平滑滑动，支持参数 smooth (平滑滚动)，instant (瞬间滚动)，默认值 auto，效果等同于 instant |

**scrollBy's parameters:**

| 名称      | 类型      | 是否必选      | 默认值        | 备注              |
| --------- | -------- | ------------ | ------------ | ----------------- |
| left      | number   | 否           | 0            | 从当前位置水平方向滑动距离，单位 px。值为正时向左滑动，为负时向右滑动。flex-direction 为 column 或 column-reverse 时不生效 |
| top       | number   | 否           | 0            | 从当前位置垂直方向滑动距离，单位 px。值为正时向上滑动，为负时向下滑动。flex-direction 为 row 或 row-reverse 时不生效 |
| behavior  | smooth &#124; instant &#124; auto | 否 | auto | 是否平滑滑动，支持参数 smooth (平滑滚动)，instant (瞬间滚动)，默认值 auto，效果等同于 instant |


## list &nbsp; Example:

see to [example](https://github.com/quickappcn/sample/blob/master/src/component/container/list/index.ux)

see to one waterfall [example](https://github.com/quickappcn/sample/blob/master/src/scenario/scene/waterfall/index.ux)