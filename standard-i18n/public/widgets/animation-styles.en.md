# Animation style

| Name                      | Type                                     | Default value | Description                              |
| ------------------------- | ---------------------------------------- | ------------- | ---------------------------------------- |
| transform-origin          | `<position>`                             | 0px 0px       | Transform origin position, currently, only the unit px is supported, the format is 50px 100px |
| transform                 | `<string>`                               | -             | See the transform operations below       |
| animation-name            | `<string>`                               | -             | Conforms with the name of the @keyframes. See @keyframes attributes below |
| animation-delay           | `<time>`                                 | 0             | Currently the units [ s (seconds) &#124; ms (milliseconds) ] are supported |
| animation-duration        | `<time>`                                 | 0             | Currently the units [ s (seconds) &#124; ms (milliseconds) ] are supported |
| animation-iteration-count | `<integer>` &#124; `infinite`                    | 1             | Define the number of times an animation is played, it can be set to `infinite` for unlimited play |
| animation-timing-function | linear &#124; ease &#124; ease-in &#124; ease-out &#124; ease-in-out | ease        |                                          |
| animation-fill-mode       | none &#124; forwards                         | none          | -                                          |

## Transform operations

| Name       | Type            |
| ---------- | --------------- |
| translate  | `<length>`      |
| translateX | `<length>`      |
| translateY | `<length>`      |
| scale      | `<number>`      |
| scaleX     | `<number>`      |
| scaleY     | `<number>`      |
| rotate     | `<deg>` &#124; `<rad>` |
| rotateX    | `<deg>` &#124; `<rad>` |
| rotateY    | `<deg>` &#124; `<rad>` |

## @keyframes attributes

| Name             | Type       | Default value | Description                             |
| ---------------- | ---------- | ------------- | --------------------------------------- |
| background-color | `<color>`  | -             |                                         |
| opacity          | `<number>` | -             |                                         |
| width/height     | `<length>` | -             | Temporarily doesn't support percentages |
| transform        | `<string>` | -             | -                                       |

Temporarily doesn't support default start values (0%) or a stop values (100%), they must be explicitly specified.
