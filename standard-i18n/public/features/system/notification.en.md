# Notification message

## Interface declaration

```
{"name": "system.notification"}
```

## Import module

```
import notification from '@system.notification' or var notification = require("@system.notification")
```

## Interface definition

### notification.show(OBJECT)

Show notifications

#### Parameters:

| Parameter name | Type   | Required | Description                              |
| -------------- | ------ | -------- | ---------------------------------------- |
| contentTitle   | String | No       | Title                                    |
| contentText    | String | No       | Content                                  |
| clickAction    | Object | No       | Information triggering action after the notification has been tapped |

##### clickAction:

| Parameter name | Type   | Required | Description                              |
| -------------- | ------ | -------- | ---------------------------------------- |
| uri            | String | Yes      | Jump to the page address after tapping on the notification. The supported styles include:App page paths starting with"/"; e.g.: /aboutThe name of the page in the app not starting with "/"; e.g.: AboutSpecial format. When URI value is "/", the user will be redirected to the page with the path "/", and not the start page.You can add parameters through the "?param1=value1" method, the parameters can be used through `this.param1 `method in the web page |

#### Example:

```
notification.show({
  contentTitle:'title',
  clickAction: {
    uri:'/index.html?index=1'
  }
})
```