# tabs

## Overview

Tab container

## Child component

Only supports 1 [`<tab-bar>`](tab-bar.md) and 1 [`<tab-content>`](tab-content.md)

## Attribute

Supports [common attributes](common-attributes.md)

| Name  | Type       | Default value | Required | Description              |
| ----- | ---------- | ------------- | -------- | ------------------------ |
| index | `<number>` | 0             | No       | Current active tab index |
| layout-type | `<string>` | 'linear-vertical'  | No       | It indicates the arrangement of component's child elements, the value can be 'linear-vertical', which means they will be arranged vertically, or 'stack', means the arrangement will follow a 'stack-like' rule. |

## Style

Supports [common styles](common-styles.en.md)

## Events

Supports [common events](common-events.en.md)

| Name   | Parameters          | Description                              |
| ------ | ------------------- | ---------------------------------------- |
| change | {index: indexValue} | Triggered when child component 'active' changes |
