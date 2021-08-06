# Common attributes

## General attributes

| Name     | Type        | Default value | Description                              |
| -------- | ----------- | ------------- | ---------------------------------------- |
| ID       | `<string>`  | -             | Unique identifier                        |
| style    | `<string>`  | -             | Style declaration                        |
| class    | `<string>`  | -             | Reference style list                     |
| disabled | `<boolean>` | false         | Indicates whether the current component can be used |

## Rendering attributes

| Name | Type        | Default value | Description                              |
| ---- | ----------- | ------------- | ---------------------------------------- |
| for  | `<array>`   | -             | Loop unroll current tag according to the data list |
| if   | `<boolean>` | -             | Add or delete current tag according to the data Boolean value |
| show | `<boolean>` | -             | Display or hide the current tag according to the data Boolean value, equivalent to { display: flex &#124; none } |

For details on rendering attributes operation modes, see the [Template](../framework/template.md) chapter.

Note: attributes and styles can't be mixed up, you can't set the style in the attribute field.
