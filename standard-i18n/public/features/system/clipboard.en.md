# Clipboard

## Interface declaration

```
{"name": "system.clipboard"}
```

## Import module

```
import clipboard from '@system.clipboard' or var clipboard = require("@system.clipboard")
```

## Interface definition

### clipboard.set(OBJECT)

Modify clipboard contents

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| text           | String   | Yes      | The content that needs to be put on the clipboard |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

#### Example:

```
clipboard.set({
  text: 'text'
})
```

### clipboard.get(OBJECT)

Read clipboard content

#### Parameters:

| Parameter name | Type     | Required | Description                              |
| -------------- | -------- | -------- | ---------------------------------------- |
| success        | Function | No       | Callback succeeded                       |
| fail           | Function | No       | Couldn't return callback                 |
| complete       | Function | No       | The callback after the implementation finished |

##### Success return value:

| Parameter name | Type   | Description       |
| -------------- | ------ | ----------------- |
| text           | String | Clipboard content |

#### Example:

```
clipboard.get({
  success:function(data){
    console.log("handling success: " + data.text);
  },
  fail: function(data, code) {
    console.log("handling fail, code=" + code);
  }
})
```