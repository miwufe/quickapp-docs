# progress

## Overview

Progress bar

## Child components

Not supported

## Attributes

Supports [common attributes](common-attributes.md)

| Name    | Type                   | Default value | Required | Description                              |
| ------- | ---------------------- | ------------- | -------- | ---------------------------------------- |
| percent | `<number>`             | 0             | No       | Current progress (doesn't take effect when the type is circular) |
| type    | horizontal &#124; circular | horizontal    | No       | Progress bar type, dynamic modification not supported |

## Style

Supports [common styles](common-styles.md)

Horizontal progress background color is #f0f0f0.

The default width of the circular progress is 32px. When the width settings are inconsistent, the circular icon will have a smaller value for the width.

| Name         | Type       | Default value                   | Required | Description                              |
| ------------ | ---------- | ------------------------------- | -------- | ---------------------------------------- |
| color        | `<color>`  | `#33b4ff or RGB (51, 180, 255)` | No       | Color of progress bar                    |
| stroke-width | `<length>` | 32px                            | No       | Width of progress bar (doesn't take effect when the type is circular) |

## Events

Supports [common events](common-events.md)
