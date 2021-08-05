# text

## Overview

Text

Text content and tag content area, supports escape character `"\"`

## Child component

Only supports [`<a>`](a.html) and [`<span>`](span.md)

## Attribute

Supports [common attributes](common-attributes.md)

## Style

Supports [common styles](common-styles.md)

| Name            | Type                              | Default value | Required | Description                              |
| --------------- | --------------------------------- | ------------- | -------- | ---------------------------------------- |
| lines           | `<number>`                        | -1            | No       | Number of text lines, -1 means unlimited number of lines |
| color           | `<color>`                         | 0x8a000000    | No       | Text color                               |
| font-size       | `<number>`                        | 30px          | No       | Text size                                |
| font-style      | normal &#124; italic                  | normal        | No       |                                          |
| font-weight     | normal &#124; bold                    | normal        | No       |                                          |
| text-decoration | underline &#124; line-through &#124; none | none          | No       |                                          |
| text-align      | left &#124; center &#124; right           | left          | No       |                                          |
| line-height     | `<length>`                        | -             | No       | Height of text lines                     |
| text-overflow   | clip &#124; ellipsis                  | clip          | No       | Takes effect when number of lines has been set |

## Events

Supports [common events](common-events.md)
