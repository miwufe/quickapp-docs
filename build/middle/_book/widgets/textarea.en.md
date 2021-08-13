# textarea

## Overview

Provides an interactive interface, accepts user input, default as multi-lines

## Child component

Not supported

## Attributes

Supports [common attributes](common-attributes.md)

## Style

Supports [common styles](common-styles.md)

| Name              | Type       | Default value | Required | Description              |
| ----------------- | ---------- | ------------- | -------- | ------------------------ |
| color             | `<color>`  | 0xde000000    | No       | Text color               |
| font-size         | `<number>` | 37.5px        | No       | Text size                |
| placeholder       | `<string>` | 37.5          | No       | Prompts for text content |
| placeholder-color | `<color>`  | 0x61000000    | No       | Prompts for text color   |

## Events

Supports [common events](common-events.md)

| Name   | Parameters     | Description                             |
| ------ | -------------- | --------------------------------------- |
| change | {text:newText} | Triggered when input content is changed |

## Method

| Name  | Parameters                               | Description                              |
| ----- | ---------------------------------------- | ---------------------------------------- |
| focus | {focus:true&#124;false}, default is true when focus isn't transmitted | Enables the component to get or lose focus, can trigger focus pseudo-class, can eject or retract input method |
