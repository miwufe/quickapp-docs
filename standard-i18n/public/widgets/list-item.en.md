# list-item

## Overview

The child component of [`<list> `](list.md) is used to show a specific item in the list, the width fills the list component by default.

## Child component

Supported

## Attribute

Supports [common attributes](common-attributes.md)

| Name | Type       | Default value | Required | Description                              |
| ---- | ---------- | ------------- | -------- | ---------------------------------------- |
| type | `<string>` | -             | Yes      | List-item type, the same list supports multiple list-item types, make sure the same list-item is completely the same as the view layout after rendering. When the type is fixed, use the "show" attribute to replace the "if" attribute to guarantee that the view layout doesn't change |

## Style

Supports [` <div> style`](div.md)

Doesn't support the position style, supports [common styles](common-styles.md)

| Name               | Type       | Default value | Required | Description                              |
| ------------------ | ---------- | ------------- | -------- | ---------------------------------------- |
| column-span `101+` | `<number>` | 1             | No       | The column number that the list-item takes up in the list, generally used to display multiple columns in a list |

## Events

Supports [common events](common-events.md)
