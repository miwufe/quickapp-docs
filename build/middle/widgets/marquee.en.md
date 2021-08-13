# marquee

## Overview

Marquee is used to show one line of of scrolling text.

## Child component

Not supported.

## Attributes

Support [common attributes](common-attributes.md)

| Name         | Type       | Default value | Required | Description |
| ------------ | ---------- | ------ | ---- | --------------------------------------------------------------------------- |
| scrollamount | `<number>` | 6      | No   | Set the length of each scroll, by pixels. |
| loop         | `<number>` | -1     | No   | Set the number of times the marquee scrolls. If no value is specified, the default value is −1, which means that marquee will scroll continuously. |
| direction    | `<string>` | left   | No   | Text scroll direction, left or right. |

## Styles

Support [common styles](common-styles.md)

| Name         | Type       | Default value | Required | Description |
| ----------- | ---------- | ------------------- | ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| color       | `<color>`  | rgba(0, 0, 0, 0.54) | No   | text color |
| font-size   | `<length>` | 30px                | No   | font size |
| font-family | `<string>` | -                   | No   | You can set a sequential list consisting of font names or font family names, separated by commas. The first installed font in the list or the font specified by font-face will be selected as the text font. |

## Events

Support [common events](common-events.md)

| Name   | Parameters | Description |
| ------ | ---- | ---------------------------------------------------------------------------------------- |
| bounce | -    | Triggered when marquee scrolls to the end. |
| finish | -    | Triggered when marquee finishs several times of scrolling specified by `loop`. It can only be triggered when the loop attribute is set to a number greater than 0. |
| start  | -    | Triggered when marquee starts to scroll. |

## Methods

| Name   | Parameters | Description |
| ----- | ---- | ---------------- |
| start | -    | start to scroll |
| stop  | -    | stop scrolling |

## Examples

See to [samples](https://github.com/quickappcn/sample/blob/master/src/component/basic/marquee/index.ux)