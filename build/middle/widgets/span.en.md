# span

## Overview

Formatted text, can only be child components of [`<text>`](text.md) and [`<a>`](a.md)

## Child component

Not supported

## Attribute

| Name  | Type        | Default value | Required | Description                              |
| ----- | ----------- | ------------- | -------- | ---------------------------------------- |
| ID    | `<string>`  | -             | No       | Unique identifier                        |
| style | `<string>`  | -             | No       | Style declaration                        |
| class | `<string>`  | -             | No       | Reference style list                     |
| for   | `<array>`   | -             | No       | Loop unrolling current tag according to the data list |
| if    | `<boolean>` | -             | No       | Add or delete current tag according to the data Boolean value |

## Style

| Name            | Type                              | Default value | Required | Description |
| --------------- | --------------------------------- | ------------- | -------- | ----------- |
| color           | `<color>`                         | 0x8a000000    | No       | Text color  |
| font-size       | `<number>`                        | 30px          | No       | Text size   |
| font-style      | normal &#124; italic                  | normal        | No       |             |
| font-weight     | normal &#124; bold                    | normal        | No       |             |
| text-decoration | underline &#124; line-through &#124; none | none          | No       | -             |

## Events

Not supported
