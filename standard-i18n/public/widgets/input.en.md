# input

## Overview

Provides an interactive interface, accepts users' inputs, default as one-way traffic

## Child component

Not supported

## Attribute

Supports [common attributes](common-attributes.md)

| Name        | Type                                     | Default value | Required | Description                              |
| ----------- | ---------------------------------------- | ------------- | -------- | ---------------------------------------- |
| type        | button &#124; checkbox &#124; radio`101+` &#124; text &#124; email &#124; date &#124; time &#124; number &#124; password | text          | No       | Dynamic modification not supported       |
| checked     | `<boolean>`                              | false         | No       | The checked status of the current component, can trigger checked pseudo-class, takes effect when the type is checkbox |
| name `101+` | `<string>`                               | -             | No       | Name of input component                  |
| value       | `<string>`                               | -             | No       | Value of input component                 |

## Style

Supports [common styles](common-styles.md)

| Name              | Type                      | Default value | Required | Description                              |
| ----------------- | ------------------------- | ------------- | -------- | ---------------------------------------- |
| color             | `<color>`                 | 0xde000000    | No       | Text color                               |
| font-size         | `<number>`                | 37.5px        | No       | Text size                                |
| placeholder       | `<string>`                | 37.5px        | No       | Prompts for text content, takes effect when the type is text&#124;email&#124;date&#124;time |
| placeholder-color | `<color>`                 | 0x61000000    | No       | Prompts for text color, takes effect when the type is text&#124;email&#124;date&#124;time |
| width             | `<length>` &#124; `<percentage>` | -             | No       | Default value is 128px when the type is button |
| height            | `<length>` &#124; `<percentage>` | -             | No       | Default value is 70px when the type is button |

## Events

Supports [common events](common-events.md)

Supports change events, triggered when the value or checked status of the input component changes

| Parameters        | text &#124; email &#124; date &#124; time &#124; number | Checkbox | Radio | Notes              |
| ----------------- | --------------------------------------- | -------- | ----- | ------------------ |
| name `101+`       |                                         | √        | √     |                    |
| value `101+`      | √                                       | √        | √     |                    |
| checked `101+`    |                                         | √        |       |                    |
| text `deprecated` | √                                       | √        |       | Replace with value |

## Method

| Name  | Parameters                               | Description                              |
| ----- | ---------------------------------------- | ---------------------------------------- |
| focus | {focus:true&#124;false}, default is true when focus isn't transmitted | Enables the component to get or lose focus, can trigger a focus pseudo-class, can eject or retract input method when the type is text&#124;email&#124;date&#124;time&#124;number&#124;password |
