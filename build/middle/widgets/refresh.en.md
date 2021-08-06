# refresh

## Overview

Pull down to refresh container

## Child component

Supported

## Attribute

| Name       | Type        | Default value | Required | Description                              |
| ---------- | ----------- | ------------- | -------- | ---------------------------------------- |
| offset     | `<length>`  | 132px         | No       | The distance from the top when refreshing component is static |
| refreshing | `<boolean>` | false         | No       | Whether the refresh component is refreshing |

## Style

| Name             | Type      | Default value | Required | Description                        |
| ---------------- | --------- | ------------- | -------- | ---------------------------------- |
| background-color | `<color>` | white         | No       | Refresh component background color |
| progress-color   | `<color>` | black         | No       | Refresh component loading color    |

## Events

| Name    | Parameters                    | Description                              |
| ------- | ----------------------------- | ---------------------------------------- |
| refresh | {refreshing: refreshingValue} | Dropdown refresh component, triggers refresh operation |