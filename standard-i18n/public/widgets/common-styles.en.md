# Common styles

| Name                                     | Type                      | Default value | Description                              |
| ---------------------------------------- | ------------------------- | ------------- | ---------------------------------------- |
| width                                    | `<length>` &#124; `<percentage>` | -             | Use the width required by the component's own content when it isn't set |
| height                                   | `<length>` &#124; `<percentage>` | -             | Use the height required by the component's own content when it isn't set |
| padding                                  | `<length>`                | 0             | Shorthand attributes, set all padding properties in a declaration, this attribute can have 1 to 4 values |
| padding-[left&#124;top&#124;right&#124;bottom]       | `<length>`                | 0             |                                          |
| margin                                   | `<length>`                | 0             | Shorthand attribute, set all padding properties in a declaration, this attribute can have 1 to 4 values |
| margin-[left&#124;top&#124;right&#124;bottom]        | `<length>`                | 0             |                                          |
| border                                   | -                         | 0             | Shorthand attribute, set all border properties in a declaration, you can set the attributes in the order of width, style and color, when the value isn't set it will be set as the default value |
| border-style                             | dotted &#124; dashed &#124; solid | solid         | Temporarily only supports 1 value, set style for borders of all elements |
| border-width                             | `<length>`                | 0             | Shorthand attribute, set all border widths of an element in a declaration or set a width for each border individually |
| border-[left&#124;top&#124;right&#124;bottom]-width  | `<length>`                | 0             |                                          |
| border-color                             | `<color>`                 | black         | Shorthand attribute, set all the border colors of an element in a declaration or set the color for each border individually |
| border-[left&#124;top&#124;right&#124;bottom]-color  | `<color>`                 | black         |                                          |
| border-radius                            | `<length>`                | 0             | When there are rounded corners, only use border width, when the border-[left&#124;top&#124;right&#124;bottom]-width doesn't have valid rounded corners, only use border-color, border-[left&#124;top&#124;right&#124;bottom]-color isn't valid |
| border-[top&#124;bottom]-[left&#124;right]-radius | `<length>`                | 0             |                                          |
| background                               | `<linear-gradient>`       | -             | Supports [gradient style](gradient-styles.en.md), temporarily can't be used alongside background-color and background-image |
| background-color                         | `<color>`                 | -             |                                          |
| background-image                         | `<uri>`                   | -             | Temporarily isn't supported to be used alongside background-color and border-color; doesn't support online image resources, use local image resources |
| opacity                                  | `<number>`                | 0xff          |                                          |
| display                                  | flex &#124; none              | flex          |                                          |
| visibility                               | visible &#124; hidden         | visible       |                                          |
| flex                                     | `<number>`                | -             | Takes effect when the parent container is `<div>, <list-item>, <tabs>` |
| flex-grow                                | `<number>`                | 0             | Takes effect when the parent container is `<div>, <list-item>` |
| flex-shrink                              | `<number>`                | 1             | Takes effect when the parent container is `<div>, <list-item>` |
| flex-basis                               | `<number>`                | -1            | Takes effect when the parent container is `<div>, <list-item>` |
| position                                 | none &#124; fixed             | none          |                                          |
| [left&#124;top&#124;right&#124;bottom]               | `<number>`                | -             | -                                         |

Note: none of the common styles are required.
