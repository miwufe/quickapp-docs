# Common attributes

## General attributes

| Name     | Type        | Default value | Description                              |
| -------- | ----------- | ------------- | ---------------------------------------- |
| id       | `<string>`  | -             | Unique identifier                        |
| style    | `<string>`  | -             | Style declaration                        |
| class    | `<string>`  | -             | Reference style list                     |
| disabled | `<boolean>` | false         | Indicates whether the current component can be used |
| nextfocus | `<nextfocus>` | null | Indicates which component will be the next to be focused if the 'up', 'down', 'left', 'right' key is pressed. |
| focusable | `<boolean>`  | false | Indicates whether component could be focused. |
| autofocus | `<boolean>` | false | Indicates the current component will get focused once it is rendered.  |

### nextfocus 类型描述：

| Name     | Type        | Default value | Description                              |
| -------- | ----------- | ------------- | ---------------------------------------- |
| left     | `<string>`  | -             | The id of next component that will be focused if the 'left' key is pressed. |
| up       | `<string>`  | -             | The id of next component that will be focused if the 'up' key is pressed. |
| right    | `<string>`  | -             | The id of next component that will be focused if the 'right' key is pressed. |
| down     | `<string>`  | -             | The id of next component that will be focused if the 'down' key is pressed. |

#### 示例：

``` html
<div focusable="true" nextfocus="{{JSON.stringify({'down': `tabContentId`})}}"></div>
```

## Rendering attributes

| Name | Type        | Default value | Description                              |
| ---- | ----------- | ------------- | ---------------------------------------- |
| for  | `<array>`   | -             | Loop unroll current tag according to the data list |
| if   | `<boolean>` | -             | Add or delete current tag according to the data Boolean value |
| show | `<boolean>` | -             | Display or hide the current tag according to the data Boolean value, equivalent to { display: flex &#124; none } |

For details on rendering attributes operation modes, see the [Template](../framework/template.en.md) chapter.

Note: attributes and styles can't be mixed up, you can't set the style in the attribute field.
