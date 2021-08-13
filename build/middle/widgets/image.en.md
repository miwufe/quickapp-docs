# image

## Overview

Render image

## Child component

Not supported

## Attribute

Supports [common attributes](common-attributes.en.md)

| Name | Type    | Default value | Required | Description                              |
| ---- | ------- | ------------- | -------- | ---------------------------------------- |
| src  | `<uri>` | -             | No       | The image URI, supports local and cloud paths at the same time, image styles supported include static (png, jpg) and dynamic (gif) |
| alt  | `<uri>` | -             | No       | The image placeholder displayed when loading; only supports local image resources |
| fade-duration  | `<number>` | 0  | No | The duration (by milliseconds) of the fading-in effect when the component shows. |
| loop-count  | `<number>` | cover  | No | Play times of the image, only valid when the source is an animated image. And It will be infinitely played while the attribute value is 0. |

## Style

Supports [common styles](common-styles.en.md)

| Name        | Type                                  | Default value | Required | Description           |
| ----------- | ------------------------------------- | ------------- | -------- | --------------------- |
| object-fit  | cover &#124; contain &#124; fill &#124; none &#124; scale-down | cover  | No | Image's resizing type |

object-fit type:

| Type    | Description                              |
| ------- | ---------------------------------------- |
| cover   | Keeps the aspect ratio, shrinks or enlarges, makes the 2 sides larger than or equal to the display boundaries, centers in the display |
| contain | Keeps the aspect ratio, shrinks or enlarges, makes the image be displayed completely within the boundaries of the display, centers in the display |
| fill | Doesn't save aspect ratio, fills the display boundaries |
| none  | Centers, doesn't resize |
| scale-down  | Keeps the aspect ratio, shrinks or stay the same, render as the smaller one between 'contain' mode or 'none' mode, centers. |

## Events

Supports [common events](common-events.en.md)
