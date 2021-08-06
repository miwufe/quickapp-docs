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
| columns `101+` | number        | 1             | No       | List displays column number |

## Events

| Name         | Parameters                               | Description                    |
| ------------ | ---------------------------------------- | ------------------------------ |
| scroll       | {scrollX:scrollXValue, scrollY:scrollYValue} | List slider                    |
| scrollbottom | -                                        | The list scrolls to the bottom |
| scrolltop    | -                                        | The list scrolls to the top    |

## Method

| Name     | Parameters                          | Description                              |
| -------- | ----------------------------------- | ---------------------------------------- |
| scrollTo | {index: number(specified location)} | The list scrolls to a specified item location |
