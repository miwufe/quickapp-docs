# a

## Overview

Hyperlink (default is not underlined)

Text content and tag content area, supports escape character `"\"`

## Child component

Only supports [`span`](span.md)

## Attribute

Supports [common attributes](common-attributes.md)

| Name | Type       | Default value | Required | Description                              |
| ---- | ---------- | ------------- | -------- | ---------------------------------------- |
| href | `<string>` | -             | No       | For supported styles, see the URI parameters in [Page routing](../features/system/router.md) Additionally:"href" can also add parameters through the "?param1=value1" method, the parameters can be used through the `this.param1` method."href" also supports web address that start with http and https, it will open WebView and load the page after clicking on itExample:`<a href="About?param1=value1" />``<a href="/about?param1=value1" />``<a href="http://www.example.com?param1=value1" />` |

## Style

Supports [`<text> style`](text.md)

Supports [common styles](common-styles.md)

## Events

Supports [common events](common-events.md)
