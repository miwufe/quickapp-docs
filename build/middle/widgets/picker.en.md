# picker

## Overview

Scroll selector, currently supports 3 types of selectors: ordinary selectors, date selectors and time selectors. The default is an ordinary selector.

## Child component

Not supported

## Attribute

Supports [common attributes](common-attributes.md)

| Name     | Type                 | Default value     | Required | Description                              |
| -------- | -------------------- | ----------------- | -------- | ---------------------------------------- |
| type     | text &#124; date &#124; time | -                 | Yes      | Dynamic modification not supported       |
| start    | `<time>`             | 1970-1-1          | No       | Takes effect when the type is date. Start time. Format is yyyy-MM-dd |
| end      | `<time>`             | 2100-12-31        | No       | Takes effect when the type is date. End time. Format is yyyy-MM-dd |
| range    | `<array>`            | -                 | No       | Takes effect when the type is text. Value range of the selector |
| selected | `<string>`           | Current time or 0 | No       | The default value of the selector. When the type is date, the format is yyyy-MM-dd, when the type is time, the format is hh:mm, when the type is text, the value is the index of the range |
| value    | `<string>`           | -                 | No       | Selector value                           |

## Style

Supports [common styles](common-styles.md)

## Events

Doesn't support click events, supports [common events](common-events.md)

| Name   | Parameters                               | Description                              |
| ------ | ---------------------------------------- | ---------------------------------------- |
| change | date: {year:year,month:month,day:day}; time: {hour:hour,minute:minute}; text: {newValue:newValue,newSelected:newSelected} | Triggered after determining the value selected by the scroll selector (newSelected as index) |

## Method

| Name | Parameters | Description |
| ---- | ---------- | ----------- |
| show | -          | Show picker |
