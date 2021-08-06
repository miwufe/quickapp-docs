# swiper

## Overview

Slider view container

## Child component

Supported

## Attribute

Supports [common attributes](common-attributes.md)

| Name      | Type        | Default value | Required | Description                              |
| --------- | ----------- | ------------- | -------- | ---------------------------------------- |
| index     | `<number>`  | 0             | No       | Currently displayed child component index |
| autoplay  | `<boolean>` | false         | No       | Whether to autoplay after finishing rendering |
| interval  | `<number>`  | 3000ms        | No       | Time interval for autoplay, in milliseconds |
| indicator | `<boolean>` | true          | No       | Whether the indicator is enabled, default is true |

## Style

Supports [common styles](common-styles.md)

| Name                     | Type       | Default value | Required | Description                            |
| ------------------------ | ---------- | ------------- | -------- | -------------------------------------- |
| indicator-color          | `<color>`  | 0x7f000000    | No       | Indicator fill color                   |
| indicator-selected-color | `<color>`  | 0xff33b4ff    | No       | Color when indicator is being selected |
| indicator-size           | `<length>` | 20px          | No       | Diameter of indicator component        |

## Events

Supports [common events](common-events.md)

| Name   | Parameters           | Description                              |
| ------ | -------------------- | ---------------------------------------- |
| change | {index:currentIndex} | Triggered when the currently displayed component index changes |

## Method

| Name    | Parameters                           | Description                      |
| ------- | ------------------------------------ | -------------------------------- |
| swipeTo | {index: number (specified location)} | Swiper scrolls to index location |