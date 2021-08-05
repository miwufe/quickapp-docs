# slider

## Overview

Slide selector

## Child components

Not supported

## Attributes

Supports [common attributes](common-attributes.md)

| Name  | Type       | Default value | Required | Description |
| ----- | ---------- | ------------- | -------- | ----------- |
| min   | `<number>` | 0             | No       | -           |
| max   | `<number>` | 100           | No       | -           |
| step  | `<number>` | 1             | No       | -           |
| value | `<number>` | 0             | No       | -           |

## Style

Supports [common styles](common-styles.md)

| Name                  | Type       | Default value | Required | Description                      |
| --------------------- | ---------- | ------------- | -------- | -------------------------------- |
| color                 | `<color>`  | 0xfff0f0f0    | No       | Background bar color             |
| selected-color        | `<color>`  | 0xff009688    | No       | Selected color                   |
| padding-[left&#124;right] | `<length>` | 32px          | No       | Left and right-hand side margins |

## Events

Supports [common events](common-events.md)

| Name   | Parameters               | Description                              |
| ------ | ------------------------ | ---------------------------------------- |
| change | {progress:progressValue} | Event triggered after something is dragged |
