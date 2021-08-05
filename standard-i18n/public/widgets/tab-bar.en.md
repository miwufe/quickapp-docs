# tab-bar

## Overview

A child component of [`<tabs>`](tabs.html) that is used to display the tab's content area, the child components are arranged horizontally.

## Child component

Supported

## Attribute

Supports [common attributes](common-attributes.md)

| Name | Type                | Default value | Required | Description                              |
| ---- | ------------------- | ------------- | -------- | ---------------------------------------- |
| mode | scrollable &#124; fixed | fixed         | No       | When the mode is set as scrollable, the width of the component is the set width, when its width is broader than that of the width, the child component can be scrolled horizontally; when the mode is set as fixed, the width of the child component is split equally with the the tab-bar, when its width is broader than that of the tab-bar, the child component will still split the width equally |

## Style

Supports [common styles](common-styles.md)

| Name | Type                 | Default value | Required |
| -------- | ------------------------ | ----------------- | ------------ |
| height   | `<length>` &#124; `<percentage>` | 100px             | No           |

## Events

Supports [common events](common-events.md)
