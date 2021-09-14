# web `101+`

## Overview

Used to display online HTML pages

## Child components

Not supported

## Attributes

| Name | Type       | Default value | Required | Description              |
| ---- | ---------- | ------------- | -------- | ------------------------ |
| src  | `<string>` | -             | No       | Web page address to load |

## Events

Supports [common events](common-events.md)

| Name         | Parameters                               | Description                           |
| ------------ | ---------------------------------------- | ------------------------------------- |
| pagestart    | {url: urlString}                         | Triggered when page starts loading    |
| pagefinish   | {url: urlString, canBack: true/false, canForward: true/false} | Triggered when page finishes loading  |
| titlereceive | {title: title}                           | Triggered when page title is received |
| error        | {errorMsg: errorMsg}                     | Triggered when a page couldn't load   |

## Method

| Name       | Parameters           | Description                        |
| ---------- | -------------------- | ---------------------------------- |
| reload     |                      | Reload page                        |
| forward    |                      | View the previous page in history  |
| back       |                      | View the next page in history      |
| canForward | {callback: Function} | Whether you can navigate forwards  |
| canBack    | {callback: Function} | Whether you can navigate backwards |

##### "canForward" callback function return parameters:

| Parameter  | Return value type | Description                       |
| ---------- | ----------------- | --------------------------------- |
| canForward | Boolean           | Whether you can navigate forwards |

##### "canBack" callback function return parameters:

| Parameter | Return value type | Description                        |
| --------- | ----------------- | ---------------------------------- |
| canBack   | Boolean           | Whether you can navigate backwards |

#### Example:

```
<web src="http://www.example.com/" id="web"></web>
this.$element('web').canForward({
  callback: function(e){
    if(e){
      // Load next URL from browsing history
      this.$element('web').forward();
    }else{
      // TODO
    }
  }.bind(this)
})
```
