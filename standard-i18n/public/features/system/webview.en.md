# Opening web page

## Interface declaration

```
{"name": "system.webview"}
```

## Import module

```
import webview from '@system.webview' or var webview = require("@system.webview")
```

## Interface definition

### webview.loadUrl(OBJECT)

Open web page, the title bar style is the same as the style of the title bar of the open WebView page.

#### Parameters:

| Parameter name | Type   | Required | Description      |
| -------------- | ------ | -------- | ---------------- |
| url            | String | Yes      | Page URL to load |

#### Example:

```
webview.loadUrl({
  url:'http://www.example.com'
})
```

## WebView internal API

APIs that can be used in web pages opened in WebView

### system.go(path)

Return specified page of the current app

#### Parameters:

| Parameter name | Type   | Required | Description                              |
| -------------- | ------ | -------- | ---------------------------------------- |
| path           | String | Yes      | The page to return to, e.g.: /detail?param1=value1, if the value of the path is "/", then the path jumped to is the "/" page, if there is none, then it will jump to the home page |

#### Example:

```
system.go("/detail?param1=value1")
```