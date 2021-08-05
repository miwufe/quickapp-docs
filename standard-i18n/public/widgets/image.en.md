# image

## Overview

Render image

## Child component

Not supported

## Attribute

Supports [common attributes](common-attributes.md)

| Name | Type    | Default value | Required | Description                              |
| ---- | ------- | ------------- | -------- | ---------------------------------------- |
| src  | `<uri>` | -             | No       | The image URI, supports local and cloud paths at the same time, image styles supported include static (png, jpg) and dynamic (gif) |
| alt  | `<uri>` | -             | No       | The image placeholder displayed when loading; only supports local image resources |

## Style

Supports [common styles](common-styles.md)

| Name        | Type                                  | Default value | Required | Description           |
| ----------- | ------------------------------------- | ------------- | -------- | --------------------- |
| resize-mode | cover &#124; contain &#124; stretch &#124; center | cover         | No       | Image's resizing type |

resize-mode type

| Type    | Description                              |
| ------- | ---------------------------------------- |
| cover   | Keeps the aspect ratio, shrinks or enlarges, makes the 2 sides larger than or equal to the display boundaries, centers in the display |
| contain | Keeps the aspect ratio, shrinks or enlarges, makes the image be displayed completely within the boundaries of the display, centers in the display |
| stretch | Doesn't save aspect ratio, fills the display boundaries |
| center  | Centers, doesn't resize                  |

## Events

Supports [common events](common-events.md)
